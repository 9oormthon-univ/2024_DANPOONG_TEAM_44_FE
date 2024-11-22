import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/common/Header';
import { SearchIcon, WriteIcon } from '../../assets/icons/iconSvg';
import CommunityItem from '../../components/community/CommunityItem';
import { posts } from '../../constants/mockData';

function Community() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <Header
          title="커뮤니티"
          rightIcons={[
            {
              icon: SearchIcon,
              onPress: () => navigation.navigate('SearchPost'),
            },
            {
              icon: WriteIcon,
              onPress: () => navigation.navigate('WritePost'),
            },
          ]}
        />

        {posts.map(item => (
          <CommunityItem
            key={item.id}
            item={item}
            onPress={() => navigation.navigate('ViewPost', { id: item.id })}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Community;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
