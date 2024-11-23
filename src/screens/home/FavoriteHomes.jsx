import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const FavoriteHomes = () => {
  // 임시 데이터 예제
  // 찜한 목록 데이터 가져오기 추가 필요
  const favoriteHomes = [
    {
      id: '1',
      address: '서울시 성북구 정릉동',
      status: '별칭',
      usage: '주거 용도',
      type: '오피스텔',
    },
    {
      id: '2',
      address: '서울시 성북구 정릉동',
      status: '별칭',
      usage: '주거 용도',
      type: '오피스텔',
    },
    {
      id: '3',
      address: '서울시 성북구 정릉동',
      status: '별칭',
      usage: '주거 용도',
      type: '오피스텔',
    },
    {
      id: '4',
      address: '서울시 성북구 정릉동',
      status: '별칭',
      usage: '주거 용도',
      type: '오피스텔',
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.address}>{item.address}</Text>
      <Text style={styles.status}>{item.status}</Text>
      <View style={styles.row}>
        <Text style={styles.usage}>{item.usage}</Text>
        <Text style={styles.type}>{item.type}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteHomes}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false} // 스크롤바 숨기기
      />
    </View>
  );
};

export default FavoriteHomes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // 배경색
    padding: 10,
  },
  card: {
    backgroundColor: '#EDF0F5', // 카드 배경색
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
    margin: 10,
  },
  address: {
    fontSize: 18,
    color: '#000',
    margin: 5,
  },
  status: {
    fontSize: 18,
    color: '#000',
    margin: 5,
  },
  usage: {
    fontSize: 18,
    color: '#000',
    margin: 5,
  },
  row: {
    flexDirection: 'row', // 행(Row)으로 정렬
    justifyContent: 'space', // 양쪽 끝에 배치
    alignItems: 'center', // 수직 중앙 정렬
  },
  type: {
    fontSize: 16,
    color: '#9CA3AF', // 연한 색상
  },
});
