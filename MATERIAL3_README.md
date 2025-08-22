# Material 3 Expressive Design Implementation

This app has been updated to use **Material 3 Expressive Design**, a design system that creates emotional impact through vibrant colors, elevated surfaces, and expressive typography.

## 🎨 Design Principles

### Expressive Colors
- **Primary**: Vibrant purple (#6750A4) that creates emotional impact
- **Secondary**: Expressive secondary tones (#625B71) for depth
- **Tertiary**: Warm tertiary colors (#7D5260) for accent
- **Surface Variants**: Multiple surface levels for visual hierarchy
- **Semantic Colors**: Error, success, and interactive states

### Typography Scale
- **Display**: Large, expressive text for hero sections (57px, 45px, 36px)
- **Headline**: Section headers with proper hierarchy (32px, 28px, 24px)
- **Title**: Card headers and important text (22px, 16px, 14px)
- **Body**: Main content with optimal readability (16px, 14px, 12px)
- **Label**: Buttons and small text (14px, 12px, 11px)

### Surface System
- **Surface**: Base background (#FFFBFE light, #1C1B1F dark)
- **Surface Variant**: Subtle contrast (#E7E0EC light, #49454F dark)
- **Surface Container**: Elevated content (#F3EDF7 light, #211F26 dark)
- **Surface Container High**: Higher elevation (#F7F2FA light, #2B2930 dark)
- **Surface Container Highest**: Maximum elevation (#FEF7FF light, #322F35 dark)

## 🧩 Components

### MaterialCard
A flexible card component with multiple variants:
```tsx
<MaterialCard 
  variant="elevated" 
  surface="surfaceContainerHigh"
  padding={16}
  margin={8}
>
  <ThemedText type="titleLarge">Card Title</ThemedText>
  <ThemedText type="bodyMedium">Card content...</ThemedText>
</MaterialCard>
```

**Variants:**
- `elevated`: Adds shadow and elevation
- `filled`: Solid background
- `outlined`: Border with transparent background

**Surfaces:**
- `surface`, `surfaceVariant`, `surfaceContainer`, `surfaceContainerHigh`, `surfaceContainerHighest`
- `primary`, `secondary`, `tertiary` (semantic colors)

### MaterialButton
A comprehensive button component with Material 3 styling:
```tsx
<MaterialButton
  title="Get Started"
  onPress={() => {}}
  variant="elevated"
  size="large"
  disabled={false}
/>
```

**Variants:**
- `filled`: Solid background with white text
- `outlined`: Transparent with colored border
- `text`: Text-only button
- `elevated`: Filled with shadow

**Sizes:**
- `small`: 32px height
- `medium`: 40px height  
- `large`: 48px height

### ThemedText
Updated typography component with Material 3 scale:
```tsx
<ThemedText type="displaySmall">Hero Title</ThemedText>
<ThemedText type="headlineMedium">Section Header</ThemedText>
<ThemedText type="titleLarge">Card Title</ThemedText>
<ThemedText type="bodyMedium">Main content...</ThemedText>
<ThemedText type="labelLarge">Button Text</ThemedText>
```

### ThemedView
Enhanced view component with surface variants:
```tsx
<ThemedView 
  variant="surfaceContainer" 
  elevated={true}
>
  Content with elevation
</ThemedView>
```

## 🎯 Usage Examples

### Hero Section
```tsx
<ThemedView style={styles.heroSection}>
  <ThemedText type="displaySmall" style={styles.heroTitle}>
    Welcome to Your App!
  </ThemedText>
  <ThemedText type="bodyLarge" style={styles.heroSubtitle}>
    Experience Material 3 expressive design
  </ThemedText>
</ThemedView>
```

### Feature Cards
```tsx
<MaterialCard variant="elevated" surface="surfaceContainerHigh">
  <ThemedText type="titleLarge">Feature Title</ThemedText>
  <ThemedText type="bodyMedium">Feature description...</ThemedText>
</MaterialCard>
```

### Action Buttons
```tsx
<ThemedView style={styles.buttonContainer}>
  <MaterialButton
    title="Primary Action"
    onPress={() => {}}
    variant="elevated"
    size="large"
  />
  <MaterialButton
    title="Secondary Action"
    onPress={() => {}}
    variant="outlined"
    size="medium"
  />
</ThemedView>
```

## 🌓 Theme Support

### Light Theme
- Clean, bright surfaces with subtle shadows
- High contrast text for readability
- Vibrant primary colors for impact

### Dark Theme
- Deep, rich backgrounds for immersion
- Proper contrast ratios for accessibility
- Light primary colors for visibility

## 🔧 Customization

### Adding New Colors
Extend the `Colors` object in `constants/Colors.ts`:
```tsx
export const Colors = {
  light: {
    // ... existing colors
    customColor: '#FF6B6B',
  },
  dark: {
    // ... existing colors
    customColor: '#FF8E8E',
  },
};
```

### Creating New Components
Follow the Material 3 patterns:
```tsx
export function CustomComponent({ variant = 'default' }) {
  const backgroundColor = useSurfaceColor('surfaceContainer');
  const primaryColor = useSemanticColor('primary');
  
  // Component implementation
}
```

### Typography Scale
Add new text types to `ThemedText`:
```tsx
export type ThemedTextProps = {
  type?: 'customType' | /* ... existing types */;
};

// Add corresponding styles
const styles = StyleSheet.create({
  customType: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: 0.15,
  },
});
```

## 📱 Platform Considerations

### iOS
- Uses system blur effects for tab bar
- Proper shadow implementation
- Native haptic feedback

### Android
- Material elevation system
- Ripple effects on touch
- Platform-specific shadows

### Web
- CSS shadows and transitions
- Hover states for interactive elements
- Responsive design considerations

## 🎨 Design Tokens

### Spacing
- **8px**: Small gaps, margins
- **16px**: Standard padding, margins
- **24px**: Section spacing
- **32px**: Large section spacing

### Border Radius
- **16px**: Card corners
- **20px**: Button corners
- **24px**: Large component corners

### Shadows
- **Elevation 1**: Subtle surface separation
- **Elevation 4**: Card elevation
- **Elevation 6**: Button elevation

## 🚀 Getting Started

1. **Install Dependencies**: Already included in package.json
2. **Use Components**: Import and use MaterialCard, MaterialButton, etc.
3. **Apply Typography**: Use ThemedText with appropriate type props
4. **Surface Variants**: Choose appropriate surface levels for hierarchy
5. **Color System**: Leverage semantic colors for consistency

## 📚 Resources

- [Material 3 Design Guidelines](https://m3.material.io/)
- [Material 3 Expressive Design](https://m3.material.io/foundations/design-tokens/overview)
- [React Native Paper](https://callstack.github.io/react-native-paper/)
- [Expo Vector Icons](https://docs.expo.dev/guides/icons/)

---

*This implementation follows Material 3 expressive design principles to create an app that not only looks modern but also creates emotional impact through thoughtful use of color, typography, and elevation.*
