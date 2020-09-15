import React from 'react';
import './styles/PagesButtons.css';

const PagesButtons = ({bgColor, textColor, bdrColor, text}) => (
<a className="page-buttons-a" style={{backgroundColor:bgColor, color: textColor, borderColor:bdrColor}}>{text}</a>
);

export default PagesButtons;