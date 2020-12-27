import * as React from 'react';
import { View, Text,Button ,StyleSheet} from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0063B2af',
  },
});

export default Profile;