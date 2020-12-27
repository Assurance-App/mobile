import * as React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const List = ({ items, renderHeader, renderBody, renderFooter, horizontal = false, onItemPressHandler = () => { } }) => {

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <View style={[styles.header,styles.separator]}>
                {renderHeader(item)}
            </View>
            <View style={[styles.body,styles.separator]} onPress={(item)=> {onItemPressHandler(item)}}>
                {renderBody(item)}
            </View>
            <View style={[styles.footer]}>
                {renderFooter(item)}
            </View>
        </View>
    );

    const styles = StyleSheet.create({
        container: {
            justifyContent: "center",
            alignItems: "center"
        },
        item: {
            flex: 1,
            flexDirection: "column",
            backgroundColor: "#9CC3D5FF",
            margin: 10,
            padding: 5,
            borderRadius: 5,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 8,
            },
            shadowOpacity: 0.44,
            shadowRadius: 10.32,
            elevation: 16,
            width: windowWidth * (horizontal?0.50:0.95)
        },
        separator : {
            borderBottomWidth :1,
            paddingVertical: 5,
        },
        header: {
        },
        body: {
            height: windowHeight* (horizontal?0.1:0.2),
        },
        footer: {
        }
    });
    
    return (
        <View>
            <View style={styles.container}>
                <FlatList
                    data={items}
                    renderItem={renderItem}
                    horizontal={horizontal}
                    keyExtractor={item => item.key.toString()}
                />
            </View>
        </View>
    );
}


export default List;