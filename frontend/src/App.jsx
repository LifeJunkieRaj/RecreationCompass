import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./routes/Home";
import BeachesAndParksDetails from "./routes/BeachesAndParksDetails";
import UpdateBeachesAndParksPage from "./routes/UpdateBeachesAndParksPage";
import { BeachesAndParksContextProvider } from './ContextAPI/BeachesAndParksContext';
import LandingPage from './routes/LandingPage';
import Loginpage from './routes/Loginpage';
import Signuppage from './routes/Signuppage';

const App = () => {
    return (
        <BeachesAndParksContextProvider>
        <div className="">
            <Router>
               <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/login" component={Loginpage}/>
                <Route  exact path="/signup" component={Signuppage}/>
               <Route exact path="/baps" component={Home}/>
               <Route exact path="/baps/:id" component={BeachesAndParksDetails}/>
               <Route exact path="/baps/:id/update" component={UpdateBeachesAndParksPage}/>
               </Switch>
            </Router>
        </div>
        </BeachesAndParksContextProvider>
    )
};

export default App;