import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Image, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const DEFAULT_IMAGE =
  'https://cdn.woodkorea.co.kr/news/photo/202008/48341_58008_847.jpg';

const ImageSlider = ({ images }) => {
  const imageList =
    Array.isArray(images) && images.length > 0
      ? images.map(src =>
          src.startsWith('data:image') ? src : `data:image/jpeg;base64,${src}`,
        )
      : [DEFAULT_IMAGE];

  console.log('Image list:', imageList);

  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={styles.imageScrollContainer}
    >
      {imageList.map((src, index) => (
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
