const path=require("node:path");
const Storage={
    destination(req, file, cb) {
        cb(null, path.join("public","image"))
    },
    filename(req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname)
    }
}
module.exports=Storage