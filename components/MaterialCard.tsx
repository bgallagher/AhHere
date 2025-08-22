import { useSemanticColor, useSurfaceColor } from '@/hooks/useThemeColor';
import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { ThemedView } from './ThemedView';

export interface MaterialCardProps {
  children: React.ReactNode;
  variant?: 'elevated' | 'filled' | 'outlined';
  surface?: 'surface' | 'surfaceVariant' | 'surfaceContainer' | 'surfaceContainerHigh' | 'surfaceContainerHighest' | 'primary' | 'secondary' | 'tertiary';
  style?: ViewStyle;
  padding?: number;
  margin?: number;
}

export function MaterialCard({ 
  children, 
  variant = 'elevated',
  surface = 'surfaceContainer',
  style,
  padding = 16,
  margin = 8
}: MaterialCardProps) {
  let backgroundColor;
  
  // Check if it's a semantic color or surface variant
  if (['primary', 'secondary', 'tertiary'].includes(surface)) {
    backgroundColor = useSemanticColor(surface as 'primary' | 'secondary' | 'tertiary');
  } else {
    backgroundColor = useSurfaceColor(surface as 'surface' | 'surfaceVariant' | 'surfaceContainer' | 'surfaceContainerHigh' | 'surfaceContainerHighest');
  }
  
  const getVariantStyles = () => {
    switch (variant) {
      case 'elevated':
        return {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 4,
        };
      case 'filled':
        return {};
      case 'outlined':
        return {
          borderWidth: 1,
          borderColor: useSurfaceColor('surfaceVariant'),
        };
      default:
        return {};
    }
  };

  return (
    <ThemedView
      style={[
        styles.card,
        {
          backgroundColor,
          padding,
          margin,
        },
        getVariantStyles(),
        style,
      ]}
    >
      {children}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    minHeight: 80,
  },
});
