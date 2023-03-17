const express = require("express");
const route = express.Router();
const PageController = require("../controller/PageController.js");
const {addValidator,editValidator} = require("../validator/product-validator.js");
const multer = require("multer");
const configStorage=require("../config/storage.js");

const storage = multer.diskStorage(configStorage)
const upload = multer({ storage: storage })
route.get("/", PageController.index)
route.get("/products", PageController.index)
route.get("/products/create", PageController.store)
route.get("/products/:id", PageController.show)
route.post("/products",[upload.any(),addValidator], PageController.save)
route.get("/products/edit/:id",PageController.edit);
route.put("/products/:id",[upload.any(),editValidator],PageController.update)
route.delete("/products/:id",PageController.destroy)
module.exports = route;