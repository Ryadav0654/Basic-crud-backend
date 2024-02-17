const  express = require('express');
const router = express.Router();
const Product = require("../Database/models/product_model.js");

const {createProduct, showProduct, getProduct, updateProduct, deleteProduct} = require("../controllers/product_controller.js");

// show all the products 
router.get("/", showProduct);

// create a new product 

router.post("/", createProduct);


// get product by id 

router.get("/:id", getProduct);



// update the product 

router.put("/:id", updateProduct);

// delete the product

router.delete("/:id", deleteProduct);

module.exports = router;