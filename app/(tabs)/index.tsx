import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

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
            Welcome to AhHere!
          </ThemedText>
          <HelloWave />
          <ThemedText type="bodyLarge" style={styles.heroSubtitle}>
            Your reporting journey begins here
          </ThemedText>
          <ThemedText type="bodyMedium" style={styles.heroDescription}>
            Ready to start documenting and reporting? Let's get you set up with everything you need.
          </ThemedText>
        </ThemedView>

        {/* Action Buttons */}
        <ThemedView style={styles.buttonContainer}>
          <MaterialButton
            title="Create Report"
            onPress={() => {}}
            variant="elevated"
            size="large"
            style={styles.primaryButton}
          />
          <MaterialButton
            title="View Templates"
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
              Quick Start Guide
            </ThemedText>
            <ThemedText type="bodyMedium" style={styles.cardContent}>
              Learn how to create your first report with our step-by-step guide. 
              Perfect for beginners and experienced users alike.
            </ThemedText>
          </MaterialCard>

          <MaterialCard variant="elevated" surface="surfaceContainer" style={styles.featureCard}>
            <ThemedText type="titleLarge" style={styles.cardTitle}>
              Report Templates
            </ThemedText>
            <ThemedText type="bodyMedium" style={styles.cardContent}>
              Choose from a variety of pre-built templates to speed up your reporting process.
              Customize them to fit your specific needs.
            </ThemedText>
          </MaterialCard>

          <MaterialCard variant="elevated" surface="surfaceContainerHigh" style={styles.featureCard}>
            <ThemedText type="titleLarge" style={styles.cardTitle}>
              Recent Reports
            </ThemedText>
            <ThemedText type="bodyMedium" style={styles.cardContent}>
              Access your recently created reports and continue where you left off.
              All your work is automatically saved and organized.
            </ThemedText>
          </MaterialCard>
        </ThemedView>

        {/* Material 3 Info */}
        <MaterialCard variant="filled" surface="primary" style={styles.materialInfoCard}>
          <ThemedText type="titleMedium" style={styles.materialInfoTitle}>
            Material 3 Expressive Design
          </ThemedText>
          <ThemedText type="bodyMedium" style={styles.materialInfoContent}>
            This app uses Material 3 expressive design with vibrant colors, 
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
  heroDescription: {
    textAlign: 'center',
    color: '#79747E', // Tertiary text color
    maxWidth: 320,
    lineHeight: 22,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginBottom: 32,
    flexWrap: 'wrap',
  },
  primaryButton: {
    minWidth: 160,
  },
  secondaryButton: {
    minWidth: 160,
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
