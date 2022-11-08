const { Router } = require('express');

const { addProduct, getProductOne, getProducts, deleteProduct, updateProduct } = require ('../controllers/products');

const router = Router();

// Method GET to create the event and show the id of the event
router.post('/', [
], addProduct);

router.delete('/:_id', [
], deleteProduct);

router.get('/', [
], getProducts);


router.get('/:id', [
], getProductOne);

router.put('/:id', [
], updateProduct);

module.exports = router;