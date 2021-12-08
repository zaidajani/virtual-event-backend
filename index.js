const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes.js");
const app = express();

mongoose
  .connect("mongodb://localhost/virtual-event", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

app.use("/", routes);

app.listen(5000, () => console.log("Listening on port 3000..."));
