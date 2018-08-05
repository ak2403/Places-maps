import React from 'react';
import { StyleSheet, Text, Image, NavigatorIOS, TextInput, View, Button } from 'react-native';

const InputComponent = props => {
    return (
        <TextInput 
            style={styles.UIInput} 
            secureTextEntry={props.secureText}
            onChangeText={props.changeEvent.bind(this)}
            />
    );
}

const styles = StyleSheet.create({
    UIInput: {
        borderColor: '#e0e0e0',
        borderWidth: 1,
        width: '90%',
        height: 40,
        padding: 5,
        marginBottom: 20
    }
});


export default InputComponent;