/*
    artifact generator: C:\My\wizzi\stfnbssl\stfnbssl.github.io\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\stfnbssl.github.io\guidedb\.wizzi\ittf\client\src\components\auth\SocialLogin.js.ittf
*/
'use strict';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import io from 'socket.io-client';
import OAuthLogin from './OAuthLogin';
import PageLoader from '../shared/PageLoader';
import {config} from '../../features/config';
const socket = io(config.SERVER_URL);
const providers = [
    'twitter', 
    'google', 
    'facebook', 
    'github'
];
const styles = (theme) => {
    return {
            wrapper: {
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center'
            }, 
            container: {
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-around', 
                height: '87vh', 
                width: '90vw'
            }
        };
};
class SocialLogin extends React.Component {
    state = {
        loading: true
    };
    componentDidMount() {
        fetch(`${config.SERVER_URL}/wake-up`).then((res) => {
            if (res.ok) {
                this.setState({
                    loading: false
                });
            }
        })
    }
    render() {
        const {
            classes
        } = this.props;
        const buttons = (providers, socket) =>
            providers.map((provider) =>  (
                    <OAuthLogin provider={provider} key={provider} socket={socket}>
                    </OAuthLogin>
                )
            );
        return  (
                <div className={classes.wrapper}>
                    <div className={classes.container}>
                    {
                        this.state.loading ?  (
                                <PageLoader>
                                </PageLoader>
                            )
                         : buttons(providers, socket)
                    }</div>
                
                </div>
            )
        ;
    }
}
SocialLogin.propTypes = {};
export default withStyles(styles)(SocialLogin);
