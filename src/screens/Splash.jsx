import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ onSplashEnd }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onSplashEnd();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onSplashEnd]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/splash.png')} style={styles.image} />
    </View>
  );
};

SplashScreen.propTypes = {
  onSplashEnd: PropTypes.func.isRequired,
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
