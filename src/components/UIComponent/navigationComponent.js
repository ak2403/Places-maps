import React from 'react';
import { StyleSheet, Text, TouchableOpacity, NavigatorIOS, TextInput, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';
import DashBoardComponent from '../../dashBoardComponent/dashBoardComponent';
import { themeColor } from '../../constants';

class NavigationComponent extends React.Component {

    constructor(){
        super();
        this.openTabs = this.openTabs.bind(this);
    }

    openTabs = (item) => {
        this.props.navigator.push({
            component: item.component
        })
    }

    render() {
        let NaviItems = [{
             title: 'Dashboard',
             icon: 'atlas',
             component: DashBoardComponent
         },{
            title: 'Career',
            icon: 'user-tie',
            component: ''
        }];

        return (
            <View style={styles.navigationLayout}>
                {
                    NaviItems.map(item => {
                        return (<TouchableOpacity key={item.title} style={styles.naviTabs} onPress={()=>this.openTabs(item)}>
                                    <View>
                                        <Icon name={item.icon} size={14} color='#fff' />
                                        <Text style={styles.naviText}>{item.title}</Text>
                                    </View>
                                </TouchableOpacity>)
                    })
                }
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    navigationLayout: {
        backgroundColor: themeColor,
        width: '100%',
        height: 45,
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        flexDirection: 'row', 
        alignSelf: 'flex-start'
    },
    naviTabs: {
        display: 'flex',
        flex: 1,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    naviText: {
        fontSize: 14,
        textAlign: 'center'
    }
});

export default connect()(NavigationComponent);