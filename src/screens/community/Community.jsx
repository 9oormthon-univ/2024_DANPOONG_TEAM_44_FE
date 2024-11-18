import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Community() {
  return (
    <View style={styles.container}>
      <Text>Community</Text>
    </View>
  );
}

export default Community;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});
