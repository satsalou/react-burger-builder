import React from 'react';

import classes from './Logo.module.css';

import burgerLogo from '../../assets/images/burger-logo.png';

const logo = (props) => {
    return (
        <div className={classes.Logo} style={{heihgt: props.heihgt}}>
            <img src={burgerLogo} alt="My Burger" />
        </div>
    );
}

export default logo;