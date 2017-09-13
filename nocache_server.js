const express = require('express');
const app = express();

console.log('starting server...');

let server = app.listen(8080, '127.0.0.1', () => {
  console.log(`listening: ${server.address().address}:${server.address().port}`);
});

app.use(express.static(`${__dirname}/public`,
                       {setHeaders: (res, path, stat) => {
                         res.set('Cache-Control', 'no-store');
                       }}));

app.get('/sw-blank-variant.js', (req, res) => {
  res.set('Cache-Control', 'no-store');
  res.type('text/javascript');
  res.send(`// ${Date.now()}`);
});
