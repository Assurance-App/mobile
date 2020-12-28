import * as React from 'react';
import { View, Text, ImageBackground, ToastAndroid, Platform, AlertIOS, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useSelector, useDispatch } from 'react-redux'
import { addCartItem, removeCartItem, addItem, removeItem } from '../redux/actions'

import StatusBar from '../components/StatusBar'
import List from '../components/List'

const Offers = ({ navigation }) => {

  const dispatch = useDispatch()

  const items = useSelector(state => state.items);
  const cartItems = useSelector(state => state.cartItems);


  const Toast = (msg) => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(msg, ToastAndroid.SHORT)
    } else {
      AlertIOS.alert(msg);
    }
  }

  const offreHeader = item => (<Text>{item.title}</Text>);

  const offreBody = item => (
    <View style={styles.body} >
      <ImageBackground source={item.image} style={styles.image}>
      </ImageBackground>
    </View>
  );

  const offreFooter = item => (
    <View style={{ flex: 1, justifyContent: "flex-end", flexDirection: "row" }}>
      <TouchableOpacity style={styles.action} onPress={() => {
        //Paiement
        navigation.navigate("Paiement", {
          item: item
        })
      }}>
        <MaterialCommunityIcons name="credit-card-outline" size={40} color="#4682B4" />
      </TouchableOpacity>
      <TouchableOpacity>
        {
          (cartItems.includes(item.key)) ?

            <MaterialCommunityIcons name="cart-minus" size={40} color="#F5F5DC" onPress={() => {
              // Add to cart
              dispatch(removeCartItem(item.key));
              // Navigate

              Toast("L'assurance est supprimé au panier");
              //navigation.navigate("Panier", { item: item })
            }} />
            :
            (
              <MaterialCommunityIcons name="cart-plus" size={40} color="#4682B4" onPress={() => {
                // Add to cart
                dispatch(addCartItem(item.key));
                // Navigate

                Toast("L'assurance est ajouté au panier");
                //navigation.navigate("Panier", { item: item })
              }} />
            )
        }
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialCommunityIcons name="dots-horizontal" size={40} color="#4682B4" onPress={() => {
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
    paddingHorizontal: 10
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