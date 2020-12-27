import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { Asset } from 'expo-asset';
import Navigator from '../navigator';

const Splash = (props) => {

    [isReady, setIsReady] = useState(false);

    useEffect(() => {
        SplashScreen.preventAutoHideAsync();
    }, []);

    const cacheResourcesAsync = async () => {
        SplashScreen.hideAsync();
        setTimeout(async()=>{
            try {
                const images = [
                    require('../assets/images/expo-icon.png'),
                ];

                const cacheImages = images.map(image => {
                    return Asset.fromModule(image).downloadAsync();
                });

                await Promise.all(cacheImages);
            } catch (e) {
                console.warn(e);
            } finally {
                setIsReady(true);
            }
    },100);
};

    if (!isReady) {
        return (
            <View style={{ flex: 1 ,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                <Image
                    source={require('../assets/images/expo-icon.png')}
                    onLoad={cacheResourcesAsync}
                />
            </View>
        );
    }

    return (
            <Navigator/>
    );
}


export default Splash; 