const express=require("express");
const methodOverride = require('method-override')
const app=express();
const morgan=require("morgan");
const bodyParser=require("body-parser");
const session=require("express-session");
const flash=require("connect-flash");
const web=require("./route/web.js");
const sessionConfig=require("./config/session.js");
app.use(morgan("tiny"));
app.use(methodOverride("_method"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(session(sessionConfig))
app.use(flash())
app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views","view");
app.use("/",web);

app.listen(3000,()=>{
	console.log("Server running in port http://localhost:3000")
})