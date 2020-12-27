import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useSelector, useDispatch } from 'react-redux'
import { addCartItem, removeCartItem } from '../redux/actions'

import StatusBar from '../components/StatusBar'
import List from '../components/List'

const Offers = ({ navigation }) => {

  const dispatch = useDispatch()

  const items = useSelector(state => state.items);

  const offreHeader = item => (<Text>{item.title}</Text>);

  const offreBody = item => (
    <View style={styles.body} >
      <ImageBackground source={item.image} style={styles.image}>
      </ImageBackground>
    </View>
  );

  const offreFooter = item => (
    <View style={{ flex: 1, justifyContent: "flex-end", flexDirection: "row" }}>
      <TouchableOpacity>
        <MaterialCommunityIcons name="cart-outline" size={40} color="gray" onPress={() => {
          // Add to cart
          dispatch(addCartItem(item));

          // Navigate
          navigation.navigate("Panier", {
            item: item
          })
        }} />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialCommunityIcons name="dots-horizontal" size={40} color="gray" onPress={() => {
          navigation.navigate("Details", {
            item: item
          })
        }} />
      </TouchableOpacity>
    </View>

  );


  return (
    <View style={styles.container}>
      <StatusBar navigation={navigation}

        topRightIcon={"keyboard-backspace"}

        onTopRightIconPress={() => {
          navigation.goBack();
        }}

        topCenterTitle={"Offres"}
      />
      <List
        items={items}
        renderHeader={offreHeader}
        renderBody={offreBody}
        renderFooter={offreFooter}
        horizontal={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#0063B2af',
  },
  body: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal : 10
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  text: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "left",
    backgroundColor: "#f0f000"
  },
});

export default Offers;