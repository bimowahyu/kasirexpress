import PenjualanDetail from "../model/PenjualanDetail.js";

export const getPenjualanDetail =  (req, res) => {};

export const getPenjualanDetailById =  (req, res) => {};

export const updatePenjualanDetail =  (req, res) => {};

export const createPenjualanDetail =  (req, res) => {};

export const deletePenjualanDetail = (req, res) => {
      // Implementasi logika penghapusan detail penjualan
      // ...
      res.status(200).json({ message: 'Detail penjualan berhasil dihapus' });
  };
