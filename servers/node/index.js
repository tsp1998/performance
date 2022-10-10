const http = require('http')
const host = 'localhost';
const port = 5000;
const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("Hello from node server!");
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});