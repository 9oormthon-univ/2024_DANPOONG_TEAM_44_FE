import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const FavoriteModal = ({ visible, onRegister, onClose }) => {
  const [id, setId] = useState('');

  const handleRegister = () => {
    if (!id.trim()) {
      alert('별칭을 입력해주세요!');
      return;
    }
    // console.log(id);
    onRegister(id); // 부모로 값 전달
    setId(''); // 입력 초기화
  };

  return (
    <Modal transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.message}>
            내가 찜한 집에{'\n'} 등록하시겠습니까?
          </Text>
          <TextInput
            style={styles.input}
            placeholder="별칭 입력"
            placeholderTextColor="#B0B0B0"
            value={id}
            onChangeText={setId}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.registerButton}
              onPress={handleRegister}
            >
              <Text style={styles.buttonText}>등록하기</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.buttonText2}>뒤로가기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

FavoriteModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onRegister: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default FavoriteModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  message: {
    fontSize: 20,
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '87%', // 필드가 화면 너비 차지
    marginBottom: 47, // 아래 여백 추가, 필드 간 간격
    paddingHorizontal: 15, // 좌우 15여백 추가
    borderBottomWidth: 1, // textfield 밑줄
    borderBottomColor: '#868686',
    fontSize: 16,
    paddingVertical: 10,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  registerButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    borderRadius: 30,
    flex: 1,
    alignItems: 'center',
    marginRight: 10,
  },
  cancelButton: {
    backgroundColor: '#E0E9F5',
    paddingVertical: 12,
    borderRadius: 30,
    flex: 1,
    alignItems: 'center',
    marginLeft: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  buttonText2: {
    color: '#585858',
    fontSize: 16,
  },
});
