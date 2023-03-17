const mysql2=require("mysql2");
const configDatabase=require("../config/database.js");
class BaseModel {
	connect(){
      return mysql2.createPool(configDatabase);
	}
}
module.exports=BaseModel;