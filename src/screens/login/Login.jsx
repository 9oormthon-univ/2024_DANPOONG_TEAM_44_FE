import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Login() {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});
