import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import StatusBar from '../components/StatusBar'

const History = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar navigation={navigation} topRightIcon={"keyboard-backspace"} onTopRightIconPress={() => {
        navigation.goBack();
      }}
      />
      <Text>History Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : '#ADEFD1FF',
  },
});

export default History;