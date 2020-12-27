import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import StatusBar from '../components/StatusBar'
import List from '../components/List'
import { addItem, removeItem } from '../redux/actions'

const Home = ({ navigation }) => {
  const items = useSelector(state => state.items);

  const dispatch = useDispatch()

  const articles = [
    {
      key: 1,
      title: "Publication 1",
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      image: require('../assets/images/image1.jpg')
    },
    {
      key: 2,
      title: "Publication 2",
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      image: require('../assets/images/image2.jpg')
    },
    {
      key: 3,
      title: "Publication 3",
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      image: require('../assets/images/image3.jpg')
    },
    {
      key: 4,
      title: "Publication 4",
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      image: require('../assets/images/image4.jpg')
    },
  ]

  const articleHeader = item => (null);

  const articleBody = item => (
    <View style={styles.body}>
      <ImageBackground source={item.image} style={styles.image}>
        <Text style={styles.text}>{item.title}</Text>
      </ImageBackground>
    </View>
  );

  const articleFooter = item => (null);


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
          dispatch(addItem(item));

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
      <View>
        <StatusBar navigation={navigation}

          topCenterTitle="Accueil"
          topRightIcon={"menu"}

          onTopRightIconPress={() => {
            navigation.openDrawer();
          }}

          topLeftIcon="logout"

          onTopLeftIconPress={() => {
            Alert.alert(
              'Déconnecter',
              'Êtes-vous sûr ?',
              [
                {
                  text: 'Oui',
                  onPress: () => {
                    console.log('Logging Out');
                  },
                },
                {
                  text: 'Non', onPress: () => {
                    console.log('Logging Out');
                  }
                }
              ],
              { cancelable: false }
            );
          }}
        />
        {false && (<View><Text>Publications :</Text>
          <List
            items={articles}
            renderHeader={articleHeader}
            renderBody={articleBody}
            renderFooter={articleFooter}
            horizontal={true}
          /></View>)
        }
      </View>
      <View>
        <View>
          <View style={{ flex: 1, flexDirection: "column", justifyContent: "space-between" }}>
            <Text>Les offres plus populaires :</Text>
          </View>
          <TouchableOpacity style={{ alignSelf: "flex-end" }} onPress={() => {
            navigation.navigate("Offres");
          }}>
            <Text>plus d'offres</Text>
          </TouchableOpacity>
        </View>
        <List
          items={items.slice(1,3)}
          renderHeader={offreHeader}
          renderBody={offreBody}
          renderFooter={offreFooter}
          horizontal={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#0063B2af',
  },
  button: {
  },
  body: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 10
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end"
  },
  text: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "left",
    backgroundColor: "#00000050"
  },
  offreText: {

  }
});

export default Home;