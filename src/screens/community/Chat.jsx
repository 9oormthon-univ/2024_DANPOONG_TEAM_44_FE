import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useHideBottomTabs from '../../hooks/useHideBottomTabs';
import Header from '../../components/common/Header';
import { LeaveIcon } from '../../assets/icons/iconSvg';
import ChatInput from '../../components/community/ChatInput';
import ChatMessage from '../../components/community/ChatMessage';
import LeaveChat from '../../components/modal/LeaveChat';
import { messages } from '../../constants/mockData';

function Chat() {
  const [isModalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();

  useHideBottomTabs(navigation);

  const author = route.params?.author || '사용자명';

  const handleLeaveChat = () => {
    setModalVisible(false);
    navigation.goBack();
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.chatContainer}>
        <Header
          title={author}
          showBackButton={true}
          onBackPress={() => navigation.goBack()}
          rightIcons={[
            {
              icon: LeaveIcon,
              onPress: () => setModalVisible(true),
            },
          ]}
        />
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
      <LeaveChat
        visible={isModalVisible}
        onClose={handleCloseModal}
        onLeave={handleLeaveChat}
      />
    </SafeAreaView>
  );
}

export default Chat;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  chatContainer: {
    paddingHorizontal: 16,
  },
});
