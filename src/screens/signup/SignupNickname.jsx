import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function SignupNickname() {
  return (
    <View style={styles.container}>
      <Text>SignupNickname</Text>
    </View>
  );
}

export default SignupNickname;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});
