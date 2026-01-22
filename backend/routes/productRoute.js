import express from 'express';
import upload from '../middleware/multer.js';
import { addProduct, listProducts, removeProduct, singleProduct } from '../controllers/productController.js';

const productRouter = express.Router();

// Route to add a new product
productRouter.post('/add',upload.fields([{ name: 'image1', maxCount: 1 },{ name: 'image2', maxCount: 1 },{ name: 'image3', maxCount: 1 },{name: 'image4', maxCount: 1 }]),addProduct);

// Route to list all products
productRouter.get('/list', listProducts);

// Route to remove a product by ID
productRouter.delete('/remove', removeProduct);

// Route to get single product info by ID
productRouter.get('/single', singleProduct);

export default productRouter;