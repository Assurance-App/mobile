import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import StatusBar from '../components/StatusBar'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useSelector, useDispatch } from 'react-redux'
import { addICarttem, removeCartItem } from '../redux/actions'


const Cart = ({ navigation }) => {

  const dispatch = useDispatch();

  const items = useSelector(state => state.cartItems);

  const renderItems = items.map((item) => (
    <View style={styles.item}>
      <View key={item.key} style={styles.title}>
        <MaterialCommunityIcons name={(item.type == 1) ? "car" : ((item.type === 2) ? "motorbike" : "truck")} size={40} color="white" />
        <Text>{item.title}</Text>
      </View>
      <View style={styles.actions}>
        <View>
          <TouchableOpacity style={styles.action} onPress={() => {
            //Paiement

          }}>
            <MaterialCommunityIcons name="credit-card-outline" size={40} color="white" />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.action} onPress={() => {
            dispatch(removeCartItem(item));
          }}>
            <MaterialCommunityIcons name="delete-outline" size={40} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  ));

  return (
    <View style={styles.container}>
      <StatusBar navigation={navigation} topRightIcon={"keyboard-backspace"} onTopRightIconPress={() => {
        navigation.navigate("Acceuil");
      }}
      />
      <View style={styles.items}>
        {(items.length <= 0) ? (
          <View style={{flex :1,justifyContent:"center",alignItems:"center"}}>
            <Text>Votre panier est vide !</Text>
            <TouchableOpacity style={styles.title} onPress={()=>{
              navigation.navigate("Offres");
            }}>
              <MaterialCommunityIcons name="format-list-bulleted" size={"white"} color="gray" />
              <Text>offres</Text>
            </TouchableOpacity>
          </View>
        ) : renderItems}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0063B2af',
  },
  items: {
    flex: 1,
    flexDirection: "column"
  },
  item: {
    flexDirection: 'row',
    justifyContent: "space-between",
    borderTopWidth: 1,
    marginHorizontal: 20,
    paddingVertical: 12
  },
  actions: {
    flexDirection: "row",
    alignSelf: "flex-end"
  },
  action: {
    marginLeft: 6
  },
  title: {
    flexDirection: "row",
    alignItems: "center"
  }
});

export default Cart;