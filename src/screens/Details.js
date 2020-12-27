import * as React from 'react';
import { View, Text, Image, StyleSheet,Dimensions } from 'react-native';
import StatusBar from '../components/StatusBar'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Details = ({ navigation, route: { params: { item } } }) => {


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#0063B2af',
        },
        item: {
            width : windowWidth*0.9,
            margin : windowWidth*0.02,
        },
        image: {
            alignSelf: "center",
            width : windowWidth*0.9
        },
        text: {
        },
        offreText: {
    
        }
    });
    
    return (
        <View style={styles.container}>
            <StatusBar navigation={navigation} topRightIcon={"keyboard-backspace"} onTopRightIconPress={() => {
                navigation.goBack();
            }}
            />
                <Text>Details :</Text>
            <View style={styles.item}>
            <Text>{item.title}</Text>
                <View>
                    <View style={styles.image} >
                        <Image source={item.image} style={styles.image} />
                    </View>
                    <View style={styles.text} >
                        <Text style={styles.offreText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                    </View>
                </View>
            </View>

        </View>
    );
}

export default Details;