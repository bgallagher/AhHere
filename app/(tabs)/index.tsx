import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import { MaterialButton } from '@/components/MaterialButton';
import { MaterialCard } from '@/components/MaterialCard';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#6750A4', dark: '#D0BCFF' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.container}>
        {/* Hero Section */}
        <ThemedView style={styles.heroSection}>
          <ThemedText type="displaySmall" style={styles.heroTitle}>
            Welcome Brian!
          </ThemedText>
          <HelloWave />
          <ThemedText type="bodyLarge" style={styles.heroSubtitle}>
            Your Material 3 expressive app is ready to inspire
          </ThemedText>
        </ThemedView>

        {/* Action Buttons */}
        <ThemedView style={styles.buttonContainer}>
          <MaterialButton
            title="Get Started"
            onPress={() => {}}
            variant="elevated"
            size="large"
            style={styles.primaryButton}
          />
          <MaterialButton
            title="Learn More"
            onPress={() => {}}
            variant="outlined"
            size="medium"
            style={styles.secondaryButton}
          />
        </ThemedView>

        {/* Feature Cards */}
        <ThemedView style={styles.cardsContainer}>
          <MaterialCard variant="elevated" surface="surfaceContainerHigh" style={styles.featureCard}>
            <ThemedText type="titleLarge" style={styles.cardTitle}>
              Step 1: Try it
            </ThemedText>
            <ThemedText type="bodyMedium" style={styles.cardContent}>
              Edit <ThemedText type="titleMedium">app/(tabs)/index.tsx</ThemedText> to see changes.
              Press{' '}
              <ThemedText type="titleMedium">
                {Platform.select({
                  ios: 'cmd + d',
                  android: 'cmd + m',
                  web: 'F12',
                })}
              </ThemedText>{' '}
              to open developer tools.
            </ThemedText>
          </MaterialCard>

          <MaterialCard variant="elevated" surface="surfaceContainer" style={styles.featureCard}>
            <ThemedText type="titleLarge" style={styles.cardTitle}>
              Step 2: Explore
            </ThemedText>
            <ThemedText type="bodyMedium" style={styles.cardContent}>
              Tap the Explore tab to learn more about what's included in this starter app.
            </ThemedText>
          </MaterialCard>

          <MaterialCard variant="elevated" surface="surfaceContainerHigh" style={styles.featureCard}>
            <ThemedText type="titleLarge" style={styles.cardTitle}>
              Step 3: Get a fresh start
            </ThemedText>
            <ThemedText type="bodyMedium" style={styles.cardContent}>
              When you're ready, run{' '}
              <ThemedText type="titleMedium">npm run reset-project</ThemedText> to get a fresh{' '}
              <ThemedText type="titleMedium">app</ThemedText> directory. This will move the current{' '}
              <ThemedText type="titleMedium">app</ThemedText> to{' '}
              <ThemedText type="titleMedium">app-example</ThemedText>.
            </ThemedText>
          </MaterialCard>
        </ThemedView>

        {/* Material 3 Info */}
        <MaterialCard variant="filled" surface="primary" style={styles.materialInfoCard}>
          <ThemedText type="titleMedium" style={styles.materialInfoTitle}>
            Material 3 Expressive
          </ThemedText>
          <ThemedText type="bodyMedium" style={styles.materialInfoContent}>
            This app now uses Material 3 expressive design with vibrant colors, 
            elevated surfaces, and expressive typography that creates emotional impact.
          </ThemedText>
        </MaterialCard>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heroSection: {
    alignItems: 'center',
    marginBottom: 32,
    gap: 16,
  },
  heroTitle: {
    textAlign: 'center',
    color: '#6750A4', // Primary color for light theme
  },
  heroSubtitle: {
    textAlign: 'center',
    color: '#49454F', // Secondary text color
    maxWidth: 300,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginBottom: 32,
    flexWrap: 'wrap',
  },
  primaryButton: {
    minWidth: 140,
  },
  secondaryButton: {
    minWidth: 140,
  },
  cardsContainer: {
    gap: 16,
    marginBottom: 24,
  },
  featureCard: {
    minHeight: 120,
  },
  cardTitle: {
    marginBottom: 8,
    color: '#1C1B1F', // Primary text color
  },
  cardContent: {
    color: '#49454F', // Secondary text color
    lineHeight: 22,
  },
  materialInfoCard: {
    minHeight: 100,
  },
  materialInfoTitle: {
    marginBottom: 8,
    color: '#FFFFFF',
  },
  materialInfoContent: {
    color: '#FFFFFF',
    opacity: 0.9,
    lineHeight: 22,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
