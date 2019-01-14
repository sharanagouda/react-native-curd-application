import React, {Component} from 'react';
import { View, AsyncStorage } from 'react-native';

import Routes from "../src/config/Routes"
import Data from './quotes.json'

import {connect} from 'react-redux';
import { getEvents } from './actions'

class Main extends Component {

    componentDidMount() {
        var _this = this;
        //Check if any data exist
        AsyncStorage.getItem('data', (err, data) => {
            //if it doesn't exist, extract from json file
            //save the initial data in Async
            if (data === null){
                AsyncStorage.setItem('data', JSON.stringify(Data.quotes));
                _this.props.getEvents();
            }
        });
    }

    render() {
        return (
            <Routes/>
        );
    }
}

//Connect everything
export default connect(null, { getEvents })(Main);