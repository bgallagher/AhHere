import { getFallbackMapUrl, getMapUrl, hasGoogleMapsApiKey } from '@/config/maps';
import React, { useState } from 'react';
import { Alert, Image, StyleSheet, View } from 'react-native';
import { ThemedText } from './ThemedText';

interface GoogleMapsImageProps {
  latitude: number;
  longitude: number;
  title?: string;
}

export function GoogleMapsImage({ 
  latitude, 
  longitude, 
  title = 'Violation Location'
}: GoogleMapsImageProps) {
  const [useFallback, setUseFallback] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const hasApiKey = hasGoogleMapsApiKey();
  const primaryMapUrl = getMapUrl(latitude, longitude);
  const fallbackMapUrl = getFallbackMapUrl(latitude, longitude);
  
  // Use fallback if Google Maps fails or if we've had an error
  const mapUrl = (hasApiKey && !useFallback) ? primaryMapUrl : fallbackMapUrl;
  
  // Debug logging
  console.log('🗺️ GoogleMapsImage render:', {
    hasApiKey,
    useFallback,
    imageError,
    mapUrl: mapUrl.substring(0, 100) + '...',
    coordinates: { latitude, longitude }
  });

  const handleImageError = (error: any) => {
    console.log('❌ Image load error:', error.nativeEvent);
    setImageError(true);
    
    // If Google Maps failed and we haven't tried fallback yet, switch to it
    if (hasApiKey && !useFallback) {
      console.log('🔄 Switching to fallback due to Google Maps error');
      setUseFallback(true);
    }
  };

  const handleImageLoad = () => {
    console.log('✅ Image loaded successfully');
    setImageError(false);
  };

  const handleMapPress = () => {
    if (hasApiKey && !useFallback) {
      // Open in Google Maps app or browser
      const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
      // You could use Linking.openURL(url) here
      Alert.alert('Location', `Coordinates: ${latitude.toFixed(6)}, ${longitude.toFixed(6)}\n\nTap to open in Google Maps`);
    } else {
      // Open in OpenStreetMap
      const url = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}&zoom=18`;
      Alert.alert('Location', `Coordinates: ${latitude.toFixed(6)}, ${longitude.toFixed(6)}\n\nTap to open in OpenStreetMap`);
    }
  };

  return (
    <View style={styles.mapContainer}>
      <ThemedText type="titleMedium" style={styles.mapTitle}>
        {title}
      </ThemedText>
      
      <View style={styles.mapWrapper}>
        <Image 
          source={{ uri: mapUrl }} 
          style={styles.mapImage}
          resizeMode="cover"
          onError={handleImageError}
          onLoad={handleImageLoad}
        />
        
        {/* Location pin overlay */}
        <View style={styles.locationPin}>
          <View style={styles.pinDot} />
          <View style={styles.pinTail} />
        </View>
        
        {/* Zoom level indicator */}
        <View style={styles.zoomIndicator}>
          <ThemedText type="bodySmall" style={styles.zoomText}>
            Street Level View
          </ThemedText>
        </View>

        {/* Map grid overlay for better map appearance */}
        <View style={styles.mapGrid}>
          <View style={[styles.gridLine, { top: '25%', left: 0, right: 0, height: 1 }]} />
          <View style={[styles.gridLine, { top: '50%', left: 0, right: 0, height: 1 }]} />
          <View style={[styles.gridLine, { top: '75%', left: 0, right: 0, height: 1 }]} />
          <View style={[styles.gridLine, { left: '25%', top: 0, bottom: 0, width: 1 }]} />
          <View style={[styles.gridLine, { left: '50%', top: 0, bottom: 0, width: 1 }]} />
          <View style={[styles.gridLine, { left: '75%', top: 0, bottom: 0, width: 1 }]} />
        </View>

        {/* Compass indicator */}
        <View style={styles.compass}>
          <ThemedText type="bodySmall" style={styles.compassText}>
            N
          </ThemedText>
        </View>

        {/* Status indicators */}
        <View style={styles.statusIndicator}>
          <ThemedText type="bodySmall" style={styles.statusText}>
            {hasApiKey ? '✅ API Key Loaded' : '❌ No API Key'}
          </ThemedText>
        </View>
        
        {/* Map source indicator */}
        <View style={[styles.statusIndicator, { top: 60, left: 16 }]}>
          <ThemedText type="bodySmall" style={styles.statusText}>
            {useFallback ? '🗺️ Fallback Map' : '🌍 Google Maps'}
          </ThemedText>
        </View>
        
        {/* Error indicator */}
        {imageError && (
          <View style={[styles.statusIndicator, { top: 100, left: 16, backgroundColor: 'rgba(255, 0, 0, 0.8)' }]}>
            <ThemedText type="bodySmall" style={[styles.statusText, { color: '#FFFFFF' }]}>
              ⚠️ Map Load Error
            </ThemedText>
          </View>
        )}
      </View>
      
      {/* Enhanced coordinates display */}
      <View style={styles.coordinatesContainer}>
        <View style={styles.coordinateRow}>
          <ThemedText type="bodyMedium" style={styles.coordinateLabel}>
            📍 Latitude:
          </ThemedText>
          <ThemedText type="bodyMedium" style={styles.coordinateValue}>
            {latitude.toFixed(6)}
          </ThemedText>
        </View>
        <View style={styles.coordinateRow}>
          <ThemedText type="bodyMedium" style={styles.coordinateLabel}>
            📍 Longitude:
          </ThemedText>
          <ThemedText type="bodyMedium" style={styles.coordinateValue}>
            {longitude.toFixed(6)}
          </ThemedText>
        </View>
        <ThemedText type="bodySmall" style={styles.coordinatesNote}>
          {useFallback 
            ? 'Using fallback map (Google Maps API needs to be enabled)' 
            : hasApiKey 
              ? 'Tap map to open in Google Maps' 
              : 'Add Google Maps API key for real satellite imagery'
          }
        </ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mapContainer: {
    marginTop: 16,
  },
  mapTitle: {
    color: '#1C1B1F',
    marginBottom: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  mapWrapper: {
    position: 'relative',
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#F3EDF7',
    borderWidth: 2,
    borderColor: '#E7E0EC',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  mapImage: {
    width: '100%',
    height: 300,
    borderRadius: 14,
  },
  locationPin: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -12 }, { translateY: -24 }],
  },
  pinDot: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#EA4335',
    borderWidth: 3,
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  pinTail: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderTopWidth: 16,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#EA4335',
    marginTop: -2,
    alignSelf: 'center',
  },
  zoomIndicator: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  zoomText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
  },
  mapGrid: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.1,
  },
  gridLine: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    opacity: 0.3,
  },
  compass: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  compassText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  coordinatesContainer: {
    backgroundColor: '#F3EDF7',
    padding: 16,
    borderRadius: 12,
    marginTop: 16,
  },
  coordinateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  coordinateLabel: {
    color: '#49454F',
    fontSize: 16,
    fontWeight: '500',
  },
  coordinateValue: {
    color: '#1C1B1F',
    fontFamily: 'monospace',
    fontSize: 16,
    fontWeight: '600',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#E7E0EC',
  },
  coordinatesNote: {
    color: '#79747E',
    fontSize: 12,
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#E7E0EC',
  },
  statusIndicator: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E7E0EC',
  },
  statusText: {
    color: '#EA4335',
    fontSize: 12,
    fontWeight: '600',
  },
});
