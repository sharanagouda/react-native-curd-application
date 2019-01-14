import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {PersistGate} from "redux-persist/integration/react";
import Main from './src/Main' //Import the app/index.js file
import storePersist from "./src/config"

const persist = storePersist();
export default class App extends Component {
    render() {
        return (
          <Provider store={persist.store}>
              <PersistGate loading={null} persistor={persist.persistor}>
                    <Main />
              </PersistGate>
          </Provider>
        );
    }
}