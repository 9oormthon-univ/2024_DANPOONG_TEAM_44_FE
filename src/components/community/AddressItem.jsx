import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { PlaceBIcon } from '../../assets/icons/iconSvg';

const AddressItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        onPress(item.id, item.latitude, item.longitude, item.roadAddress)
      }
    >
      <View style={styles.iconContainer}>
        <PlaceBIcon />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.addressContainer}>
          <Text style={styles.tag}>도로명</Text>
          <Text style={styles.roadAddress}>{item.roadAddress}</Text>
        </View>
        <View style={styles.addressContainer}>
          <Text style={styles.tag}>지번</Text>
          <Text style={styles.jibunAddress}>{item.jibunAddress}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

AddressItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    roadAddress: PropTypes.string.isRequired,
    jibunAddress: PropTypes.string.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
};

export default AddressItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 25,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    marginHorizontal: 15,
    backgroundColor: '#FFFFFF',
  },
  iconContainer: {
    marginTop: 5,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    color: '#151515',
    marginBottom: 12,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  tag: {
    width: 60,
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
    color: '#0080FF',
    fontSize: 16,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: '#0080FF',
    borderRadius: 10,
    marginRight: 8,
  },
  roadAddress: {
    fontSize: 18,
    color: '#151515',
    flex: 1,
  },
  jibunAddress: {
    fontSize: 18,
    color: '#585858',
    flex: 1,
  },
});
