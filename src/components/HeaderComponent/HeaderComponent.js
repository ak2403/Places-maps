import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DashBoardComponent from '../../dashBoardComponent/dashBoardComponent';

const HeaderComponent = (props) => {
    
    redirectSettings = (navigator) => {
        navigator.push({
            component: DashBoardComponent
        })
    }

    return (
        <View style={headerStyle.headerView}>
            <View style={headerStyle.settingsIcon}>
            </View>
            <Text style={headerStyle.headerTitle}>{props.title.toUpperCase()}</Text>
            <View style={headerStyle.settingsIcon}>
                <Icon name="cog" size={24} color="#fff" />
            </View>
        </View>
    )
}

const headerStyle = StyleSheet.create({
    headerView: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        backgroundColor: '#5e4584',
        paddingBottom: 10
    },
    headerTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        flex: 8,
        textAlign: 'center',
        justifyContent: 'flex-end',
        marginTop: 'auto'
    },
    settingsIcon: {
        width: '20%',
        flex: 1,
        marginTop: 'auto'
    }
})

export default HeaderComponent