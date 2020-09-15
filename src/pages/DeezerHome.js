import React from 'react';
import NavBar from '../components/NavBar';
import '../components/styles/LandingPage.css';
import PageButtons from '../components/PagesButtons';
import SubsPlans from '../components/SubsPlans';

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