import React from 'react';
import NavBar from '../components/NavBar';
import PassionMusicPicture from '../images/LandingPage/first-picture.png';
import '../components/styles/LandingPage.css';
import Button from '../components/Button';

class DeezerHome extends React.Component{

    render(){
        return (
            <React.Fragment>
                <NavBar></NavBar>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-7">
                            <div className="col-xl-12 passion-message">
                                <h1>You bring the passion.<br></br>
                                    We bring the music.</h1>
                                <h3>Try Deezer Premium free for 30 days*</h3>
                                <div className="premium-free">
                                    <Button backgroundColor="#ef5466" 
                                    borderColor="#ef5466"
                                    textColor="white" 
                                    paddingWidth="40px" 
                                    paddingHeigth="15px"
                                    text="Deezer Premium" 
                                    url="#"
                                    fontsize="18px"
                                    marginRigth="15px"></Button>
                                    <Button backgroundColor="white" 
                                    borderColor="#000"
                                    textColor="#000" 
                                    paddingWidth="40px" 
                                    paddingHeigth="15px"
                                    text="Deezer free" 
                                    url="#"
                                    fontsize="18px"
                                    marginRigth="15px"></Button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <div className="passion-music">
                                <img src={PassionMusicPicture}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid why-deezer">

                </div>
            </React.Fragment>
        );
    };

}

export default DeezerHome;