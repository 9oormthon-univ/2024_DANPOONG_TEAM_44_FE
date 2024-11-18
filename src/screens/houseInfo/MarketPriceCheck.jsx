import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function MarketPriceCheck() {
  return (
    <View style={styles.container}>
      <Text>Market Price Check</Text>
    </View>
  );
}

export default MarketPriceCheck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});
