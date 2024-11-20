import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, StyleSheet } from 'react-native';
import CommunityItem from '../../components/community/CommunityItem';
import { posts } from '../../constants/mockData';

function Community() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <CommunityItem
            item={item}
            onPress={() => navigation.navigate('ViewPost', { id: item.id })}
          />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

export default Community;

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
