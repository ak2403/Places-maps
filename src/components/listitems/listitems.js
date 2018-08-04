import React from 'react';
import { StyleSheet, Button, View, Text, TextInput } from 'react-native';

const ListItem = (props) => {
    return (
    <View style={styles.listStyle}>
        <Text>{props.placeName}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    listStyle: {
        width: '100%',
        padding: 10,
        margin: 1,
        backgroundColor: '#eee'
    }
})

export default ListItem;