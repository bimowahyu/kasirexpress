import express from "express";

import {
      getPenjualan,
      getPenjualanById,
      updatePenjualan,
      createPenjualan,
      deletePenjualan
} from "../controllers/Penjualan.js";

const router = express.Router();

router.get('/Penjualan', getPenjualan);
router.get('/Penjualan/:id', getPenjualanById);
router.post('/Penjualan', createPenjualan);
router.patch('/Penjualan/:id', updatePenjualan);
router.delete('/Penjualan/:id', deletePenjualan);

export default router;