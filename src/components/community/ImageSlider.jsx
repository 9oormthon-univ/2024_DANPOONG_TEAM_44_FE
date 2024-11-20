import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Image, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const ImageSlider = ({ images }) => {
  if (!Array.isArray(images) || images.length === 0) {
    return null;
  }

  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={styles.imageScrollContainer}
    >
      {images.map((src, index) => (
        <Image
          key={index}
          style={styles.image}
          source={{
            uri: src,
          }}
        />
      ))}
    </ScrollView>
  );
};

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageSlider;

const styles = StyleSheet.create({
  imageScrollContainer: {
    height: 250,
  },
  image: {
    width: screenWidth,
    height: 250,
    resizeMode: 'cover',
  },
});
