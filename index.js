process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
const http = require("http");

const myHeaders = new Headers();
myHeaders.append("API-Key", "7Nvk6zxDmTRJ2tjKz8yXStogHRI=");
myHeaders.append("Host", "postman-echo.com");
myHeaders.append("User-Agent", "PostmanRuntime/7.39.0");
myHeaders.append("Accept", "*/*");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Connection", "keep-alive");
myHeaders.append("Accept-Encoding", "gzip, deflate, br");

let img;

fetch("https://api.onenet.hk.chinamobile.com/devices/161379916/datapoints", {
  method: "get",
  headers: myHeaders,
})
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
    img = result;
  })
  .catch((error) => console.error(error));

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(img);
  })
  .listen(8080);
