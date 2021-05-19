import React from 'react'
import AddBeachAndOrPark from '../Components/AddBeachAndOrPark';
import BeachesAndParksList from '../Components/BeachesAndParksList';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import "../css/home.css";

const Home = () => {
    return (
        <div className="home-background-container">
        <div  className="container  text-white" >
            <NavBar pageName="loggedinpage"/>
           <Header />
            <div className="d-flex justify-content-between">
            
           <BeachesAndParksList />
           <AddBeachAndOrPark />
        </div>
         
         
           </div>
           </div>
    )
}

export default Home
