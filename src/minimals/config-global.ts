// ----------------------------------------------------------------------

export const HOST_API = process.env.VITE_HOST_API || 'http://localhost:3000';

export const MAPBOX_API = process.env.VITE_MAPBOX_API || '';

export const FIREBASE_API = {
    apiKey: process.env.VITE_FIREBASE_API_KEY || '',
    authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN || '',
    projectId: process.env.VITE_FIREBASE_PROJECT_ID || '',
    storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET || '',
    messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
    appId: process.env.VITE_FIREBASE_APPID || '',
    measurementId: process.env.VITE_FIREBASE_MEASUREMENT_ID || '',
};
