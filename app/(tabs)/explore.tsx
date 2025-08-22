import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#7D5260', dark: '#EFB8C8' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#FFFFFF"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="headlineLarge">Explore</ThemedText>
        </ThemedView>
        <ThemedText type="bodyLarge" style={styles.description}>
          This app includes example code to help you get started with Material 3 expressive design.
        </ThemedText>
        
        <Collapsible title="File-based routing">
          <ThemedText type="bodyMedium">
            This app has two screens:{' '}
            <ThemedText type="titleMedium">app/(tabs)/index.tsx</ThemedText> and{' '}
            <ThemedText type="titleMedium">app/(tabs)/explore.tsx</ThemedText>
          </ThemedText>
          <ThemedText type="bodyMedium">
            The layout file in <ThemedText type="titleMedium">app/(tabs)/_layout.tsx</ThemedText>{' '}
            sets up the tab navigator.
          </ThemedText>
          <ExternalLink href="https://docs.expo.dev/router/introduction">
            <ThemedText type="link">Learn more</ThemedText>
          </ExternalLink>
        </Collapsible>
        
        <Collapsible title="Android, iOS, and web support">
          <ThemedText type="bodyMedium">
            You can open this project on Android, iOS, and the web. To open the web version, press{' '}
            <ThemedText type="titleMedium">w</ThemedText> in the terminal running this project.
          </ThemedText>
        </Collapsible>
        
        <Collapsible title="Images">
          <ThemedText type="bodyMedium">
            For static images, you can use the <ThemedText type="titleMedium">@2x</ThemedText> and{' '}
            <ThemedText type="titleMedium">@3x</ThemedText> suffixes to provide files for
            different screen densities
          </ThemedText>
          <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
          <ExternalLink href="https://reactnative.dev/docs/images">
            <ThemedText type="link">Learn more</ThemedText>
          </ExternalLink>
        </Collapsible>
        
        <Collapsible title="Custom fonts">
          <ThemedText type="bodyMedium">
            Open <ThemedText type="titleMedium">app/_layout.tsx</ThemedText> to see how to load{' '}
            <ThemedText style={{ fontFamily: 'SpaceMono' }}>
              custom fonts such as this one.
            </ThemedText>
          </ThemedText>
          <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
            <ThemedText type="link">Learn more</ThemedText>
          </ExternalLink>
        </Collapsible>
        
        <Collapsible title="Light and dark mode components">
          <ThemedText type="bodyMedium">
            This template has light and dark mode support. The{' '}
            <ThemedText type="titleMedium">useColorScheme()</ThemedText> hook lets you inspect
            what the user&apos;s current color scheme is, and so you can adjust UI colors accordingly.
          </ThemedText>
          <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
            <ThemedText type="link">Learn more</ThemedText>
          </ExternalLink>
        </Collapsible>
        
        <Collapsible title="Animations">
          <ThemedText type="bodyMedium">
            This template includes an example of an animated component. The{' '}
            <ThemedText type="titleMedium">components/HelloWave.tsx</ThemedText> component uses
            the powerful <ThemedText type="titleMedium">react-native-reanimated</ThemedText>{' '}
            library to create a waving hand animation.
          </ThemedText>
          {Platform.select({
            ios: (
              <ThemedText type="bodyMedium">
                The <ThemedText type="titleMedium">components/ParallaxScrollView.tsx</ThemedText>{' '}
                component provides a parallax effect for the header image.
              </ThemedText>
            ),
          })}
        </Collapsible>
        
        <Collapsible title="Material 3 Expressive Design">
          <ThemedText type="bodyMedium">
            This app now features Material 3 expressive design with vibrant colors, 
            elevated surfaces, and expressive typography that creates emotional impact.
          </ThemedText>
          <ThemedText type="bodyMedium">
            Key features include:
          </ThemedText>
          <ThemedText type="bodyMedium" style={styles.featureList}>
            • Material 3 expressive color system{'\n'}
            • Elevated surface variants{'\n'}
            • Expressive typography scale{'\n'}
            • Semantic color support{'\n'}
            • Adaptive light/dark themes
          </ThemedText>
        </Collapsible>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerImage: {
    color: '#FFFFFF',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  description: {
    marginBottom: 24,
    color: '#49454F', // Secondary text color
    lineHeight: 22,
  },
  featureList: {
    marginTop: 8,
    lineHeight: 20,
  },
});
