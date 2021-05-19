import React, { useEffect, useContext } from 'react';
import RecreationCompass from "../apis/RecreationCompass";
import { BeachesAndParksContext } from "../ContextAPI/BeachesAndParksContext";
import { useHistory } from "react-router-dom";
import StarRating from './StarRating';

const BeachesAndParksList = (props) => {
    const { baps, setBaps } = useContext(BeachesAndParksContext);
    let history = useHistory()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await RecreationCompass.get("/");
                console.log(response.data.data)
                setBaps(response.data.data.baps)
            } catch (err) {}
        }

        fetchData()
    },[setBaps])

    const handleDelete = async (e, id) => {
        e.stopPropagation()
        try {
            const response = await RecreationCompass.delete(`/${id}`)
            setBaps(baps.filter(beachandpark => {
                return beachandpark.id !== id
            }))
            console.log(response)
        } catch (err) {

        }
    }

    const handleUpdate = async (e, id) => {
        e.stopPropagation()
        history.push(`/baps/${id}/update`);
    }

    const handleBeachesAndParksSelect = (id) => {
        history.push(`/baps/${id}`);
    }

    const renderRating = (beachandpark) => {
        if (!beachandpark.count) {
            return <span className="text-warning">0 reviews</span>
        }
        return <>
        <StarRating rating={beachandpark.id}/>
        <span className="test-warning ml - 1">({beachandpark.count})</span>
        </>
    }

    return (
        <div className="list-group">
            <table className="table table-hover table-dark">
               <thead>
                 <tr className="bg-primary">
                     <th scope="col">Beach and/or Park</th>
                     <th scope="col">Location</th>
                     <th scope="col">Beach</th>
                     <th scope="col">Park</th>
                     <th scope="col">Ratings</th>
                     <th scope="col">Edit</th>
                     <th scope="col">Delete</th>
                 </tr>  
               </thead>
               <tbody>
                   {baps && baps.map((beachandpark) => {
                       return (
                         <tr onClick={() => handleBeachesAndParksSelect(beachandpark.id)} key={beachandpark.id}>
                             <td>{beachandpark.name}</td>
                             <td>{beachandpark.location}</td>
                             <td>{(beachandpark.if_beach)? "Yes": "No"}</td>
                             <td>{(beachandpark.if_park)? "Yes": "No"}</td>
                             <td>{renderRating(beachandpark)}</td>
                             <td><button onClick={(e) => handleUpdate(e, beachandpark.id)} className="btn btn-warning">Update</button></td>
                             <td><button onClick={(e) => handleDelete(e, beachandpark.id)} className="btn btn-danger">Delete</button></td>
                         </tr>
                       );
                   })}
               </tbody> 
            </table>
        </div>
    )
}

export default BeachesAndParksList
