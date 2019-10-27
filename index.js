var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());
app.use(cors({ origin: "http://localhost:3000/", credentials: true }));

app.get("/", function(req, res) {
  res.sendfile("./Middleware/index.html");
});

app.listen(3000);
