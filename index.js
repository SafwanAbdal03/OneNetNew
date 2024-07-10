process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

const express = require('express')
const app = express()
const PORT = 4000

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


  app.get('/', (req, res) => {
    res.status(200).json(img);
  });
  
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });

  // Export the Express API
module.exports = app
