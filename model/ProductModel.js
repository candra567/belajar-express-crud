const BaseModel = require("./BaseModel.js");
class ProductModel extends BaseModel {
    all() {
        return new Promise((resolve, reject) => {
            this.connect().query("SELECT * FROM table_products", (err, result, fields) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result);
                }
            })

        })
    }
    add(data) {
        return new Promise((resolve, reject) => {
            this.connect().execute("INSERT INTO table_products (`name_products`,`price_products`,`image_products`) VALUES(?,?,?)", data, (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })

        })

    }
    find(id){
      return new Promise((resolve, reject) => {
            this.connect().query(`SELECT * FROM table_products WHERE id_products=${id}`, (err, result, fields) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result);
                }
            })

        })
 
    }
    edit(data,id){
       return new Promise((resolve,reject)=>{
          this.connect().execute("UPDATE table_products SET `name_products`=?,`price_products`=?,`image_products`=? WHERE id_products="+id, data, (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })
       })
    }
    trash(id){
       return new Promise((resolve,reject)=>{
          this.connect().execute("DELETE FROM table_products WHERE id_products="+id,(err,result)=>{
             if(err){
               reject(err)
             }
             else{
                resolve(result)
             }
          })
       })
    }
}
module.exports = new ProductModel()