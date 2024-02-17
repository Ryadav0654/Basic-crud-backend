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

// app.post("/products", async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     res.status(201).json(product); // 201 Created status for successful creation
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Internal Server Error" }); // Generic error response
//   }
// });

 // print all products

// app.get("/products", async (req, res) => {
//   try {

//     const products = await Product.find({});
//     res.status(200).json(products);

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // find the product by id

// app.get("/product/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     if (!product) {
//       return res.status(404).json({ error: "Product not found" });
//     }
//     res.status(200).json(product);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

 // update the product

// app.put("/product/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
//     if (!product) {
//       return res.status(404).json({ error: "Product not found" });
//     }
//     res.status(200).json(product);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

 // delete the product

// app.delete("/product/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndDelete(id);
//     if (!product) {
//       return res.status(404).json({ error: "Product not found" });
//     }
//     res.status(200).json({ message: "Product was deleted successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// connect the database

connectDb().then(() => {
  // initialise a port or server
  app.listen(3000, () => {
    console.log("server is running on port 3000");
  });
});





