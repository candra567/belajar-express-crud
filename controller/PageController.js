const ProductModel = require("../model/ProductModel.js");


class PageController {
    async index(req, res, next) {
        try {
            const data = await ProductModel.all();
            res.render("home", {
                data
            })

        } catch (m) {
            next(m)
        }

    }
    store(req, res) {
        res.render("add-product", {
            message: req.flash("validation-message")
        })
    }
    async save(req, res,next) {
        try {
            const data = [];
            data.push(req.body.name_products);
            data.push(req.body.price_products);
            data.push(req.files[0].filename);
            await ProductModel.add(data);
            res.redirect("/");

        } catch (m) {
            next(m);
        }
    }
    async show(req, res,next) {
        try {
            const data = await ProductModel.find(req.params.id);
            if (Object.keys(data).length < 1) {
                res.status(404).send("Products not found");
                return false;
            }
            res.render("detail-product", {
                data
            })
        } catch (m) {
            next(m);
        }
    }
    async edit(req, res,next) {
        try {
            const data = await ProductModel.find(req.params.id);
            if (Object.keys(data).length < 1) {
                res.status(404).send("Products not found");
                return false;
            }

            res.render("edit-product", {
                data,
                message:req.flash("validation-message")
            })
        } catch (m) {
            next(m);
        }
    }
    async update(req, res,next) {
        try {
            const data = [];
            data.push(req.body.name_products);
            data.push(req.body.price_products);
            data.push(req.files[0].filename);
            await ProductModel.edit(data,req.params.id);
            res.redirect("/");
        } catch (m) {
            next(m);
        }
    }
    async destroy(req,res,next){
        try{
          await ProductModel.trash(req.params.id);
          res.redirect("/")
        }
        catch(m){
            next(m)
        }
    }
}

module.exports = new PageController();