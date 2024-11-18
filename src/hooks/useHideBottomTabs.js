import { useEffect } from 'react';

function useHideBottomTabs(navigation) {
  useEffect(() => {
    const defaultStyle = {
      height: '10%',
      borderTopColor: 'transparent',
      shadowColor: 'transparent',
      elevation: 0,
      borderTopWidth: 0,
      backgroundColor: 'white',
    };

    // 탭 숨김
    navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' } });

    // 언마운트 시 원래 스타일 복원
    return () =>
      navigation.getParent()?.setOptions({ tabBarStyle: defaultStyle });
  }, [navigation]);
}

export default useHideBottomTabs;
