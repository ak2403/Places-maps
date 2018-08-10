import React from 'react';
import { connect } from 'react-redux';
import { NavigatorIOS, AsyncStorage } from 'react-native';
import LoginComponent from './src/loginComponent/loginComponent';
import SignUpComponent from './src/signupComponent/signupComponent';
import { alreadyLogged } from './src/actions/authenticate';

class App extends React.Component {

  constructor(){
    super();
  }

  async componentDidMount() {
    let getUser = await AsyncStorage.getItem('username');
    if(getUser){
      this.props.alreadyLogged(getUser)
    }
  }  

  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: LoginComponent,
          title: ''
        }}
        style={{ flex: 1 }}
        navigationBarHidden={true}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    alreadyLogged: (data) => dispatch(alreadyLogged(data))
  }
}

export default connect('', mapDispatchToProps)(App);