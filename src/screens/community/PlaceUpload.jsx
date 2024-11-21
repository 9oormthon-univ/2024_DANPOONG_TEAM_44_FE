import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchHeader from '../../components/common/SearchHeader';
import useHideBottomTabs from '../../hooks/useHideBottomTabs';
import AddressItem from '../../components/community/AddressItem';
import { adress } from '../../constants/mockData';

function PlaceUpload() {
  const navigation = useNavigation();
  const route = useRoute();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(adress);

  useHideBottomTabs(navigation);

  const handleSearch = () => {
    const results = adress.filter(
      post =>
        post.title.includes(searchQuery) || post.content.includes(searchQuery),
    );
    setFilteredPosts(results);
  };

  const handleSelect = id => {
    if (route.params?.onSelect) {
      route.params.onSelect(id);
    }
    navigation.goBack();
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
          <AddressItem item={item} onPress={() => handleSelect(item.id)} />
        )}
        keyExtractor={item => item.id}
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

export default PlaceUpload;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  listContainer: {
    paddingTop: 3,
    paddingBottom: 5,
    paddingVertical: 15,
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
