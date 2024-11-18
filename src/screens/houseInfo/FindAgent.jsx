import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function FindAgent() {
  return (
    <View style={styles.container}>
      <Text>Find Agent</Text>
    </View>
  );
}

export default FindAgent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});
