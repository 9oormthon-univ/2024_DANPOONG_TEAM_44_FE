import React from 'react';
import PropTypes from 'prop-types';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const LeaveChat = ({ visible, onClose, onLeave }) => {
  return (
    <Modal transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.message}>채팅방을 나가시겠습니까?</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.leaveButton} onPress={onLeave}>
              <Text style={styles.buttonText}>나가기</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.buttonText}>아니요</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

LeaveChat.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onLeave: PropTypes.func.isRequired,
};

export default LeaveChat;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(9, 9, 9, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 310,
    height: 200,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  message: {
    fontSize: 20,
    color: '#000000',
    textAlign: 'center',
    paddingVertical: 45,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 24,
    paddingTop: 10,
  },
  leaveButton: {
    backgroundColor: '#FF0000',
    opacity: 0.87,
    width: 120,
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButton: {
    backgroundColor: '#A5A8AD',
    width: 120,
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});
