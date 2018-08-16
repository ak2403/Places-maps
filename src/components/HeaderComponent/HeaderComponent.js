import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DashBoardComponent from '../../dashBoardComponent/dashBoardComponent';
import { themeColor } from '../../constants';

const HeaderComponent = (props) => {
    
    redirectSettings = (navigator) => {
        navigator.push({
            component: DashBoardComponent
        })
    }

    return (
        <View style={headerStyle.headerView}>
            <View style={headerStyle.leftIcon}>
                {props.leftIcon ? <TouchableOpacity onPress={props.eventForLeftIcon}><Icon name={props.leftIcon} size={18} color="#fff" /></TouchableOpacity> : ''}
            </View>
            <Text style={headerStyle.headerTitle}>{props.title.toUpperCase()}</Text>
            <View style={headerStyle.rightIcon}>
                <Icon name={props.rightIcon} size={18} color="#fff" />
            </View>
        </View>
    )
}

const headerStyle = StyleSheet.create({
    headerView: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        backgroundColor: themeColor,
        paddingBottom: 10
    },
    leftIcon: {
        flex: 1,
        marginTop: 'auto',
        alignItems: 'flex-start',
        paddingLeft: 20
    },
    headerTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        flex: 2,
        textAlign: 'center',
        justifyContent: 'flex-end',
        marginTop: 'auto'
    },
    rightIcon: {
        flex: 1,
        marginTop: 'auto',
        alignItems: 'flex-end',
        paddingRight: 20
    }
})

export default HeaderComponent