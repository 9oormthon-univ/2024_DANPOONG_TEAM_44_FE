import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

function ChatMessage({ text, timestamp = '', isMe }) {
  return (
    <View style={isMe ? styles.containerRight : styles.containerLeft}>
      {text && (
        <View style={isMe ? styles.bubbleRight : styles.bubbleLeft}>
          <Text style={isMe ? styles.textRight : styles.textLeft}>{text}</Text>
        </View>
      )}
      {timestamp && (
        <Text style={isMe ? styles.timestampRight : styles.timestampLeft}>
          {timestamp}
        </Text>
      )}
    </View>
  );
}

ChatMessage.propTypes = {
  text: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  isMe: PropTypes.bool.isRequired,
};

export default ChatMessage;

const styles = StyleSheet.create({
  containerLeft: {
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  containerRight: {
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  bubbleLeft: {
    maxWidth: '70%',
    padding: 10,
    backgroundColor: '#E0E9F5',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  bubbleRight: {
    maxWidth: '70%',
    padding: 10,
    backgroundColor: '#0080FF',
    opacity: 0.8,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  textLeft: {
    color: '#494949',
    fontSize: 16,
  },
  textRight: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  timestampLeft: {
    fontSize: 13,
    marginTop: 4,
    color: '#000000',
    opacity: 0.25,
    alignSelf: 'flex-start',
  },
  timestampRight: {
    fontSize: 13,
    marginTop: 4,
    color: '#000000',
    opacity: 0.25,
    alignSelf: 'flex-end',
  },
});
