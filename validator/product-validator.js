const {body,validationResult} =require("express-validator");
exports.addValidator=[
	body("name_products").not().isEmpty().withMessage("name_products harus diisi"),
	body("price_products").not().isEmpty().withMessage("harga products harus diisi"),
	(req,res,next)=>{
		const message=validationResult(req);
		if(!message.isEmpty()){
		 req.flash("validation-message",message.array())
         res.redirect("/products/create");
		}
		else{
			next();
		}
	}


]
exports.editValidator=[
	body("name_products").not().isEmpty().withMessage("name_products harus diisi"),
	body("price_products").not().isEmpty().withMessage("harga products harus diisi"),
	(req,res,next)=>{
		const message=validationResult(req);
		if(!message.isEmpty()){
		 req.flash("validation-message",message.array())
         res.redirect("/edit/"+req.params.id);
		}
		else{
			next();
		}
	}
	
]