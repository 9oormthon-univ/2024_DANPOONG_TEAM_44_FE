import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function AreaSetting() {
  return (
    <View style={styles.container}>
      <Text>AreaSetting</Text>
    </View>
  );
}

export default AreaSetting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});
