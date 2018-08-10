import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, Image, NavigatorIOS, TextInput, View, Button } from 'react-native';
import NavigationComponent from '../components/UIComponent/navigationComponent';

class ProfileComponent extends React.Component {

    render() {
        return (
            <View>
            <View style={{alignItems: 'center', backgroundColor: '#faf8f8', flex: 1}}>
                <View style={styles.bannerStyle}>
                    <Image source="../img/logo.png" />
                </View>
                <View style={styles.contentStyle}>
                <View>
                    <Text style={styles.nameStyle}>Arun Kumar</Text>
                    <Text>Masters in Data Science</Text>
                </View>
                <View>
                    <Text>Phone: +6140753256</Text>
                </View>
                <View>
                    <Text>Email: arunpasupathi24@gmail.com</Text>
                </View>
                <View>
                    <Text>Address: 3, Magnolia Grove, Doveton, VIC 3177</Text>
                </View>
                </View>
            </View>
            <NavigationComponent />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bannerStyle: {
        width: '100%',
        height: '40%',
        backgroundColor: '#3498db'
    },
    contentStyle: {
        width: '90%',
        backgroundColor: 'white',
        marginTop: -50,
        borderRadius: 5,
        alignItems: 'center'
    },
    nameStyle: {
        fontSize: 26,
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%'
    }
})

export default connect()(ProfileComponent);