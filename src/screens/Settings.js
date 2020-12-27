import * as React from 'react';
import { View, Text,Button,StyleSheet } from 'react-native';

const Settings = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : '#ADEFD1FF',
  },
});

export default Settings;