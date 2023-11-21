const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require( "body-parser" );
const path = require('path')

const app = express();

dotenv.config({ path: "./env" });
const Port = 4000

app.use(morgan("tiny"));
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() );
// app.use( "/css", express.static( path.resolve( __dirname, "./css/style.css" ) ) );
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
// app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
	res.render('index')
	
});
app.get("/add-user", (req, res) => {
	res.render('adduser')
	
});
app.get("/update_user", (req, res) => {
	res.render('update_user')
	
});


app.listen(Port, () => {
	console.log(`Server is running sucessfully on port on ${Port}`);
});
