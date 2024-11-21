import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function MultiFamily() {
  return (
    <View style={styles.container}>
      <Text>Multi Family</Text>
    </View>
  );
}

export default MultiFamily;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});
