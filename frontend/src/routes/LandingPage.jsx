import React from 'react'
import NavBar from '../Components/NavBar';
import "../css/landing.css"

export default function LandingPage() {
    return (
        <div>
            <NavBar />
            <div>
                <div className="d-flex justify-content-center landing-background-container">
                    <p className="landing-banner-title h3 w-50 align-self-center ">
                        Looking for fun in the sun?  Can't find that perfect beach? Or that
                        perfect park to take the kids (and your favorite canine)? Look no further! 
                        The Recreation Compass will guide you to all your nearest parks and 
                        beaches!  Don't forget the suntan lotion!
                    </p>




                    </div>
            </div>
        </div>
    )
}
