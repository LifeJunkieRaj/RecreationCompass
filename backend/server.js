require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db")
const morgan = require("morgan");
const app = express();

app.use(cors())
app.use(express.json());


// Get all Beaches and Parks
app.get("/api/baps", async (req, res) => {

    try {
    const results = await db.query("select * from beachesandparks")
    const beachesAndParksRatingsData = await db.query(
        "select * from beachesandparks left join (select beaches_and_parks_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by beaches_and_parks_id) reviews on beachesandparks.id = reviews.beaches_and_parks_id;"
    );
         
            res.status(200).json({
                status: "success",
                results: beachesAndParksRatingsData.rows.length,
                data: {
                    baps: beachesAndParksRatingsData.rows,
                },
            });} catch (err) {
        console.log(err)
        }
});

//Get one Beach and/or Park
app.get("/api/baps/:id", async (req, res) => {
    try {
        const bap = await db.query("select * from beachesandparks left join (select beaches_and_parks_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by beaches_and_parks_id) reviews on beachesandparks.id = reviews.beaches_and_parks_id where id = $1", [req.params.id]);

        const reviews = await db.query("select * from reviews where beaches_and_parks_id = $1", [req.params.id]);

        res.status(200).json({
            status: "success",
            data: {
                baps: bap.rows[0],
                reviews: reviews.rows,
            }
        })
    } catch (err) {
        console.log(err)
    };
    
});

// Create a Beach and/or Park
app.post("/api/baps", async (req, res) => {
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

app.post("/api/baps/:id/addReview", async (req, res) => {
    try {
        const newReview = await db.query("INSERT INTO reviews (beaches_and_parks_id, name, review, rating) values ($1, $2, $3, $4) returning *;", [req.params.id, req.body.name, req.body.review, req.body.rating])
        console.log(newReview)
        res.status(201).json({
            status: 'success',
            data: {
                review: newReview.rows[0],
            }
        })
    } catch (err) {
        console.log(err)
    }



})

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is up and listening on port ${port}`);
});

