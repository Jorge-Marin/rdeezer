import React from 'react';
import './styles/PagesButtons.css';

const PagesButtons = ({bgColor, textColor, bdrColor, text, padding, marginRigth}) => (
    <a className="page-buttons-a" style={{backgroundColor:bgColor, color: textColor, borderColor:bdrColor,
                                        padding:padding, marginRight:marginRigth}}>{text}</a>
);

export default PagesButtons;