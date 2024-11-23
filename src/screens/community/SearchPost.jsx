import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchHeader from '../../components/common/SearchHeader';
import useHideBottomTabs from '../../hooks/useHideBottomTabs';
import CommunityItem from '../../components/community/CommunityItem';
import { requestGetFetch } from '../../services/apiService';

function SearchPost() {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);

  useHideBottomTabs(navigation);

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      setFilteredPosts([]);
      return;
    }

    try {
      const response = await requestGetFetch(
        `/posts/search?keyword=${encodeURIComponent(
          searchQuery,
        )}&page=0&size=10`,
      );
      if (response.success) {
        setFilteredPosts(response.data.content);
      } else {
        setFilteredPosts([]);
      }
    } catch (error) {
      console.error('검색 API 호출 실패:', error);
      setFilteredPosts([]);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={filteredPosts}
        ListHeaderComponent={
          <SearchHeader
            onBackPress={() => navigation.goBack()}
            onSearch={handleSearch}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        }
        renderItem={({ item }) => (
          <CommunityItem
            item={item}
            onPress={() => navigation.navigate('ViewPost', { id: item.id })}
          />
        )}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <View style={styles.noResultsContainer}>
            <Text style={styles.noResultsText}>검색 결과가 없습니다.</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

export default SearchPost;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  listContainer: {
    paddingTop: 3,
    paddingBottom: 5,
  },
  noResultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noResultsText: {
    fontSize: 18,
    color: '#868686',
  },
});
