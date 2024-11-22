import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchHeader from '../../components/common/SearchHeader';
import useHideBottomTabs from '../../hooks/useHideBottomTabs';
import AddressItem from '../../components/community/AddressItem';
import useKakaoPlaceSearch from '../../hooks/useKakaoPlaceSearch';

function PlaceUpload() {
  const navigation = useNavigation();
  const route = useRoute();
  const [searchQuery, setSearchQuery] = useState('');

  const { filteredPosts, searchKakaoPlaces } = useKakaoPlaceSearch();
  useHideBottomTabs(navigation);

  const handleSearch = () => {
    searchKakaoPlaces(searchQuery);
  };
  const handleSelect = (id, latitude, longitude) => {
    if (route.params?.onSelect) {
      route.params.onSelect({ id, latitude, longitude });
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
          <AddressItem
            item={item}
            onPress={() => handleSelect(item.id, item.latitude, item.longitude)}
          />
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
