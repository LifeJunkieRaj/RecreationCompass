import React, { useState, useContext, useEffect } from 'react';
import RecreationCompass from "../apis/RecreationCompass";
import { BeachesAndParksContext } from "../ContextAPI/BeachesAndParksContext";

function AddBeachAndOrPark() {
    const {addBaps} = useContext(BeachesAndParksContext)
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [if_beach, setIf_Beach] = useState(true)
    const [if_park, setIf_Park] = useState(true)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await RecreationCompass.post("/", {
                name,
                location,
                if_beach,
                if_park,
            });
            console.log(response)
            addBaps(response.data.data.baps)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        console.log("if_beach", if_beach)
    },[if_beach])
    useEffect(() => {
        console.log("if_park", if_park)
    },[if_park])

    return (
        <div className="mb-4">
            <form action="">
                <div className="form-row">
                    <div className="col">
                        <input value={name} onChange={e => setName(e.target.value)} type="text" className="form-control" placeholder="Name"/>
                    </div>
                    <div className="col">
                        <input value={location} onChange={e => setLocation(e.target.value)} type="text" className="form-control" placeholder="Location"/>
                    </div>
                    <div className="col">
                        <select value={if_beach} onChange={e => setIf_Beach(e.target.value)} className="custom-select my-1 mr-sm-2">
                            <option disabled>Is it a beach?</option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
                    </div>
                    <div className="col">
                        <select value={if_park} onChange={e => setIf_Park(e.target.value)} className="custom-select my-1 mr-sm-2">
                            <option disabled>Is it a park?</option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
                    </div>
                    <button onClick={handleSubmit} type="submit" className="btn btn-primary">Add</button>
                </div>    
            </form>            
        </div>
    )
}

export default AddBeachAndOrPark
