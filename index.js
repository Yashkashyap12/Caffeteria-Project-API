const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Server Running on 3000 PORT");
  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on this PORT: http://localhost:${PORT}`);
});  