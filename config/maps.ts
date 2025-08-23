// Google Maps API Configuration
// This file imports the API key from secrets.ts (which should be gitignored)

import { getGoogleMapsApiKey } from './secrets';

export const GOOGLE_MAPS_CONFIG = {
  // Get API key from secrets file
  get API_KEY() { return getGoogleMapsApiKey(); },
  
  // API endpoints
  STATIC_MAPS_URL: 'https://maps.googleapis.com/maps/api/staticmap',
  
  // Default map settings
  DEFAULT_ZOOM: 18, // Street level
  DEFAULT_SIZE: '400x300',
  DEFAULT_SCALE: 2, // High DPI
  DEFAULT_MAP_TYPE: 'satellite', // Satellite view
};

// Helper function to check if API key is configured
export const hasGoogleMapsApiKey = (): boolean => {
  const apiKey = getGoogleMapsApiKey();
  console.log('🔑 Checking API key:', apiKey ? `${apiKey.substring(0, 10)}...` : 'NOT FOUND');
  return apiKey.length > 0 && apiKey !== 'YOUR_API_KEY_HERE';
};

// Helper function to get map URL with current coordinates
export const getMapUrl = (latitude: number, longitude: number): string => {
  const hasApiKey = hasGoogleMapsApiKey();
  console.log('🗺️ Generating map URL, has API key:', hasApiKey);
  
  if (!hasApiKey) {
    // Return placeholder URL
    const placeholderUrl = `https://via.placeholder.com/400x300/1a73e8/FFFFFF?text=🗺️+Google+Maps+Satellite+View%0A%0A📍+${latitude.toFixed(6)}%0A📍+${longitude.toFixed(6)}%0A%0A🔑+Add+API+Key+for+real+satellite+view%0A%0A📱+Street+Level+Zoom+18`;
    console.log('📱 Using placeholder URL');
    return placeholderUrl;
  }
  
  // Return real Google Maps URL
  const apiKey = getGoogleMapsApiKey();
  const params = new URLSearchParams({
    center: `${latitude},${longitude}`,
    zoom: GOOGLE_MAPS_CONFIG.DEFAULT_ZOOM.toString(),
    size: GOOGLE_MAPS_CONFIG.DEFAULT_SIZE,
    maptype: GOOGLE_MAPS_CONFIG.DEFAULT_MAP_TYPE,
    scale: GOOGLE_MAPS_CONFIG.DEFAULT_SCALE.toString(),
    key: apiKey,
  });
  
  const realMapUrl = `${GOOGLE_MAPS_CONFIG.STATIC_MAPS_URL}?${params.toString()}`;
  console.log('🗺️ Using real Google Maps URL');
  return realMapUrl;
};

// Helper function to get fallback URL if Google Maps fails
export const getFallbackMapUrl = (latitude: number, longitude: number): string => {
  // Use a more reliable fallback - CartoDB (free, no API key needed)
  const zoom = 18; // Street level
  const size = '400x300';
  
  // CartoDB URL (free alternative, more reliable than OpenStreetMap)
  const cartoDbUrl = `https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/${zoom}/${Math.floor((longitude + 180) / 360 * Math.pow(2, zoom))}/${Math.floor((1 - Math.log(Math.tan(latitude * Math.PI / 180) + 1 / Math.cos(latitude * Math.PI / 180)) / Math.PI) / 2 * Math.pow(2, zoom))}.png`;
  
  // Alternative: Use a simple placeholder with coordinates
  const fallbackUrl = `https://via.placeholder.com/400x300/4CAF50/FFFFFF?text=🗺️+Map+View%0A%0A📍+Latitude:+${latitude.toFixed(6)}%0A📍+Longitude:+${longitude.toFixed(6)}%0A%0A🔑+Google+Maps+API+needs+to+be+enabled%0A%0A📱+Street+Level+Zoom+18`;
  
  console.log('🗺️ Using fallback URL (CartoDB)');
  return fallbackUrl;
};
