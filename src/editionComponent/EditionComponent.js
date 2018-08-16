import React from 'react';
import { StyleSheet, Text, ScrollView, FlatList, View, Button, AsyncStorage, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DashBoardComponent from '../dashBoardComponent/dashBoardComponent';
import { themeColor } from '../constants';
import HeaderComponent from '../components/HeaderComponent/HeaderComponent';

class EditionComponent extends React.Component {

    returnDashBoard = () => {
        this.props.navigator.push({
            component: DashBoardComponent
        })
    }

    render() {
        // let { editionContent } = this.props.route.props;
        let editionContent = { "main-content": "This newsletter includes updates on the 'My Career' and 'Just Do It' sections so that you never miss any opportunity.\n\nBe sure to click on each of the links to register your interest or apply to the program, and VIEW ALL to see other opportunities available. \n\nPlease send us your feedback and/or submit your question to Ask Hsin-Ping.\n\nEnjoy!", "questions": { "question": "\"No matter where you're from, your dreams are valid. \" ― Lupita Nyong'o.", "answer": "" } }
        return (
            <View style={{ flex: 1, backgroundColor: '#f6f6f6' }}>
                <HeaderComponent
                    title="Editions"
                    leftIcon="chevron-left"
                    rightIcon="cog"
                    eventForLeftIcon={this.returnDashBoard.bind(this)}
                    navigator={this.props.navigator} />

                <View style={styles.contentView}>
                    <View style={styles.mainContentView}>
                        <Text>{editionContent["main-content"]}</Text>
                    </View>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    contentView: {
        width: '100%',
        alignItems: 'center'
    },
    mainContentView: {
        width: '95%',
        backgroundColor: '#fff',
        marginTop: 15,
        padding: 15
    }
})

export default EditionComponent;