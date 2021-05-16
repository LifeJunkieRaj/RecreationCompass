import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./routes/Home";
import BeachesAndParksDetails from "./routes/BeachesAndParksDetails";
import UpdateBeachesAndParks from "./routes/UpdateBeachesAndParksPage";
import { BeachesAndParksContextProvider } from './ContextAPI/BeachesAndParksContext';

const App = () => {
    return (
        <BeachesAndParksContextProvider>
        <div className="container">
            <Router>
               <Switch>
               <Route exact path="/baps" component={Home}/>
               <Route exact path="/baps/:id" component={BeachesAndParksDetails}/>
               <Route exact path="/baps/:id/update" component={UpdateBeachesAndParks}/>
               </Switch>
            </Router>
        </div>
        </BeachesAndParksContextProvider>
    )
};

export default App;