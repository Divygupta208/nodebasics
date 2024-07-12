const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    if (method === "GET") {
      res.write("<html>");
      res.write(
        "<body><form method='POST' action='/'><input name='message' type='text'><button type='submit'>Send</button></form></body>"
      );
      res.write("</html>");
      return res.end();
    }

    if (method === "POST") {
      const body = [];

      req.on("data", (chunk) => {
        body.push(chunk);
      });

      req.on("end", () => {
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split("=")[1].replace(/\+/g, " ");

        fs.writeFileSync("message.txt", message);

        res.write("<html>");
        res.write("<body>");
        res.write(`<p>Message received: ${message}</p>`);
        res.write(
          "<form method='POST' action='/'><input name='message' type='text'><button type='submit'>Send</button></form>"
        );
        res.write("</body>");
        res.write("</html>");
        return res.end();
      });
    }
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
