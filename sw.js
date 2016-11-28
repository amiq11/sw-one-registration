// Check if a warning shows up
setTimeout(() => {
    addEventListener('install', e => {
        console.log('installing...');
      });
  }, 100);

// Adds fetch handler not to skip this script
addEventListener('fetch', e => {
    if (e.request.url.indexOf('text') > 0) {
      e.respondWith(fetch('foo.txt'));
    } else {
      e.respondWith(new Response('intercepted'));
    }
  });
