import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { MaterialButton } from './MaterialButton';
import { ThemedText } from './ThemedText';

interface SimpleCameraProps {
  onPhotoTaken: (photoUri: string) => void;
  onCancel: () => void;
}

export function SimpleCamera({ onPhotoTaken, onCancel }: SimpleCameraProps) {
  const [isCapturing, setIsCapturing] = useState(false);

  const handleTakePhoto = async () => {
    setIsCapturing(true);
    
    try {
      // Simulate camera capture with a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For now, we'll use a placeholder image
      // In a real implementation, this would be the actual photo URI
      const photoUri = `photo_${Date.now()}.jpg`;
      
      onPhotoTaken(photoUri);
    } catch (error) {
      Alert.alert('Error', 'Failed to take photo. Please try again.');
    } finally {
      setIsCapturing(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.cameraPreview}>
        <View style={styles.cameraOverlay}>
          <View style={styles.cameraHeader}>
            <ThemedText type="titleMedium" style={styles.cameraTitle}>
              Camera Preview
            </ThemedText>
            <ThemedText type="bodySmall" style={styles.cameraSubtitle}>
              Position your device to capture the parking violation
            </ThemedText>
          </View>
          
          <View style={styles.cameraFrame}>
            <View style={styles.cornerTL} />
            <View style={styles.cornerTR} />
            <View style={styles.cornerBL} />
            <View style={styles.cornerBR} />
            <ThemedText type="bodyMedium" style={styles.frameText}>
              📷 Camera View
            </ThemedText>
          </View>
          
          <View style={styles.cameraControls}>
            <MaterialButton
              title={isCapturing ? "Capturing..." : "Take Photo"}
              onPress={handleTakePhoto}
              variant="elevated"
              size="large"
              style={styles.captureButton}
              disabled={isCapturing}
            />
            <MaterialButton
              title="Cancel"
              onPress={onCancel}
              variant="outlined"
              size="medium"
              style={styles.cancelButton}
              disabled={isCapturing}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  cameraPreview: {
    flex: 1,
    backgroundColor: '#1C1B1F',
  },
  cameraOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'space-between',
    padding: 20,
  },
  cameraHeader: {
    alignItems: 'center',
    marginTop: 60,
  },
  cameraTitle: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  cameraSubtitle: {
    color: '#FFFFFF',
    textAlign: 'center',
    opacity: 0.9,
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  cameraFrame: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  cornerTL: {
    position: 'absolute',
    top: '20%',
    left: '20%',
    width: 30,
    height: 30,
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderColor: '#6750A4',
  },
  cornerTR: {
    position: 'absolute',
    top: '20%',
    right: '20%',
    width: 30,
    height: 30,
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderColor: '#6750A4',
  },
  cornerBL: {
    position: 'absolute',
    bottom: '20%',
    left: '20%',
    width: 30,
    height: 30,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderColor: '#6750A4',
  },
  cornerBR: {
    position: 'absolute',
    bottom: '20%',
    right: '20%',
    width: 30,
    height: 30,
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderColor: '#6750A4',
  },
  frameText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: 'rgba(103, 80, 164, 0.8)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  cameraControls: {
    alignItems: 'center',
    gap: 16,
    marginBottom: 40,
  },
  captureButton: {
    minHeight: 64,
    borderRadius: 32,
    minWidth: 200,
    backgroundColor: '#6750A4',
  },
  cancelButton: {
    minHeight: 48,
    borderRadius: 24,
    minWidth: 120,
  },
});
