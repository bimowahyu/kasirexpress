import express from "express";

import {
      getPenjualanDetail,
      getPenjualanDetailById,
      updatePenjualanDetail,
      createPenjualanDetail,
      deletePenjualanDetail
} from "../controllers/PenjualanDetail.js";

const router = express.Router();

router.get('/PenjualanDetail', getPenjualanDetail);
router.get('/PenjualanDetail/:id', getPenjualanDetailById);
router.post('/PenjualanDetail', createPenjualanDetail);
router.patch('/PenjualanDetail/:id', updatePenjualanDetail);
router.delete('/PenjualanDetail/:id', deletePenjualanDetail);

export default router;