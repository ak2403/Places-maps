import React from 'react';
import { StyleSheet, Button, View, Text, TextInput } from 'react-native';

const InputComponent = (props)=> {
        return (
            <TextInput
                placeholder={props.placeholder || ''}
                onChangeText={props.changeEvent}
                style={styles.formInput} />
        )
}

const styles = StyleSheet.create({
    formInput: {
        width: '70%'
    }
});


export default InputComponent;