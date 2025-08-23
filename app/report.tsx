import { GoogleMapsImage } from '@/components/GoogleMapsImage';
import { ImagePickerCamera } from '@/components/ImagePickerCamera';
import { MaterialButton } from '@/components/MaterialButton';
import { MaterialCard } from '@/components/MaterialCard';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';
import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { Alert, Image, Linking, ScrollView, StyleSheet, View } from 'react-native';

interface PhotoData {
  uri: string;
  location: Location.LocationObject | null;
  timestamp: Date;
}

export default function ReportScreen() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [showCamera, setShowCamera] = useState(false);
  const [photoData, setPhotoData] = useState<PhotoData | null>(null);
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const colorScheme = useColorScheme();

  useEffect(() => {
    (async () => {
      // Request location permissions
      const { status: locationStatus } = await Location.requestForegroundPermissionsAsync();
      if (locationStatus === 'granted') {
        const currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation);
      }
    })();
  }, []);

  const openCamera = () => {
    setShowCamera(true);
  };

  const handlePhotoTaken = async (photoUri: string) => {
    try {
      const currentLocation = await Location.getCurrentPositionAsync({});
      
      const newPhotoData: PhotoData = {
        uri: photoUri,
        location: currentLocation,
        timestamp: new Date(),
      };

      setPhotoData(newPhotoData);
      setShowCamera(false);
    } catch (error) {
      Alert.alert('Error', 'Failed to capture location. Please try again.');
    }
  };

  const retakePhoto = () => {
    setPhotoData(null);
    setShowCamera(true);
  };

  const sendEmail = () => {
    if (!photoData) return;

    const subject = 'Parking Infringement Report';
    const body = `
Parking Infringement Report

Date: ${photoData.timestamp.toLocaleString()}
Location: ${photoData.location ? `${photoData.location.coords.latitude}, ${photoData.location.coords.longitude}` : 'Location not available'}

Please find attached photo evidence of the parking violation.

This report was submitted via the AhHere app.
    `.trim();

    const mailtoUrl = `mailto:ParkingEnforcement@dublincity.ie?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    Linking.canOpenURL(mailtoUrl).then((supported) => {
      if (supported) {
        Linking.openURL(mailtoUrl);
      } else {
        Alert.alert('Error', 'Email app not available on this device.');
      }
    });
  };

  // Camera view
  if (showCamera) {
    return (
      <ImagePickerCamera
        onPhotoTaken={handlePhotoTaken}
        onCancel={() => setShowCamera(false)}
      />
    );
  }

  return (
    <ThemedView style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <ThemedText type="headlineLarge" style={styles.title}>
            Parking Infringement Report
          </ThemedText>
          <ThemedText type="bodyLarge" style={styles.subtitle}>
            Take a photo and report parking violations to Dublin City Council
          </ThemedText>
        </View>

        {!photoData ? (
          <View style={styles.placeholderContainer}>
            <MaterialCard variant="filled" surface="surfaceContainer" style={styles.placeholderCard}>
              <ThemedText type="titleLarge" style={styles.placeholderTitle}>
                Ready to Report
              </ThemedText>
              <ThemedText type="bodyMedium" style={styles.placeholderText}>
                Tap the button below to take a photo of the parking violation. 
                The app will automatically capture your location and prepare 
                an email to Dublin City Council Parking Enforcement.
              </ThemedText>
              <ThemedText type="bodySmall" style={styles.placeholderNote}>
                Email will be sent to: ParkingEnforcement@dublincity.ie
              </ThemedText>
            </MaterialCard>
          </View>
        ) : (
          <View style={styles.photoContainer}>
            <MaterialCard variant="elevated" surface="surfaceContainerHigh" style={styles.photoCard}>
              <ThemedText type="titleLarge" style={styles.photoTitle}>
                Photo Captured
              </ThemedText>
              
              {/* Show the actual captured photo */}
              <Image source={{ uri: photoData.uri }} style={styles.photo} />
              
              {photoData.location && (
                <View style={styles.locationContainer}>
                  <ThemedText type="titleMedium" style={styles.locationTitle}>
                    Location Details
                  </ThemedText>
                  <ThemedText type="bodyMedium" style={styles.locationText}>
                    Latitude: {photoData.location.coords.latitude.toFixed(6)}
                  </ThemedText>
                  <ThemedText type="bodyMedium" style={styles.locationText}>
                    Longitude: {photoData.location.coords.longitude.toFixed(6)}
                  </ThemedText>
                  <ThemedText type="bodySmall" style={styles.locationNote}>
                    Timestamp: {photoData.timestamp.toLocaleString()}
                  </ThemedText>
                  
                  <GoogleMapsImage 
                    latitude={photoData.location.coords.latitude}
                    longitude={photoData.location.coords.longitude}
                    title="Violation Location"
                  />
                </View>
              )}
            </MaterialCard>
          </View>
        )}
      </ScrollView>

      {/* Extended FAB - Fixed at bottom */}
      <View style={styles.fabContainer}>
        {!photoData ? (
          <MaterialButton
            title="📸 Open Camera"
            onPress={openCamera}
            variant="elevated"
            size="large"
            style={styles.fabButton}
          />
        ) : (
          <View style={styles.actionButtons}>
            <MaterialButton
              title="📷 Retake Photo"
              onPress={retakePhoto}
              variant="outlined"
              size="medium"
              style={styles.actionButton}
            />
            <MaterialButton
              title="📧 Send Email"
              onPress={sendEmail}
              variant="elevated"
              size="large"
              style={styles.actionButton}
            />
          </View>
        )}
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 120, // Extra space for FAB
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
    marginTop: 60,
  },
  title: {
    color: '#6750A4',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    color: '#49454F',
    textAlign: 'center',
    maxWidth: 320,
    lineHeight: 22,
  },
  placeholderContainer: {
    flex: 1,
    justifyContent: 'center',
    minHeight: 300,
  },
  placeholderCard: {
    padding: 24,
    minHeight: 200,
  },
  placeholderTitle: {
    color: '#6750A4',
    marginBottom: 16,
    textAlign: 'center',
  },
  placeholderText: {
    color: '#49454F',
    lineHeight: 22,
    marginBottom: 16,
    textAlign: 'center',
  },
  placeholderNote: {
    color: '#79747E',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  photoContainer: {
    flex: 1,
  },
  photoCard: {
    padding: 16,
  },
  photoTitle: {
    color: '#1C1B1F',
    marginBottom: 16,
    textAlign: 'center',
  },
  photo: {
    width: '100%',
    height: 300,
    borderRadius: 12,
    marginBottom: 16,
    resizeMode: 'cover',
  },
  locationContainer: {
    backgroundColor: '#F3EDF7',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  locationTitle: {
    color: '#1C1B1F',
    marginBottom: 12,
    fontWeight: '600',
  },
  locationText: {
    color: '#49454F',
    marginBottom: 4,
    fontFamily: 'monospace',
  },
  locationNote: {
    color: '#79747E',
    marginTop: 8,
    fontStyle: 'italic',
    marginBottom: 16,
  },
  fabContainer: {
    position: 'absolute',
    bottom: 32,
    left: 16,
    right: 16,
    backgroundColor: 'transparent',
  },
  fabButton: {
    minHeight: 64,
    borderRadius: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 12,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'space-between',
  },
  actionButton: {
    flex: 1,
    minHeight: 56,
    borderRadius: 28,
  },
});
