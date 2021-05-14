require("dotenv").config();
const express = require("express");
const db = require("./db")
const morgan = require("morgan");
const app = express();

app.use(express.json());

// Get all Beaches and Parks
app.get("/api/baps", async (req, res) => {

    const results = await db.query("select * from beachesandparks")
        try {
            console.log(results);
            res.status(200).json({
                status: "success",
                results: results.rows.length,
                data: {
                    baps: results.rows,
                },
            });
        } catch (err) {}
        console.log(err)
});

//Get one Beach and/or Park
app.get("/api/baps/:id", async (req, res) => {
    console.log(req.params)
    try {
        const results = await db.query("select * from beachesandparks where id = $1", [req.params.id]);

        res.status(200).json({
            status: "success",
            data: {
                baps: results.rows[0],
            }
        })
    } catch (err) {
        console.log(err)
    };
    
});

// Create a Beach and/or Park
app.post("/api/baps", async (req, res) => {
    console.log(req.body);

    try {
        const results = await db.query("insert into beachesandparks (name, location, if_beach, if_park) values ($1, $2, $3, $4) returning *", [req.body.name, 
            req.body.location, req.body.if_beach, req.body.if_park] )
            console.log(results)
            res.status(201).json({
                status: "success",
                data: {
                    baps: results.rows[0],
                },
            });
    } catch (err) {
        console.log(err)
    };
});

// Update Beach and/or Park
app.put("/api/baps/:id", async (req, res) => {
    try {
        const results = await db.query("UPDATE beachesandparks SET name = $1, location = $2, if_beach = $3, if_park = $4 where id = $5 returning *", 
        [req.body.name, req.body.location, req.body.if_beach, req.body.if_park, req.params.id]);

        
        res.status(200).json({
            status: "success",
            data: {
                baps: results.rows[0],
            }
        })
    } catch (err) {
        console.log(err)
    }
    console.log(req.params.id);
    console.log(req.body)
});

// Delete a Beach and/or Park
app.delete("/api/baps/:id", async (req, res) => {
    try{
        const results = await db.query("DELETE FROM beachesandparks where id = $1", [req.params.id]);
        res.status(204).json({
            status: "success"
        })        
    } catch (err) {
        console.log(err)
    }
})

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is up and listening on port ${port}`);
});

