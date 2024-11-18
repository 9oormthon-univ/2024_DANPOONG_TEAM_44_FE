import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Signup() {
  return (
    <View style={styles.container}>
      <Text>Signup</Text>
    </View>
  );
}

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});
