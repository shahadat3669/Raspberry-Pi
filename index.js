const http = require('http');
var express = require('express');
const testRouter = require('./test.router');
const port = 3000;
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to smart home api application.' });
});

app.use('/test', testRouter);

app.use(function (error, req, res, next) {
  // eslint-disable-next-line no-console
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({
    message: message,
    data: data,
  });
});

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, () => {
  console.log(`Server running at  ${port}/`);
});
