importScripts('loong-imported-script.js');

// Check if a warning shows up
setTimeout(() => {
    addEventListener('install', e => {
        console.log('installing...');
      });
  }, 100);

addEventListener('install', e => {
  console.log('installing...');
  // e.waitUntil(Promise.reject());
});

addEventListener('activate', e => {
  console.log('activating...');
  e.waitUntil(Promise.reject());
});

// Adds fetch handler not to skip this script
addEventListener('fetch', e => {
    if (e.request.url.indexOf('text') > 0) {
      e.respondWith(fetch('foo.txt'));
    } else {
      e.respondWith(new Response('intercepted'));
    }
  });

importScripts('small-imported-script.js', 'small-imported-script.js');
