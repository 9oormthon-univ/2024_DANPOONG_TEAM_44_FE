import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function HouseInfo() {
  return (
    <View style={styles.container}>
      <Text>HouseInfo</Text>
    </View>
  );
}

export default HouseInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});
