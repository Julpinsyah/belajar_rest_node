import Express  from "express";
import {
    getAllProduk, 
    createProduk, 
    getProdukById, 
    updateProduk,
    deleteProduk, 
    } from "../controllers/produkController.js";

const router = Express.Router();

router.get('/', getAllProduk);
router.post('/produk', createProduk);
router.get('/produk/:id', getProdukById);
router.put('/produk/:id', updateProduk);
router.delete('/produk/:id', deleteProduk);

export default router; 

