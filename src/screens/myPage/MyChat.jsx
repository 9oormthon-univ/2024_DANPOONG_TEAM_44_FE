import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/common/Header';
import useHideBottomTabs from '../../hooks/useHideBottomTabs';
import ChatItem from '../../components/community/ChatItem';
import { chats } from '../../constants/mockData';

function MyChat() {
  const navigation = useNavigation();

  useHideBottomTabs(navigation);

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={chats}
        ListHeaderComponent={
          <Header
            title="내 채팅"
            showBackButton={true}
            onBackPress={() => navigation.goBack()}
          />
        }
        renderItem={({ item }) => (
          <ChatItem
            name={item.name}
            lastMessage={item.lastMessage}
            unreadCount={item.unreadCount}
            onPress={() =>
              navigation.navigate('Chat', {
                id: item.id,
                author: item.name,
              })
            }
          />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
}

export default MyChat;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  listContainer: {
    paddingVertical: 5,
  },
});
