const Session={
	secret:"express-session",
	resave:false,
	saveUninitialized:true,
	cookie:{
		maxAge:1000*1000
	}
}

module.exports=Session;