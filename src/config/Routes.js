import React,{Component} from "react";
import {Router, Scene,AsyncStorage} from "react-native-router-flux";
import Home from "./../screens/home";
import NewEvent from "../screens/new_event";
 class Routes extends Component{

    render(){
        return(
            <Router>
                <Scene key="user" initial={true}>
                    <Scene tabs key="home" hideNavBar={true} swipeEnabled={true} tabBarPosition="bottom">
                        <Scene key="home" component={Home} title="Events" initial/>
                        <Scene key="new_quote" component={NewEvent} title="Add Event"/>
                    </Scene>
                </Scene>
            </Router>
        )
    }
}
//Connect everything
export default Routes;