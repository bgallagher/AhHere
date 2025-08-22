import { useSemanticColor } from '@/hooks/useThemeColor';
import React from 'react';
import { StyleSheet, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import { ThemedText } from './ThemedText';

export interface MaterialButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'filled' | 'outlined' | 'text' | 'elevated';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export function MaterialButton({
  title,
  onPress,
  variant = 'filled',
  size = 'medium',
  disabled = false,
  style,
  textStyle,
}: MaterialButtonProps) {
  const primaryColor = useSemanticColor('primary');
  
  const getVariantStyles = (): ViewStyle => {
    const baseStyles: ViewStyle = {
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
    };

    switch (variant) {
      case 'filled':
        return {
          ...baseStyles,
          backgroundColor: disabled ? '#CAC4D0' : primaryColor,
        };
      case 'outlined':
        return {
          ...baseStyles,
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: disabled ? '#CAC4D0' : primaryColor,
        };
      case 'text':
        return {
          ...baseStyles,
          backgroundColor: 'transparent',
        };
      case 'elevated':
        return {
          ...baseStyles,
          backgroundColor: disabled ? '#CAC4D0' : primaryColor,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 8,
          elevation: 6,
        };
      default:
        return baseStyles;
    }
  };

  const getSizeStyles = (): ViewStyle => {
    switch (size) {
      case 'small':
        return {
          paddingHorizontal: 24,
          paddingVertical: 8,
          minHeight: 32,
        };
      case 'medium':
        return {
          paddingHorizontal: 24,
          paddingVertical: 12,
          minHeight: 40,
        };
      case 'large':
        return {
          paddingHorizontal: 32,
          paddingVertical: 16,
          minHeight: 48,
        };
      default:
        return {
          paddingHorizontal: 24,
          paddingVertical: 12,
          minHeight: 40,
        };
    }
  };

  const getTextType = () => {
    switch (size) {
      case 'small':
        return 'labelMedium';
      case 'medium':
        return 'labelLarge';
      case 'large':
        return 'titleMedium';
      default:
        return 'labelLarge';
    }
  };

  const getTextColor = () => {
    if (disabled) return '#CAC4D0';
    
    switch (variant) {
      case 'filled':
      case 'elevated':
        return '#FFFFFF';
      case 'outlined':
      case 'text':
        return primaryColor;
      default:
        return primaryColor;
    }
  };

  return (
    <TouchableOpacity
      style={[styles.button, getVariantStyles(), getSizeStyles(), style]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <ThemedText
        type={getTextType()}
        style={[
          {
            color: getTextColor(),
            fontWeight: '500',
          },
          textStyle,
        ]}
      >
        {title}
      </ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
