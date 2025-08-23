import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

import { MaterialButton } from '@/components/MaterialButton';
import { ThemedText } from '@/components/ThemedText';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function SplashScreen() {
  const colorScheme = useColorScheme();
  
  // Animation values
  const fadeAnim = new Animated.Value(0);
  const slideAnim = new Animated.Value(50);
  const scaleAnim = new Animated.Value(0.8);
  
  useEffect(() => {
    // Start animations when component mounts
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleStartReporting = () => {
    // Add a subtle scale animation on button press
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(() => {
      router.push('/report');
    });
  };

  // Define gradient colors based on theme
  const gradientColors = colorScheme === 'dark' 
    ? ['#1C1B1F', '#322F35', '#6750A4'] as const // Dark theme gradient
    : ['#FFFBFE', '#F7F2FA', '#6750A4'] as const; // Light theme gradient

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={gradientColors}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        {/* Main Content */}
        <Animated.View 
          style={[
            styles.content,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            }
          ]}
        >
          {/* App Logo/Icon Area */}
          <Animated.View 
            style={[
              styles.logoContainer,
              {
                transform: [{ scale: scaleAnim }],
              }
            ]}
          >
            <View style={styles.logoCircle}>
              <ThemedText type="displayLarge" style={styles.logoText}>
                AH
              </ThemedText>
            </View>
            <View style={styles.logoShadow} />
          </Animated.View>

          {/* Welcome Message */}
          <View style={styles.welcomeContainer}>
            <ThemedText type="displayMedium" style={styles.welcomeTitle}>
              Welcome to
            </ThemedText>
            <ThemedText type="displayLarge" style={styles.appName}>
              AhHere
            </ThemedText>
            <ThemedText type="bodyLarge" style={styles.tagline}>
              Parking Infringement Reporter
            </ThemedText>
            <ThemedText type="bodyMedium" style={styles.subtitle}>
              Report parking violations with photo evidence and precise location
            </ThemedText>
          </View>
        </Animated.View>

        {/* Bottom Button */}
        <Animated.View 
          style={[
            styles.buttonContainer,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            }
          ]}
        >
          <MaterialButton
            title="Start Reporting"
            onPress={handleStartReporting}
            variant="elevated"
            size="large"
            style={styles.startButton}
          />
          <ThemedText type="bodySmall" style={styles.buttonHint}>
            Tap to begin reporting parking violations
          </ThemedText>
        </Animated.View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 120,
    paddingBottom: 80,
    paddingHorizontal: 32,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 80,
    alignItems: 'center',
    position: 'relative',
  },
  logoCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#6750A4',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 16,
    zIndex: 2,
  },
  logoShadow: {
    position: 'absolute',
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: 'rgba(103, 80, 164, 0.2)',
    top: 8,
    zIndex: 1,
  },
  logoText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 56,
    lineHeight: 56,
  },
  welcomeContainer: {
    alignItems: 'center',
    maxWidth: 320,
  },
  welcomeTitle: {
    color: '#6750A4',
    textAlign: 'center',
    marginBottom: 12,
    opacity: 0.9,
  },
  appName: {
    color: '#6750A4',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  tagline: {
    color: '#625B71',
    textAlign: 'center',
    marginBottom: 12,
    opacity: 0.9,
  },
  subtitle: {
    color: '#79747E',
    textAlign: 'center',
    opacity: 0.7,
    lineHeight: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  startButton: {
    minWidth: 220,
    minHeight: 60,
    borderRadius: 30,
    marginBottom: 16,
  },
  buttonHint: {
    color: '#79747E',
    textAlign: 'center',
    opacity: 0.6,
  },
});
