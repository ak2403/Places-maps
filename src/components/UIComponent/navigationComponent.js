import React from 'react';
import { StyleSheet, Text, TouchableOpacity, NavigatorIOS, TextInput, View, Button } from 'react-native';
import { connect } from 'react-redux';
import ProfileComponent from '../../profileComponent/ProfileComponent';

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
            title:'Profile',
            component: ProfileComponent
         },{
             title: 'dashboard',
             component: ''
         },{
            title: 'career',
            component: ''
        },{
            title: 'settings',
            component: ''
        }];

        return (
            <View style={styles.navigationLayout}>
                {
                    NaviItems.map(item => {
                        return (<TouchableOpacity key={item.title} style={styles.naviTabs} onPress={()=>this.openTabs(item)}><View>
                            <Text>{item.title}</Text>
                        </View></TouchableOpacity>)
                    })
                }
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    navigationLayout: {
        backgroundColor: 'red',
        width: '100%',
        height: 60,
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        flexDirection: 'row', 
        alignSelf: 'flex-start'
    },
    naviTabs: {
        display: 'flex',
        flex: 1,
        backgroundColor: 'blue',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default connect()(NavigationComponent);