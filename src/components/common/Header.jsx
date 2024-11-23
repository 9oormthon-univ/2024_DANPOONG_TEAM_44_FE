import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { BackIconR } from '../../assets/icons/iconSvg';

const Header = ({
  title = null,
  showBackButton = false,
  onBackPress = null,
  rightIcons = [],
}) => {
  return (
    <View
      style={[
        styles.header,
        showBackButton
          ? styles.headerWithBackButton
          : styles.headerWithoutBackButton,
      ]}
    >
      {showBackButton ? (
        <TouchableOpacity
          style={[styles.backButton, { zIndex: 1 }]}
          onPress={() => {
            if (onBackPress) onBackPress();
          }}
        >
          <BackIconR />
        </TouchableOpacity>
      ) : (
        <View style={styles.backButtonPlaceholder} />
      )}

      {title ? (
        <Text
          style={[
            styles.headerTitle,
            showBackButton ? styles.centerTitle : styles.leftTitle,
          ]}
        >
          {title}
        </Text>
      ) : (
        <View style={styles.titlePlaceholder} />
      )}

      <View style={styles.headerIcons}>
        {rightIcons.map((IconComponent, index) => (
          <TouchableOpacity
            key={index}
            style={styles.iconButton}
            onPress={IconComponent.onPress}
          >
            {React.createElement(IconComponent.icon)}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  showBackButton: PropTypes.bool,
  onBackPress: PropTypes.func,
  rightIcons: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.func.isRequired,
      onPress: PropTypes.func.isRequired,
    }),
  ),
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  headerWithBackButton: {
    paddingHorizontal: 24,
  },
  headerWithoutBackButton: {
    paddingRight: 24,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: 'SpoqaHanSansNeo-Medium',
    color: '#000000',
  },
  centerTitle: {
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
  },
  leftTitle: {
    flex: 1,
    textAlign: 'left',
  },
  titlePlaceholder: {
    flex: 1,
  },
  backButton: {
    width: 24,
    marginRight: 10,
  },
  backButtonPlaceholder: {
    width: 24,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 16,
  },
});
