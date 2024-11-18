import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function MyChat() {
  return (
    <View style={styles.container}>
      <Text>MyChat</Text>
    </View>
  );
}

export default MyChat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});
