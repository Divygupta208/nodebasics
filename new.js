const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/home") {
    res.write("<html>");
    res.write("<body><h1>Home Page</h1></body>");
    res.write("</html>");
  }
  if (url === "/about") {
    res.write("<html>");
    res.write("<body><h1>About Page</h1></body>");
    res.write("</html>");
  }
  if (url === "/node") {
    res.write("<html>");
    res.write("<body><h1>Welcone to node Page</h1></body>");
    res.write("</html>");
  }
});

server.listen(3000);
