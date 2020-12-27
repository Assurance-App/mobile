import * as React from 'react';
import { View, Text,Button,StyleSheet } from 'react-native';
import StatusBar from '../components/StatusBar'

const Vehicules = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar navigation={navigation} topRightIcon={"keyboard-backspace"} onTopRightIconPress={() => {
        navigation.goBack();
      }}
      />
      <Text>Vehicules Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : '#ADEFD1FF',
  },
});

export default Vehicules;