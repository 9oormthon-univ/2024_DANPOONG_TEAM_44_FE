import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, ScrollView } from 'react-native';
import useHideBottomTabs from '../../hooks/useHideBottomTabs';
import ChatInput from '../../components/community/ChatInput';
import ChatMessage from '../../components/community/ChatMessage';
import { messages } from '../../constants/mockData';

function Chat() {
  const navigation = useNavigation();

  useHideBottomTabs(navigation);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.chatContainer}>
        {messages.map((message, index) => {
          const isLastInGroup =
            index === messages.length - 1 ||
            messages[index + 1].timestamp !== message.timestamp ||
            messages[index + 1].isMe !== message.isMe;

          return (
            <ChatMessage
              key={message.id}
              text={message.text}
              timestamp={
                isLastInGroup ? message.timestamp || 'No timestamp' : ''
              }
              isMe={message.isMe}
            />
          );
        })}
      </ScrollView>
      <ChatInput />
    </View>
  );
}

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  chatContainer: {
    padding: 16,
  },
});
