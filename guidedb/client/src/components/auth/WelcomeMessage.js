/*
    artifact generator: C:\My\wizzi\stfnbssl\stfnbssl.github.io\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\stfnbssl.github.io\guidedb\.wizzi\ittf\client\src\components\auth\WelcomeMessage.js.ittf
*/
'use strict';
import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
const styles = (theme) => {
    return {
            heading: {
                color: '#fff', 
                textAlign: 'center', 
                marginBottom: theme.margin * 2
            }, 
            logo: {
                width: 250, 
                heading: 250, 
                objectFit: 'cover'
            }
        };
};
const WelcomeMessage = ({classes}) => {
    return  (
            <Fragment>
                <Typography variant="display1" gutterBottom className={classes.heading}>
                Sign in to demo-mern</Typography>
            
                <img src="/images/logo.png" alt="app logo" className={classes.logo}>
                </img>
            
            </Fragment>
        )
    ;
};
WelcomeMessage.propTypes = {
    // Material UI Injected
    classes: PropTypes.object
};
export default withStyles(styles)(WelcomeMessage);
