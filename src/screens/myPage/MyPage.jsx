import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/common/Header';
import { UserBig, NextIcon } from '../../assets/icons/iconSvg';
import { DeleteAccount, Logout } from '../../components/modal/index';
import { requestGetFetch } from '../../services/apiService';

function MyPage() {
  const navigation = useNavigation();

  const [isLogoutModalVisible, setLogoutModalVisible] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [userData, setUserData] = useState(null);

  const openLogoutModal = () => setLogoutModalVisible(true);
  const closeLogoutModal = () => setLogoutModalVisible(false);

  const openDeleteModal = () => setDeleteModalVisible(true);
  const closeDeleteModal = () => setDeleteModalVisible(false);

  const fetchUserInfo = async () => {
    try {
      const response = await requestGetFetch('/userInfo');
      if (response) {
        setUserData(response);
      }
    } catch (error) {
      console.error('사용자 정보 가져오기 실패:', error);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="내 정보" showBackButton={false} />
      <View style={styles.container}>
        <Logout visible={isLogoutModalVisible} onClose={closeLogoutModal} />
        <DeleteAccount
          visible={isDeleteModalVisible}
          onClose={closeDeleteModal}
        />

        {userData && (
          <>
            <View style={styles.profileCard}>
              <UserBig />
              <View style={styles.nameContainer}>
                <Text style={styles.userName}>{userData.username}</Text>
                <Text style={styles.userSuffix}>님</Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('AreaSetting')}
              >
                <Text style={styles.userLocation}>
                  {`${userData.sido} ${userData.sigungu} ${userData.roadname}`}{' '}
                  {'>'}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.statsContainer}>
              <TouchableOpacity
                style={styles.statButton}
                onPress={() => navigation.navigate('MyChat')}
              >
                <Text style={styles.statLabel}>내 채팅</Text>
                <Text style={styles.statNumber}>{userData.chatCount || 0}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.statButton}
                onPress={() => navigation.navigate('MyPost')}
              >
                <Text style={styles.statLabel}>내가 쓴 글</Text>
                <Text style={styles.statNumber}>{userData.postCount || 0}</Text>
              </TouchableOpacity>
            </View>
          </>
        )}

        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={openLogoutModal}
          >
            <Text style={styles.optionText}>카카오 로그아웃</Text>
            <NextIcon />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={openLogoutModal}
          >
            <Text style={styles.optionText}>로그아웃</Text>
            <NextIcon />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={openDeleteModal}
          >
            <Text style={styles.optionText}>회원 탈퇴</Text>
            <NextIcon />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default MyPage;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    position: 'relative',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  profileCard: {
    backgroundColor: '#F6FBFF',
    borderRadius: 12,
    borderColor: '#E7EDF4',
    borderWidth: 1,
    alignItems: 'center',
    paddingVertical: 31,
    marginBottom: 30,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 16,
    marginBottom: 8,
  },
  userName: {
    fontSize: 22,
    color: '#000000',
    fontFamily: 'SpoqaHanSansNeo-Regular',
  },
  userSuffix: {
    fontSize: 22,
    color: '#868686',
    fontFamily: 'SpoqaHanSansNeo-Regular',
  },
  userLocation: {
    fontSize: 14,
    color: '#868686',
    fontFamily: 'SpoqaHanSansNeo-Regular',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  statButton: {
    flex: 1,
    height: 100,
    backgroundColor: '#0080FF',
    borderRadius: 12,
    alignItems: 'center',
    paddingVertical: 15,
    marginHorizontal: 5,
  },
  statLabel: {
    fontSize: 14,
    color: '#FFFFFF',
    fontFamily: 'SpoqaHanSansNeo-Regular',
    marginBottom: 5,
  },
  statNumber: {
    fontSize: 32,
    color: '#FFFFFF',
    fontFamily: 'SpoqaHanSansNeo-Regular',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 40,
    left: 30,
    right: 30,
  },
  optionButton: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionText: {
    fontSize: 14,
    color: '#868686',
    fontFamily: 'SpoqaHanSansNeo-Regular',
  },
});
