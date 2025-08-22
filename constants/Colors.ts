/**
 * Material 3 Expressive Design Color Scheme
 * Using vibrant, expressive colors that create emotional impact
 * Based on Material 3 expressive color system
 */

// Material 3 Expressive Primary Colors
const primaryLight = '#6750A4'; // Expressive purple
const primaryDark = '#D0BCFF'; // Light expressive purple

// Material 3 Expressive Secondary Colors
const secondaryLight = '#625B71'; // Expressive secondary
const secondaryDark = '#CCC2DC'; // Light expressive secondary

// Material 3 Expressive Tertiary Colors
const tertiaryLight = '#7D5260'; // Expressive tertiary
const tertiaryDark = '#EFB8C8'; // Light expressive tertiary

// Material 3 Expressive Surface Colors
const surfaceLight = '#FFFBFE'; // Light expressive surface
const surfaceDark = '#1C1B1F'; // Dark expressive surface

// Material 3 Expressive Background Colors
const backgroundLight = '#FFFBFE'; // Light expressive background
const backgroundDark = '#1C1B1F'; // Dark expressive background

// Material 3 Expressive Error Colors
const errorLight = '#BA1A1A'; // Expressive error
const errorDark = '#FFB4AB'; // Light expressive error

// Material 3 Expressive Success Colors
const successLight = '#006C51'; // Expressive success
const successDark = '#4CC38A'; // Light expressive success

export const Colors = {
  light: {
    // Core colors
    primary: primaryLight,
    secondary: secondaryLight,
    tertiary: tertiaryLight,
    surface: surfaceLight,
    background: backgroundLight,
    error: errorLight,
    success: successLight,
    
    // Text colors
    text: '#1C1B1F',
    textSecondary: '#49454F',
    textTertiary: '#79747E',
    textDisabled: '#CAC4D0',
    
    // Icon colors
    icon: '#49454F',
    iconPrimary: primaryLight,
    iconSecondary: secondaryLight,
    
    // Tab colors
    tabIconDefault: '#79747E',
    tabIconSelected: primaryLight,
    
    // Interactive colors
    tint: primaryLight,
    link: primaryLight,
    
    // Surface variants
    surfaceVariant: '#E7E0EC',
    surfaceContainer: '#F3EDF7',
    surfaceContainerHigh: '#F7F2FA',
    surfaceContainerHighest: '#FEF7FF',
    
    // Outline colors
    outline: '#79747E',
    outlineVariant: '#CAC4D0',
  },
  dark: {
    // Core colors
    primary: primaryDark,
    secondary: secondaryDark,
    tertiary: tertiaryDark,
    surface: surfaceDark,
    background: backgroundDark,
    error: errorDark,
    success: successDark,
    
    // Text colors
    text: '#E6E1E5',
    textSecondary: '#CAC4D0',
    textTertiary: '#938F99',
    textDisabled: '#49454F',
    
    // Icon colors
    icon: '#CAC4D0',
    iconPrimary: primaryDark,
    iconSecondary: secondaryDark,
    
    // Tab colors
    tabIconDefault: '#938F99',
    tabIconSelected: primaryDark,
    
    // Interactive colors
    tint: primaryDark,
    link: primaryDark,
    
    // Surface variants
    surfaceVariant: '#49454F',
    surfaceContainer: '#211F26',
    surfaceContainerHigh: '#2B2930',
    surfaceContainerHighest: '#322F35',
    
    // Outline colors
    outline: '#938F99',
    outlineVariant: '#49454F',
  },
};
