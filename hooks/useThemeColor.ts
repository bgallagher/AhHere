/**
 * Material 3 Expressive Design Color Hook
 * Provides access to Material 3 expressive color system
 */

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName?: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else if (colorName) {
    return Colors[theme][colorName];
  } else {
    // Return background color as default
    return Colors[theme].background;
  }
}

// Helper function for getting Material 3 surface variants
export function useSurfaceColor(variant: 'surface' | 'surfaceVariant' | 'surfaceContainer' | 'surfaceContainerHigh' | 'surfaceContainerHighest' = 'surface') {
  const theme = useColorScheme() ?? 'light';
  return Colors[theme][variant];
}

// Helper function for getting Material 3 semantic colors
export function useSemanticColor(color: 'primary' | 'secondary' | 'tertiary' | 'error' | 'success') {
  const theme = useColorScheme() ?? 'light';
  return Colors[theme][color];
}

