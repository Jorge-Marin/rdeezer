import React from 'react';
import '../components/styles/Button.css';

const Button = ({backgroundColor, borderColor, textColor, paddingWidth, paddingHeigth, text, url, fontsize, marginRigth}) => (
    <a className="sign-login-btns" href={url} style={{backgroundColor: backgroundColor, fontSize: fontsize, marginRight: marginRigth, borderColor: borderColor, color: textColor, padding: `${paddingHeigth} ${paddingWidth}`}}>{text}</a>
);

export default Button;