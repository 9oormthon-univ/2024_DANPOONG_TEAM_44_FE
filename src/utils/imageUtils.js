import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

export const pickImage = async (setFileData, setIsUploaded) => {
  const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (status !== 'granted') {
    alert('사진 업로드를 위해 권한이 필요합니다.');
    return;
  }

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsMultipleSelection: true,
    quality: 1,
  });

  if (!result.canceled) {
    if (result.assets.length > 2) {
      alert('사진은 최대 2개까지만 선택할 수 있습니다.');
      return;
    }

    const newFileData = await Promise.all(
      result.assets.map(async asset => {
        const base64Content = await FileSystem.readAsStringAsync(asset.uri, {
          encoding: FileSystem.EncodingType.Base64,
        });

        return {
          fileName: asset.uri.split('/').pop(),
          fileContent: base64Content,
        };
      }),
    );

    setFileData(newFileData);
    setIsUploaded(true);
  }
};
