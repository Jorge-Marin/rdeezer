import React from 'react';
import '../components/styles/RedBanner.css';

const RedBanner = ({title, text, icons}) =>(
    <React.Fragment>
        <div className="container-fluid redbanner-container">
            <div className="row">
                <div className="col-6"><h1>Text</h1></div>
                <div className="col-6">
                    <h1>{title}</h1>
                    <div className="row">
                        <div className="col-6">
                            <p>{text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
);

export default RedBanner;