import React from 'react';
import { StyleSheet, Text, Image, NavigatorIOS, TextInput, View, Button } from 'react-native';
import UIInput from './src/components/UIComponent/InputComponent';

export default class App extends React.Component {

  state = {
    username: '',
    password: ''
  }

  onSubmit = () => {
    alert(JSON.stringify(this.state))
  }

  render() {
    
    return (
      <View style={styles.container}>
        <View style={styles.loginView}>
            <Image source={require("./src/img/logo.png")} style={styles.logoImg} />
            <UIInput changeEvent={value => this.setState({username: value})} />
            <UIInput secureText = 'true' changeEvent={value => this.setState({password: value})} />
            <Button
              onPress={this.onSubmit} 
              title='Sign In'/>
            <Text>Forgotten Password ?</Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  loginView: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoImg: {
    width: 200,
    height: 200
  }
});
