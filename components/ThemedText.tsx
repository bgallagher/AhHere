import { StyleSheet, Text, type TextProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'displayLarge' | 'displayMedium' | 'displaySmall' | 'headlineLarge' | 'headlineMedium' | 'headlineSmall' | 'titleLarge' | 'titleMedium' | 'titleSmall' | 'bodyLarge' | 'bodyMedium' | 'bodySmall' | 'labelLarge' | 'labelMedium' | 'labelSmall' | 'link';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'bodyMedium',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        type === 'displayLarge' ? styles.displayLarge : undefined,
        type === 'displayMedium' ? styles.displayMedium : undefined,
        type === 'displaySmall' ? styles.displaySmall : undefined,
        type === 'headlineLarge' ? styles.headlineLarge : undefined,
        type === 'headlineMedium' ? styles.headlineMedium : undefined,
        type === 'headlineSmall' ? styles.headlineSmall : undefined,
        type === 'titleLarge' ? styles.titleLarge : undefined,
        type === 'titleMedium' ? styles.titleMedium : undefined,
        type === 'titleSmall' ? styles.titleSmall : undefined,
        type === 'bodyLarge' ? styles.bodyLarge : undefined,
        type === 'bodyMedium' ? styles.bodyMedium : undefined,
        type === 'bodySmall' ? styles.bodySmall : undefined,
        type === 'labelLarge' ? styles.labelLarge : undefined,
        type === 'labelMedium' ? styles.labelMedium : undefined,
        type === 'labelSmall' ? styles.labelSmall : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  // Display styles - Large, expressive text for hero sections
  displayLarge: {
    fontSize: 57,
    fontWeight: '400',
    lineHeight: 64,
    letterSpacing: -0.25,
  },
  displayMedium: {
    fontSize: 45,
    fontWeight: '400',
    lineHeight: 52,
    letterSpacing: 0,
  },
  displaySmall: {
    fontSize: 36,
    fontWeight: '400',
    lineHeight: 44,
    letterSpacing: 0,
  },
  
  // Headline styles - For section headers
  headlineLarge: {
    fontSize: 32,
    fontWeight: '400',
    lineHeight: 40,
    letterSpacing: 0,
  },
  headlineMedium: {
    fontSize: 28,
    fontWeight: '400',
    lineHeight: 36,
    letterSpacing: 0,
  },
  headlineSmall: {
    fontSize: 24,
    fontWeight: '400',
    lineHeight: 32,
    letterSpacing: 0,
  },
  
  // Title styles - For card headers and important text
  titleLarge: {
    fontSize: 22,
    fontWeight: '400',
    lineHeight: 28,
    letterSpacing: 0,
  },
  titleMedium: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  titleSmall: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    letterSpacing: 0.1,
  },
  
  // Body styles - For main content
  bodyLarge: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  bodyMedium: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0.25,
  },
  bodySmall: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    letterSpacing: 0.4,
  },
  
  // Label styles - For buttons and small text
  labelLarge: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    letterSpacing: 0.1,
  },
  labelMedium: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
    letterSpacing: 0.5,
  },
  labelSmall: {
    fontSize: 11,
    fontWeight: '500',
    lineHeight: 16,
    letterSpacing: 0.5,
  },
  
  // Link style
  link: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    textDecorationLine: 'underline',
  },
});
