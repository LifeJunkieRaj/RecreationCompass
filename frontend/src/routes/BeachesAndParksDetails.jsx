import React, { useContext, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { BeachesAndParksContext } from "../ContextAPI/BeachesAndParksContext";
import RecreationCompass from "../apis/RecreationCompass";
import StarRating from '../Components/StarRating';
import Reviews from '../Components/Reviews';
import AddReviews from '../Components/AddReviews';
import NavBar from '../Components/NavBar';
import "../css/details.css";


const BeachesAndParksDetails = () => {
    const {id} = useParams()
    const {selectedBeachesAndParks, setSelectedBeachesAndParks} = useContext(BeachesAndParksContext)

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await RecreationCompass.get(`/${id}`)
         
                setSelectedBeachesAndParks(response.data.data)
                
            
            }catch(err){
                console.log(err)
            }
           }
        fetchData()
    }, [])
    return (
        <div className="details-background-container">
        <div className="container">
            <NavBar pageName="loggedinpage" />
            {selectedBeachesAndParks && (
            <div >
            <h1 className="text-center display-1">{selectedBeachesAndParks.baps.name}</h1>
            <div className="text-center">
                <StarRating rating={selectedBeachesAndParks.baps.average_rating}/>
                <span className="text-warning ml-1">{selectedBeachesAndParks.baps.count ? `(${selectedBeachesAndParks.baps.count})` : "(0)"}</span>
            </div>
            <div className="mt-3">
                <Reviews reviews={selectedBeachesAndParks.reviews} />
                
            </div>
                <AddReviews />
            </div>        
            )}
        </div>
        </div>
    )
}

export default BeachesAndParksDetails
