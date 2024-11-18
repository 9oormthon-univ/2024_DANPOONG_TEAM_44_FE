import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ViewPost() {
  return (
    <View style={styles.container}>
      <Text>ViewPost</Text>
    </View>
  );
}

export default ViewPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});
