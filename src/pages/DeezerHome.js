import React from 'react';
import NavBar from '../components/NavBar';
import '../components/styles/LandingPage.css';
import PageButtons from '../components/PagesButtons';
import SubsPlans from '../components/SubsPlans';
import SheranPicture from '../images/LandingPage/second-picture.png';
import ReasonDeezer from '../components/ReasonDeezer';
import RedBanner from '../components/RedBanner.js';
import WaitingSection from '../images/waiting-section.jpg';

class DeezerHome extends React.Component{
    render(){
        return (
            <React.Fragment>
                <NavBar></NavBar>
                <div className="container-fluid">
                    <header className="header-page">
                        <div className="col-12 col-xl-12 pretentational-container">
                            <div className="sell-container">
                                <h1>You bring the passion.
                                <br></br>We bring the music.</h1>
                                <h3>Try Deezer Premium free for 30 days*</h3>
                            </div>
                            <div className="premium-free">
                                <PageButtons bgColor="#ef5466" 
                                             textColor="white" 
                                             bdrColor="#ef5466"
                                             text="Deezer Premium"
                                             padding="15px 40px"
                                             marginRigth="25px"></PageButtons>
                                <PageButtons bgColor="white" 
                                             textColor="#4a4a4a"
                                             bdrColor="#4a4a4a"
                                             text="Deezer Premium"
                                             padding="15px 40px"
                                             marginRigth="0px"></PageButtons>
                            </div>
                        </div>
                    </header>
                </div>
                <div className="container-fluid why-deezer">
                    <div className="row ">
                        <div className="col-lg-3 col-xl-4 picture-why-deezer">
                            <img src={SheranPicture} alt="picture of sheran song"></img>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-9 col-xl-7 reasons-why-deezer">
                            <div className="row">
                                <div className="col-12 title-reasons">
                                    <h1>Why deezer?</h1>
                                </div>
                                <div className="row reasons">
                                    <ReasonDeezer title="A world of music in your pocket." 
                                                  reason="Find new loves and old favourites from over 56 million tracks."></ReasonDeezer>
                                    <ReasonDeezer title="No WiFi? No problem." 
                                                  reason="With Deezer Premium, you don't need to be connected to enjoy your favourite tracks."></ReasonDeezer>
                                    <ReasonDeezer title="Craft your collection." 
                                                  reason="Create playlists from millions of tracks and take them with you wherever you go."></ReasonDeezer>
                                    <ReasonDeezer title="Made for you." 
                                                  reason="Flow gets to know what you like and what you don't. Discover your personal soundtrack."></ReasonDeezer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <RedBanner title="Always with you"
                           text="Download your music and take it from your morning run to dinner out with Deezer Premium. Available on all your devices, all the time, even without WiFi or 4G."></RedBanner>
                <div className="waitsection">
                    <h1>Seccion en Espera</h1>
                    <img src={WaitingSection} alt="seccion en espera"></img>
                </div>
                <SubsPlans titlePlan="Annual Plan"
                           textPlan="Get a year of Deezer Premium for $59.90 instead of $71.88."
                           marginBottom="10px"
                           textButton="Subscribe"></SubsPlans>
                <SubsPlans titlePlan="Deezer HiFi"
                           textPlan="Stream in lossless quality for $8.99/month, 1 month free."
                           marginBottom="0px"
                           textButton="Learn more"></SubsPlans>
            </React.Fragment>
        );
    };

}

export default DeezerHome;

/*
    <div className="col-12 free-premium-btns">
        <PageButtons bgColor="#ef5466"
                textColor="white"
                bdrColor="ef5466"
                text="Deezer Premiun"></PageButtons>
        <PageButtons bgColor="white"
                textColor="#000"
                bdrColor="#000"
                text="Deezer Free"></PageButtons>
    </div>
*/ 