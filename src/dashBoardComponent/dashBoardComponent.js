import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, ScrollView, FlatList, View, Button, AsyncStorage, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import ProfileComponent from '../profileComponent/ProfileComponent';
import LoginComponent from '../loginComponent/loginComponent';
import NavigationComponent from '../components/UIComponent/navigationComponent';
import EditionComponent from '../editionComponent/EditionComponent';
import * as data from '../data/byte_edition';

class DashBoardComponent extends React.Component {

    state = {
        editionList: ''
    }

    redirectProfile = () => {
        this.props.navigator.push({
            component: ProfileComponent
        });
    }

    logout = async () => {
        const removeUser = await AsyncStorage.removeItem('username');
        this.props.navigator.push({
            component: LoginComponent
        })
    }

    renderEdition = (version) => {
        let edition_collection = [];
        for (edition in data[version]) {
            edition_collection.push(edition)
        }
        this.setState({
            editionList: edition_collection
        })
    }

    redirectEdition = (item) => {
        this.props.navigator.push({
            component: EditionComponent
        })
    }

    render() {
        let byte_version = ['2018 (past editions)', '2017', '2016']
        let version_nav = byte_version.map(version => {
            return (
                <TouchableOpacity onPress={() => this.renderEdition(version)} style={{ 'width': '30%', 'height': 30, paddingLeft: 5, paddingRight: 5, justifyContent: 'center', alignItems: 'center', borderWidth: 1 }} key={version}>
                    <View>
                        <Text>{version}</Text>
                    </View>
                </TouchableOpacity>
            )
        })
        return (
            <View style={{ flex: 1 }}>
                <View>
                    <Button title='Logout' onPress={this.logout} />
                </View>
                <View style={{ 'width': '100%', 'height': 30, flexDirection: 'row', justifyContent: 'center' }}>
                    {version_nav}
                </View>
                <ScrollView>
                {this.state.editionList ? <FlatList
                    data={this.state.editionList}
                    renderItem={({ item }) => (
                        <ListItem 
                        button onPress={() => this.redirectEdition(item)}
                        title={item} />
                    )}
                /> : ''}
                </ScrollView>
                <NavigationComponent navigator={this.props.navigator} />
            </View>
        )
    }
}

const styles = StyleSheet.create({

});

export default connect()(DashBoardComponent);