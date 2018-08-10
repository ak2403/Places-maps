import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, Image, NavigatorIOS, TextInput, View, Button, AsyncStorage } from 'react-native';
import ProfileComponent from '../profileComponent/ProfileComponent';
import LoginComponent from '../loginComponent/loginComponent';
import NavigationComponent from '../components/UIComponent/navigationComponent';

class DashBoardComponent extends React.Component {

    redirectProfile = () => {
        this.props.navigator.push({
            component: ProfileComponent
        });
    }

    logout = async () => {
        const removeUser = await AsyncStorage.removeItem('username');
        this.props.navigator.push({
            component: LoginComponent
        })
    }

    render() {
        return (
            <View style={{flex:1}}>
                <View>

                    <Button title='Logout' onPress={this.logout} />
                </View>
                <NavigationComponent navigator={this.props.navigator}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
});

export default connect()(DashBoardComponent);