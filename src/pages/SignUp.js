import React from 'react';
import NavBar from '../components/NavBar';

class SignUp extends React.Component{
    render(){
        return(
            <React.Fragment>
                <NavBar></NavBar>
                <h1 style={{marginTop:'80px'}}>SignUp Page</h1>
            </React.Fragment>
        );
    }
}

export default SignUp;