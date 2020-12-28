import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'

import Tab from './components/Tabs';
import Details from './screens/Details';
import Payement from './screens/Payement';

import store from './redux/store';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const Navigator = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator headerMode="none">
                <Stack.Screen name="Tab" component={Tab} />
                <Stack.Screen name="Details" component={Details} />
                <Stack.Screen name="Paiement" component={Payement} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default Navigator;
