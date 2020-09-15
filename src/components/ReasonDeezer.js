import React from 'react';
import '../components/styles/ReasonDeezer.css';

const ReasonDeezer = ({title, reason}) => (
    <React.Fragment>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 reason-body">
            <h4>{title}</h4>
            <p>{reason}</p>
        </div>
    </React.Fragment>
);

export default ReasonDeezer;