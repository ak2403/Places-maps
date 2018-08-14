import React from 'react';
import { StyleSheet, Text, ScrollView, FlatList, View, Button, AsyncStorage, TouchableOpacity } from 'react-native';
import DashBoardComponent from '../dashBoardComponent/dashBoardComponent';

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
            <View>
                <Button title="Go Back" onPress={this.returnDashBoard} />
                <Text>Edition</Text>
                <View>
                    <Text>{editionContent['main-content']}</Text>
                </View>
            </View>
        )
    }
}

export default EditionComponent;