import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, Image, NavigatorIOS, TextInput, View, Button } from 'react-native';

class DashBoardComponent extends React.Component{
    render(){
        return (
            <Text>DashBoard</Text>
        )
    }
}

export default connect()(DashBoardComponent);