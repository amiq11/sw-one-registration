// importScripts('loong-imported-script.js');

// // Check if a warning shows up
// setTimeout(() => {
//     addEventListener('install', e => {
//         console.log('installing...');
//       });
//   }, 100);

addEventListener('install', e => {
  console.log('installing...');
  console.log(`getRegistration: ${registration.scope}`);
});

addEventListener('activate', e => {
  console.log('activating...');
});

// Adds fetch handler not to skip this script
addEventListener('fetch', e => {
  if (e.request.url.indexOf('text') > 0) {
    e.respondWith(fetch('foo.txt'));
    return;
  } else if (e.request.url.indexOf('intercepted') > 0){
    e.respondWith(new Response('intercepted'));
    return;
  }
  e.respondWith(fetch(e.request));
});

// // Import a script twice.
// importScripts('small-imported-script.js', 'small-imported-script.js');
