import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { formatDateToKorean } from '../../utils/DateUtils';
import { UserMini } from '../../assets/icons/iconSvg';

function CommunityItem({ item, onPress, showAuthor = true }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.postContainer}>
      <View style={styles.contentContainer}>
        <Image
          style={styles.image}
          source={{
            uri: Array.isArray(item.images) ? item.images[0] : item.images,
          }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title} numberOfLines={2}>
            {item.title}
          </Text>
          <Text style={styles.location}>{item.location}</Text>
          <View
            style={[styles.footerContainer, !showAuthor && styles.noAuthor]}
          >
            {showAuthor && (
              <View style={styles.authorContainer}>
                <UserMini />
                <Text style={styles.author}>{item.authorName}</Text>
              </View>
            )}
            <Text style={styles.date}>
              {formatDateToKorean(item.createdDate)}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

CommunityItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    authorName: PropTypes.string.isRequired,
    createdDate: PropTypes.string.isRequired,
    images: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.string,
    ]).isRequired,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
  showAuthor: PropTypes.bool,
};

export default CommunityItem;

const styles = StyleSheet.create({
  postContainer: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
  },
  contentContainer: {
    flexDirection: 'row',
  },
  image: {
    width: 140,
    height: 120,
    borderRadius: 8,
    backgroundColor: '#D9D9D9',
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
    paddingVertical: 4,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  location: {
    fontSize: 13,
    color: '#868686',
    marginBottom: 16,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
  },
  noAuthor: {
    justifyContent: 'flex-end',
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  author: {
    fontSize: 13,
    color: '#868686',
    marginLeft: 4,
  },
  date: {
    fontSize: 13,
    color: '#868686',
  },
});
