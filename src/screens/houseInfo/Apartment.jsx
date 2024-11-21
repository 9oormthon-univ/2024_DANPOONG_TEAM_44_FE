import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Apartment() {
  return (
    <View style={styles.container}>
      <Text>Apartment</Text>
    </View>
  );
}

export default Apartment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});
