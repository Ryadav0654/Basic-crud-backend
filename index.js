// require or import dependencies

const express = require("express");
const connectDb = require("./Database/utils/Db.js");
// const Product = require("./Database/models/product_model.js");
const productRoute = require("./routes/product_route.js");
const app = express();

// add middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/products", productRoute);

// create a get api

app.get("/", (req, res) => {
  res.send("Hello! from Node api");
});



// connect the database

connectDb().then(() => {
  // initialise a port or server
  app.listen(3000, () => {
    console.log("server is running on port 3000");
  });
});





