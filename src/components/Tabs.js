import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text,TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

import Drawer from './Drawer';
import Cart from '../screens/Cart';
import Profile from '../screens/Profile';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    const cartItems = useSelector(state => state.cartItems);

    return (
        <Tab.Navigator
            initialRouteName="Acceuil"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Acceuil') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    } else if (route.name === 'Panier') {
                        iconName = focused
                            ? 'cart'
                            : 'cart-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused
                            ? 'account-details'
                            : 'account-details';
                    }
                    return (
                        <View style={{ flex: 1, flexDirection: "row" }} onPress={() => {

                        }}>
                            <MaterialCommunityIcons name={iconName} size={size} color={color} />
                            {(route.name === 'Panier') ? <Text>{cartItems.length}</Text> : <View></View>}
                        </View>
                    );
                },
            })}
            tabBarOptions={{
                activeTintColor: 'blue',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Acceuil" component={Drawer} />
            <Tab.Screen name="Panier" component={Cart} />
        </Tab.Navigator>
    );
}

export default Tabs;
