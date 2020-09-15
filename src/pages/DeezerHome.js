import React from 'react';
import NavBar from '../components/NavBar';
import PassionMusicPicture from '../images/LandingPage/first-picture.png';
import '../components/styles/LandingPage.css';
import PageButtons from '../components/PagesButtons';

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
                                             text="Deezer Premium"></PageButtons>
                                <PageButtons bgColor="white" 
                                             textColor="#4a4a4a"
                                             bdrColor="#4a4a4a"
                                             text="Deezer Premium"></PageButtons>
                            </div>
                        </div>
                    </header>
                </div>

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