import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from './ThemedText';

interface LocationMapProps {
  latitude: number;
  longitude: number;
  title?: string;
}

export function LocationMap({ latitude, longitude, title = 'Location Map' }: LocationMapProps) {
  return (
    <View style={styles.mapPlaceholder}>
      <ThemedText type="titleMedium" style={styles.mapTitle}>
        {title}
      </ThemedText>
      <View style={styles.mapContainer}>
        <ThemedText type="displaySmall" style={styles.mapIcon}>
          🗺️
        </ThemedText>
        <ThemedText type="titleLarge" style={styles.mapText}>
          Interactive Map
        </ThemedText>
        <ThemedText type="bodyLarge" style={styles.coordinates}>
          {latitude.toFixed(6)}, {longitude.toFixed(6)}
        </ThemedText>
        <ThemedText type="bodyMedium" style={styles.mapNote}>
          Map will be displayed here with real-time location data
        </ThemedText>
        <ThemedText type="bodySmall" style={styles.mapSubnote}>
          Tap to open in external map app
        </ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mapPlaceholder: {
    marginTop: 16,
  },
  mapTitle: {
    color: '#1C1B1F',
    marginBottom: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  mapContainer: {
    backgroundColor: '#F3EDF7',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E7E0EC',
    borderStyle: 'dashed',
    minHeight: 300,
    justifyContent: 'center',
  },
  mapIcon: {
    fontSize: 48,
    marginBottom: 16,
  },
  mapText: {
    color: '#6750A4',
    marginBottom: 12,
    fontWeight: '600',
  },
  coordinates: {
    color: '#49454F',
    fontFamily: 'monospace',
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E7E0EC',
  },
  mapNote: {
    color: '#79747E',
    textAlign: 'center',
    marginBottom: 8,
    lineHeight: 20,
  },
  mapSubnote: {
    color: '#6750A4',
    textAlign: 'center',
    fontStyle: 'italic',
    opacity: 0.8,
  },
});
