import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function OfficeTel() {
  return (
    <View style={styles.container}>
      <Text>OfficeTel</Text>
    </View>
  );
}

export default OfficeTel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});
