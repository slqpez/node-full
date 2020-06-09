const http = require("http");
const hostname = "localhost";
const port = 3000;
const server = http.createServer((req, res) => {
  console.log(req.headers);
  res.status = 200;

  res.setHeader("Content-type", "text/html");
  res.end(`Hello World!`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
