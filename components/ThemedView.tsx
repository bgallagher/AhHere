import { View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  variant?: 'surface' | 'surfaceVariant' | 'surfaceContainer' | 'surfaceContainerHigh' | 'surfaceContainerHighest' | 'primary' | 'secondary' | 'tertiary';
  elevated?: boolean;
};

export function ThemedView({ 
  style, 
  lightColor, 
  darkColor, 
  variant = 'surface',
  elevated = false,
  ...otherProps 
}: ThemedViewProps) {
  let backgroundColor;
  
  if (lightColor && darkColor) {
    backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  } else {
    backgroundColor = useThemeColor({}, variant);
  }

  const shadowStyle = elevated ? {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  } : {};

  return (
    <View 
      style={[
        { backgroundColor }, 
        shadowStyle,
        style
      ]} 
      {...otherProps} 
    />
  );
}
