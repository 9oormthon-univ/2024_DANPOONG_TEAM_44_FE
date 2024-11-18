import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function WritePost() {
  return (
    <View style={styles.container}>
      <Text>WritePost</Text>
    </View>
  );
}

export default WritePost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});
