var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());
app.use(
  cors({
    origin: "*",
    methods: "GET, POST, PUT, PATCH, POST, DELETE, OPTIONS",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
    maxAge: 86400,
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

app.get("/", function(req, res) {
  res.sendfile("./Middleware/index.html");
});

app.listen(3000);
