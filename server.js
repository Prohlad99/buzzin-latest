const http = require("http");
const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use((req, res) => {
    return handle(req, res);
  });

  http.createServer(server).listen(3000, (err) => {
    if (err) throw err;
    console.log(err)
  });
});
