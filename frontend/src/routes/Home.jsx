import React from 'react'
import AddBeachAndOrPark from '../Components/AddBeachAndOrPark';
import BeachesAndParksList from '../Components/BeachesAndParksList';
import Header from '../Components/Header';

const Home = () => {
    return (
        <div>
           <Header />
           <BeachesAndParksList />
           <AddBeachAndOrPark />
        </div>
    )
}

export default Home
