import React, { useEffect } from 'react';
import Main from './components/Main';

export default function Home() {
  useEffect(() => {
    // Check if service workers are supported by the browser
    if ('serviceWorker' in navigator) {
      // Register the service worker
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        })
        .catch((error) => {
          console.log('ServiceWorker registration failed: ', error);
        });
    }
  }, []);

  return (
    <div className='h-screen overflow-y-auto'>
      <Main />
    </div>
  );
}
