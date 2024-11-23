import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { InputIcon } from '../../assets/icons/iconSvg';

function ChatInput() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholderTextColor="#A0A0A0" />
      <TouchableOpacity>
        <InputIcon />
      </TouchableOpacity>
    </View>
  );
}

export default ChatInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(217, 217, 217, 0.4)',
    borderRadius: 50,
    paddingHorizontal: 12,
    margin: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    color: '#000000',
    fontFamily: 'SpoqaHanSansNeo-Regular',
  },
});
