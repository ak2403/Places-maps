import React from 'react';
import { StyleSheet, Button, View, Text, TouchableWithoutFeedback } from 'react-native';

const ListItem = (props) => {
    return (
        <TouchableWithoutFeedback onPress={props.itemPressed}>
            <View style={styles.listStyle}>
                <Text>{props.placeName}</Text>
            </View>
        </TouchableWithoutFeedback>
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