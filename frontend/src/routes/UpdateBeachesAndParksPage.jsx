import React from 'react'
import UpdateBeachesAndParks from '../Components/UpdateBeachesAndParks';
import NavBar from '../Components/NavBar';
import "../css/updates.css";

const UpdateBeachesAndParksPage = () => {
    return (
        <div className="updates-background-container">
        <div className="container">
            <NavBar pageName="loggedinpage"></NavBar>
            <h1 className="text-center text-white">Update Beach and/or Park</h1>
            <UpdateBeachesAndParks />
        </div>
        </div>
    )
}

export default UpdateBeachesAndParksPage
