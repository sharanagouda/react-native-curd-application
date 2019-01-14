import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as ReduxActions from '../actions'; //Import your actions


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
            return (
                <View style={styles.container}>
                        <Text style={{fontSize: 25, color: 'white'}}>screen 3</Text>
                </View>
            );
       
    }

   
}

function mapStateToProps(state, props) {
    return {
        loading: state.dataReducer.loading,
        quotes: state.dataReducer.quotes
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ReduxActions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: '#F5F5F5'
    },

});