import { AppRegistry } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import Reducers from './src/reducers';

const store = createStore(Reducers, applyMiddleware(thunk));
console.ignoredYellowBox = ['Remote debugger'];
const notes = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent('maps', () => notes);
