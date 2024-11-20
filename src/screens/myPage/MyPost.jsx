import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useHideBottomTabs from '../../hooks/useHideBottomTabs';
import CommunityItem from '../../components/community/CommunityItem';
import { posts } from '../../constants/mockData';

function MyPost() {
  const navigation = useNavigation();

  useHideBottomTabs(navigation);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <CommunityItem
            item={item}
            showAuthor={false}
            onPress={() => navigation.navigate('ViewPost', { id: item.id })}
          />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

export default MyPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  listContainer: {
    paddingTop: 3,
    paddingBottom: 5,
  },
});
