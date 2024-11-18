import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Start() {
  return (
    <View style={styles.container}>
      <Text>Start</Text>
    </View>
  );
}

export default Start;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});
