import React from 'react';
import PageButtons from './PagesButtons';
import './styles/SubPlans.css';

const SubsPlans = ({titlePlan, textPlan, marginBottom, urlButton, textButton}) => (
    <React.Fragment>
        <div style={{marginBottom: marginBottom}} className="container-fluid subplans-container">
            <div className="row">
                <div className="col-12 col-md-12 col-lg-9 col-xl-9">
                    <h3>{titlePlan}</h3>
                    <p>{textPlan}</p>
                </div>
                <div className="col-12 col-md-12 col-lg-3 col-xl-3 subplans-buttons">
                    <PageButtons bgColor="#F0F0F0" 
                                textColor="#4a4a4a"
                                bdrColor="#4a4a4a"
                                text={textButton}
                                padding="10px 50px"
                                marginRigth="0px"></PageButtons>
                </div>
            </div>
        </div>
    </React.Fragment>
);

export default SubsPlans;