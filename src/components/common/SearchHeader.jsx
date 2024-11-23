import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { BackIconR, SearchIcon } from '../../assets/icons/iconSvg';

const SearchHeader = ({
  placeholder = '검색어 입력',
  value,
  onChangeText,
  onBackPress,
  onSearch,
}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
        <BackIconR />
      </TouchableOpacity>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#868686"
          value={value}
          onChangeText={onChangeText}
          numberOfLines={1}
        />
        <TouchableOpacity onPress={onSearch} style={styles.searchButton}>
          <SearchIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

SearchHeader.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  onBackPress: PropTypes.func.isRequired,
  onSearch: PropTypes.func,
};

export default SearchHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    marginRight: 16,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === 'android' ? 4 : 10,
  },
  input: {
    flex: 1,
    fontSize: 12,
    color: '#333333',
    paddingHorizontal: 12,
    fontFamily: 'SpoqaHanSansNeo-Regular',
  },
  searchButton: {
    paddingHorizontal: 8,
  },
});
