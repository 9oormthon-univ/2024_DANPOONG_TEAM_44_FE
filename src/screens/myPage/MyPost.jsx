import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function MyPost() {
  return (
    <View style={styles.container}>
      <Text>MyPost</Text>
    </View>
  );
}

export default MyPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});
