import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, Image, NavigatorIOS, TextInput, View, Button, AsyncStorage } from 'react-native';
import ProfileComponent from '../profileComponent/ProfileComponent';
import { logout } from '../actions/authenticate';
import LoginComponent from '../loginComponent/loginComponent';

class DashBoardComponent extends React.Component{

    redirectProfile = () => {
        this.props.navigator.push({
            component: ProfileComponent
        });
    }

    logout = async () => {
        // this.props.logout();
        const removeUser = await AsyncStorage.removeItem('username');
        this.props.navigator.push({
            component: LoginComponent
        })
    }

    render(){
        return (
            <View>
                <Button title='Profile' onPress={this.redirectProfile} /> 
                <Button title='Logout' onPress={this.logout} />
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout)
    }
}

export default connect('', mapDispatchToProps)(DashBoardComponent);