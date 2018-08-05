import { AppRegistry } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import Reducers from './src/reducers';

const store = createStore(Reducers);

const notes = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent('maps', () => notes);
