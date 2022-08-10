import produk_model from "../models/produkModel.js";

export const getAllProduk = (req, res) => {
    produk_model.findAll()
    .then(result => {
        res.json(result);
    })
    .catch(err => {
        res.json(err);
    })
};

export const getProdukById = (req, res) => {
    produk_model.findAll({
        where: {id: req.params.id},
    })
    .then(result => {
        res.status(200);
        res.json(result[0]);
    })
    .catch(err => {
        res.json(err.message);
    })
};

export const createProduk = (req, res) => {
    produk_model.create(req.body)
    .then(result => {
        res.json({
            message: "Produk berhasil ditambahkan",
            data: result,
        });
    })
    .catch(err => {
        res.json(err.message);
    })
};


export const updateProduk = (req, res) => {
    produk_model.update(req.body, {
        where: {id: req.params.id},
    })
    .then(result => {
        res.json({
            message: "Produk berhasil diupdate",
            data: result,
        });
    })
    .catch(err => {
        res.json(err.message);
    })
};

export const deleteProduk = (req, res) => {
    produk_model.destroy({
        where: {id: req.params.id},
    })
    .then(result => {
        res.json({
            message: "Produk berhasil dihapus",
            data: result,
        });
    })
    .catch(err => {
        res.json(err.message);
    })
};