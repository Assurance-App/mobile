import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Constants from 'expo-constants';

const StatusBar = ({ navigation, topCenterTitle, topRightIcon, onTopRightIconPress, topLeftIcon, onTopLeftIconPress }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.menu} >
                {(topRightIcon && onTopRightIconPress) && <MaterialCommunityIcons name={topRightIcon} size={40} color="black" onPress={onTopRightIconPress} />}
            </TouchableOpacity>
            <View style={styles.title}>
                <Text>{topCenterTitle}</Text>
            </View>
            <TouchableOpacity style={styles.profile}>
                {(topLeftIcon && onTopLeftIconPress) && <MaterialCommunityIcons name={topLeftIcon} size={40} color="black" onPress={onTopLeftIconPress} />}
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: Constants.statusBarHeight,
        justifyContent: 'space-between'
    },
    menu: {
    },
    title: {
        textAlignVertical: 'center'
    },
    profile: {
    }
});
export default StatusBar;
