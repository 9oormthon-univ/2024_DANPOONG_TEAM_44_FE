import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { UserMiddle } from '../../assets/icons/iconSvg';

const ChatItem = ({
  name = 'Name',
  lastMessage = 'Last Message',
  unreadCount = 0,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.chatItem} onPress={onPress}>
      <View style={styles.userInfo}>
        <UserMiddle />
        <View style={styles.textContainer}>
          <Text style={styles.userName}>{name}</Text>
          <View style={styles.messageContainer}>
            <Text style={styles.lastMessage}>{lastMessage}</Text>
            {unreadCount > 0 && (
              <View style={styles.unreadBadge}>
                <Text style={styles.unreadCount}>{unreadCount}</Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

ChatItem.propTypes = {
  name: PropTypes.string.isRequired,
  lastMessage: PropTypes.string.isRequired,
  unreadCount: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default ChatItem;

const styles = StyleSheet.create({
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
  },
  userName: {
    fontSize: 16,
    color: '#3D3D3D',
    fontFamily: 'SpoqaHanSansNeo-Regular',
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  lastMessage: {
    fontSize: 12,
    color: '#636363',
    fontFamily: 'SpoqaHanSansNeo-Regular',
    flex: 1,
  },
  unreadBadge: {
    backgroundColor: '#0080FF',
    width: 20,
    height: 20,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  unreadCount: {
    color: '#FFFFFF',
    fontFamily: 'SpoqaHanSansNeo-Regular',
    fontSize: 11,
  },
});
