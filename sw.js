setTimeout(() => {
    addEventListener('install', e => {
        console.log('installing...');
      });
  }, 100);

// Adds fetch handler not to skip this script
addEventListener('fetch', e => {
    e.respondWith(new Response('intercepted'));
  });
