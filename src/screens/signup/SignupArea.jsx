import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function SignupArea() {
  return (
    <View style={styles.container}>
      <Text>SignupArea</Text>
    </View>
  );
}

export default SignupArea;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});
