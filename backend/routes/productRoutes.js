import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import Product from "../models/productModel.js";
// import errorHandler from "../middleware/errorMiddleware.js";

//@desc     Fetch all products
//@route    GET  /api/products
//@access   Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

//@desc     Fetch a single product
//@route    GET  /api/products
//@access   Public
router.get("/:id", asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404)
      throw new Error("Product not found")
    }
  })
);

export default router;
