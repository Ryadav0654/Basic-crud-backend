const Product = require("../Database/models/product_model.js");

const createProduct =  async (req, res) => {

    try {
      const product = await Product.create(req.body);
      res.status(201).json(product); // 201 Created status for successful creation
      
    } catch (err) {

      console.error(err);
      res.status(500).json({ error: "Internal Server Error" }); // Generic error response
      
    }
};

const showProduct = async (req, res) => {

    try {
      
      const products = await Product.find({});
      res.status(200).json(products);
  
    } catch (error) {

      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });

    }
  };

  const getProduct = async (req, res) => {

    try {

      const { id } = req.params;
      const product = await Product.findById(id);

      if (!product) {

        return res.status(404).json({ error: "Product not found" });
      }

      res.status(200).json(product);

    } catch (error) {

      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });

    }
  };

  const updateProduct = async (req, res) => {

    try {


      const { id } = req.params;
      const product = await Product.findByIdAndUpdate(id, req.body);


      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }

      res.status(200).json(product);


    } catch (error) {

      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });

    }
  };


  const deleteProduct =  async (req, res) => {

    try {

      const { id } = req.params;
      const product = await Product.findByIdAndDelete(id);

      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }

      res.status(200).json({ message: "Product was deleted successfully" });

    } catch (error) {

      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });

    }
  };


module.exports = {
    createProduct, showProduct, getProduct, updateProduct, deleteProduct
}