const express = require('express');
const stream = require('express-stream');
const fs = require('fs');
const SlowStream = require('slow-stream');
const ejs  = require('ejs');

const app = express();

console.log('starting server...');
let server = app.listen(8080, '127.0.0.1', () => {
  console.log(`listening: ${server.address().address}:${server.address().port}`);
});

app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');

app.use(express.static(`${__dirname}/public`,
                       {setHeaders: (res, path, stat) => {
                         res.set('Cache-Control', 'no-store');
                       }}));

app.get('/:name\.js', (req, res) => {
  res.type('text/javascript');
  console.log(req.params.name);
  res.render(req.params.name, {date: Date.now()});
});

app.get('/slow/:name', stream.pipe(), (req, res) => {
  let filepath = `${__dirname}/public/${req.params.name}`;
  fs.createReadStream(filepath, {bufferSize: 1})
      .pipe(new SlowStream({maxWriteInterval: 0}))
      .pipe(res);
});
