import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import History from '../screens/History';
import Offres from '../screens/Offres';
import Vehicules from '../screens/Vehicules';

const Drawer = createDrawerNavigator();

const Drawers = () => {

    return (
        <Drawer.Navigator
            drawerStyle={{
                backgroundColor: 'white',
                width: 240,

            }}>
            <Drawer.Screen name="Acceuil" component={Home} />
            <Drawer.Screen name="Offres" component={Offres} />
            <Drawer.Screen name="Parameter" component={Settings} />
        </Drawer.Navigator>
    );
}

export default Drawers;

