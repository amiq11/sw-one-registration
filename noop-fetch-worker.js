setTimeout(() => {
    addEventListener('install', e => {
        console.log('installing...');
      });
    addEventListener('fetch', e => {
        e.respondWith(new Response('intercepted'));
      });
  }, 100);
