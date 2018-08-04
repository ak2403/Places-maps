import React from 'react';
import { StyleSheet, Button, View, Text, TextInput } from 'react-native';
import ListItem from './src/components/listitems/listitems';

export default class App extends React.Component {

  state = {
    inputVal: '',
    places: []
  }

  saveInputMethod = value => {
    this.setState({
      inputVal: value
    })
  }

  savePlacesMethod = () => {
    this.setState(previous => {
      return {
        places: previous.places.concat(previous.inputVal)
      }
    })
  }

  render() {
    const textHTML = this.state.places.map((val, index) => {
      return <ListItem key={index} placeName={val} />
    });
    
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <TextInput
            placeholder="Name"
            onChangeText={this.saveInputMethod}
            style={styles.formInput} />
          <Button
            onPress={this.savePlacesMethod}
            style={styles.formButton} 
            title="Add" />
        </View>
          {textHTML}
        <View>

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
