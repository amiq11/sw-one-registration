addEventListener('install', e => {
  console.log('installing...');
});

addEventListener('activate', e => {
  console.log('activating...');
});
addEventListener('message', e => {
  setTimeout(() => {
    console.log(`Message is coming in: ${e.data}`);
    if (e.data === 'unregister') {
      console.log('Unregistering...');
      e.source.postMessage('Unregistering...');
      self.registration.unregister().then(result => {
        console.log(`Unregistration has done: ${result}`);
        e.source.postMessage(`Unregistartion has done: ${result}`);
      });
      return;
    }
    console.log(`Unknown message: ${e.data}`);
    e.source.postMessage(`Unknown message: ${e.data}`);
  }, 0);
});
