import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { EditIcon, DeleteIcon } from '../../assets/icons/iconSvg';

const DropdownMenu = ({ onEdit, onDelete, onClose }) => {
  return (
    <TouchableOpacity
      style={styles.overlay}
      onPress={onClose}
      activeOpacity={1}
    >
      <View style={styles.dropdownMenu}>
        <TouchableOpacity style={styles.dropdownItem} onPress={onEdit}>
          <Text style={styles.dropdownText}>수정</Text>
          <EditIcon style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.dropdownItem} onPress={onDelete}>
          <Text style={styles.dropdownText}>삭제</Text>
          <DeleteIcon style={styles.icon} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

DropdownMenu.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DropdownMenu;

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
  },
  dropdownMenu: {
    position: 'absolute',
    top: 52,
    right: 0,
    width: 290,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
    paddingHorizontal: 25,
  },
  dropdownText: {
    fontSize: 18,
    color: '#868686',
  },
  divider: {
    height: 1,
    backgroundColor: '#CCCACA',
  },
});
