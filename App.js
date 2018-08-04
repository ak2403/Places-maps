import React from 'react';
import { StyleSheet, Button, View, TextInput } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <TextInput
            placeholder="Name"
            style={styles.formInput} />
          <Button
            style={styles.formButton} 
            title="Add" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  formContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  formInput: {
    width: '70%'
  },
  formButton: {
    width: '30%'
  }
});
