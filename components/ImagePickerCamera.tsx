import * as ImagePicker from 'expo-image-picker';
import { useEffect } from 'react';
import { Alert, Linking } from 'react-native';

interface ImagePickerCameraProps {
  onPhotoTaken: (photoUri: string) => void;
  onCancel: () => void;
}

export function ImagePickerCamera({ onPhotoTaken, onCancel }: ImagePickerCameraProps) {
  useEffect(() => {
    // Automatically open camera when component mounts
    openCamera();
  }, []);

  const openCamera = async () => {
    try {
      // Request camera permissions
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          'Camera Permission Required',
          'Camera permission is required to take photos of parking violations. Please grant camera access in your device settings.',
          [
            {
              text: 'Open Settings',
              onPress: () => Linking.openSettings(),
            },
            {
              text: 'Cancel',
              onPress: onCancel,
            },
          ]
        );
        return;
      }

      // Open camera directly
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: 'Images' as any,
        allowsEditing: false,
        aspect: [4, 3],
        quality: 0.8,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const photoUri = result.assets[0].uri;
        onPhotoTaken(photoUri);
      } else {
        // User cancelled camera, go back
        onCancel();
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to open camera. Please try again.');
      onCancel();
    }
  };

  // This component doesn't render anything visible
  // It just automatically opens the camera
  return null;
}
