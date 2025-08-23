// Test file to verify Google Maps API key is working
// Run this to test your API key

import { getGoogleMapsApiKey, getMapUrl, hasGoogleMapsApiKey } from './maps';

console.log('🧪 Testing Google Maps Configuration...');

// Test 1: Check if API key is loaded
const apiKey = getGoogleMapsApiKey();
console.log('🔑 API Key loaded:', apiKey ? 'YES' : 'NO');
if (apiKey) {
  console.log('🔑 API Key preview:', `${apiKey.substring(0, 10)}...`);
}

// Test 2: Check if API key is valid
const hasValidKey = hasGoogleMapsApiKey();
console.log('✅ Has valid API key:', hasValidKey);

// Test 3: Generate a test map URL
const testLat = 53.3498; // Dublin coordinates
const testLng = -6.2603;
const testMapUrl = getMapUrl(testLat, testLng);
console.log('🗺️ Test map URL:', testMapUrl.substring(0, 100) + '...');

// Test 4: Check if it's a real Google Maps URL
const isRealMap = testMapUrl.includes('maps.googleapis.com');
console.log('🌍 Is real Google Maps URL:', isRealMap);

console.log('�� Test complete!');
