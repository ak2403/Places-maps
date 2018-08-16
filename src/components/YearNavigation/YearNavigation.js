import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ListView } from 'react-native';
import { themeColor } from '../../constants';

class YearNavigation extends React.Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(['2018 (past editions)', '2017', '2016']),
        };
    }
    render() {  

        return (
            <TouchableOpacity style={styles.yearNavContainer}>
                <ListView contentContainerStyle={styles.listStyle}
                    horizontal={true}
                    automaticallyAdjustContentInsets={false}
                    dataSource={this.state.dataSource}
                    renderRow={(data) => <Text onPress={() => this.props.yearClick(data)} style={styles.year}> {data}</Text>}
                    keyExtractor={(item, index) => index}
                />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    yearNavContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    listStyle: {
        width: '90%',
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'space-between',
        borderColor: themeColor,
        borderRadius: 5,
        borderWidth: 1.5
    },
    year: {
        borderColor: themeColor,
        borderWidth: 1,
        width: 20,
        flex: 1,
        textAlign: 'center'
    }
})

export default YearNavigation;