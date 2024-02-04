import Penjualan from "../model/PenjualanModel.js";



export const getPenjualan =  (req, res) => {};

export const getPenjualanById =  (req, res) => {};

export const updatePenjualan =  (req, res) => {};

export const createPenjualan =  (req, res) => {};

// export const deletePenjualan =  (req, res) = {
//       res.status(200).json({ message: 'penjualan berhasil dihapus' });
// };

export const deletePenjualan = (req, res) => {
      // Implementasi logika penghapusan detail penjualan
      // ...
      res.status(200).json({ message: 'Detail penjualan berhasil dihapus' });
  };

