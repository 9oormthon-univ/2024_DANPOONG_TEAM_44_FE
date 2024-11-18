import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function FavoriteHomes() {
  return (
    <View style={styles.container}>
      <Text>Favorite Homes</Text>
    </View>
  );
}

export default FavoriteHomes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});
