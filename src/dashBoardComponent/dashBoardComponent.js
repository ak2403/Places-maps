import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, ScrollView, FlatList, View, Button, AsyncStorage, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import HeaderComponent from '../components/HeaderComponent/HeaderComponent';
import LoginComponent from '../loginComponent/loginComponent';
import NavigationComponent from '../components/UIComponent/navigationComponent';
import EditionComponent from '../editionComponent/EditionComponent';
import * as data from '../data/byte_edition';
import YearNavigation from '../components/YearNavigation/YearNavigation';

class DashBoardComponent extends React.Component {

    constructor(){
        super();
        this.state = {
            editionList: '',
            selectedYear: '',
            selectedEdition: ''
        }
    }

    componentDidMount(){
        this.renderEdition('2018 (past editions)')
    }

    renderEdition = (version) => {
        let edition_collection = [];
        for (edition in data[version]) {
            edition_collection.push(edition)
        }
        this.setState({
            editionList: edition_collection,
            selectedYear: version
        })
    }

    redirectEdition = (item) => {
        this.props.navigator.push({
            component: EditionComponent,
            props: {
                editionContent: data[this.state.selectedYear][item]
            }
        })
    }

    render() {
        
        return (
            <View style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
                <HeaderComponent
                    title="Dash Board"
                    rightIcon="cog"
                    navigator={this.props.navigator} />

                <YearNavigation yearClick={this.renderEdition} />

                <ScrollView>
                    {this.state.editionList ? <FlatList
                        data={this.state.editionList}
                        renderItem={({ item }) => (
                            <ListItem
                                button onPress={() => this.redirectEdition(item)}
                                title={item}
                                keyExtractor={(item, index) => index} />
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