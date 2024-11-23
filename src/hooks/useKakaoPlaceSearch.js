import { useState } from 'react';
import { KAKAO_RESTAPI_KEY } from '@env';

const useKakaoPlaceSearch = () => {
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [error, setError] = useState(null);

  const searchKakaoPlaces = async query => {
    if (!query.trim()) return;

    try {
      const response = await fetch(
        `https://dapi.kakao.com/v2/local/search/keyword.json?query=${encodeURIComponent(query)}`,
        {
          headers: {
            Authorization: `KakaoAK ${KAKAO_RESTAPI_KEY}`,
          },
        },
      );

      const data = await response.json();

      if (data.documents) {
        const results = data.documents.map(doc => ({
          id: doc.id,
          title: doc.place_name,
          roadAddress: doc.road_address_name || '도로명 주소 없음',
          jibunAddress: doc.address_name || '지번 주소 없음',
          latitude: Number(doc.y),
          longitude: Number(doc.x),
        }));
        setFilteredPosts(results);
      } else {
        setFilteredPosts([]);
      }
    } catch (err) {
      console.error('Error fetching data from Kakao API:', err);
      setError('주소 검색에 실패했습니다.');
    }
  };

  return { filteredPosts, searchKakaoPlaces, error };
};

export default useKakaoPlaceSearch;
