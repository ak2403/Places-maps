import React from 'react';
import { connect } from 'react-redux';
import { NavigatorIOS } from 'react-native';
import LoginComponent from './src/loginComponent/loginComponent';

class App extends React.Component {

  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: LoginComponent
        }}
        style={{flex: 1}}
        navigationBarHidden={true}
      />
    );
  }
}

export default connect()(App);