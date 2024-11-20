import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, StyleSheet } from 'react-native';
import useHideBottomTabs from '../../hooks/useHideBottomTabs';
import ChatItem from '../../components/community/ChatItem';
import { chats } from '../../constants/mockData';

function MyChat() {
  const navigation = useNavigation();

  useHideBottomTabs(navigation);

  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
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
    </View>
  );
}

export default MyChat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  listContainer: {
    paddingVertical: 5,
  },
});
