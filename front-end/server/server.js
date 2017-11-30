var express = require('express');
var app = express();
var path = require("path");
var bodyParser = require('body-parser');
var mysql = require('mysql');
var util = require('util');

var json = require('../products.json');
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + '/../'));

const PORT = 5000;

const db_connection = mysql.createConnection({
	host: "35.192.1.11", 
	user: "brian", 
	password: "password",
	database: "match_history"
});

db_connection.connect();

app.set('port', (process.env.PORT || 5000));

app.get("/", function(req, res){
    res.sendFile('index.html');
});

app.get("/characterSelect", function(req, res) {
	res.sendFile(path.resolve('character.html'));
});

app.get("/matches", function(req, res){
	  var query = db_connection.query("SELECT * FROM SmashData", function(err, rows, fields) {
	  	if (err)
	  		return err;
	  	res.send(rows);
	  });

});


app.get("/matchesByWinner", function(req, res){
	  var query = db_connection.query("SELECT * FROM SmashData WHERE Winner = \"" + req.query.winner + "\"", function(err, rows, fields) {
	  	if (err)
	  		return err;
	  	res.send(rows);
	  });
});


app.get("/matchesByLoser", function(req, res){
	  var query = db_connection.query("SELECT * FROM SmashData WHERE Loser = \"" + req.query.loser + "\"", function(err, rows, fields) {
	  	if (err)
	  		return err;
	  	res.send(rows);
	  });

});

app.get("/matchesByStage", function(req, res){
	  var query = db_connection.query("SELECT * FROM SmashData WHERE Stage = \"" + req.query.stage + "\"", function(err, rows, fields) {
	  	if (err)
	  		return err;
	  	res.send(rows);
	  });

});

app.get("/matchesByCharacter", function(req, res){
	  var query = db_connection.query("SELECT * FROM SmashData WHERE Winner_Character = \"" 
	  								+ req.query.character 
	  								+ "\" or Loser_Character = \"" 
	  								+ req.query.character 
	  								+ "\"" , function(err, rows, fields) {
	  	if (err)
	  		return err;
	  	res.send(rows);
	  });

});

app.get("/matchesByPerson", function(req, res){
	  var query = db_connection.query("SELECT * FROM SmashData WHERE Winner = \"" 
	  								+ req.query.person 
	  								+ "\" or Loser = \"" 
	  								+ req.query.person 
	  								+ "\"" , function(err, rows, fields) {
	  	if (err)
	  		return err;
	  	res.send(rows);
	  });

});

app.get("/matchesByWinnerCharacter", function(req, res) {
	var query = db_connection.query("SELECT * FROM SmashData WHERE Winner_Character = \"" + req.query.winner_character + "\"", function(err, rows, fields) {
		if (err)
			return err;
		res.send(rows);
	});
});

app.get("/matchesByLoserCharacter", function(req, res) {
	var query = db_connection.query("SELECT * FROM SmashData WHERE Loser_Character = \"" + req.query.loser_character + "\"", function(err, rows, fields) {
		if (err)
			return err;
		res.send(rows);
	});
});

app.post("/postMatch", function(req, res) {
	let q = req.query;
	var sql = util.format("INSERT INTO SmashData " 
			+ "(Winner, Winner_Character, Winner_KOS, Winner_Falls, Loser, Loser_Character, Loser_KOS, Loser_Falls, Stage) "
			+ "VALUES ('%s', '%s', %d, %d,'%s', '%s', %d, %d, '%s')",
			 q.winner, 
			 q.winner_character,
			 q.winner_kos,
			 q.winner_falls,
			 q.loser,
			 q.loser_character,
			 q.loser_kos,
			 q.loser_falls,
			 q.stage  );
	console.log(q);
	var query = db_connection.query(sql, function(err, result){
		if (err)
			console.log(err);
		res.send('alright');
	});
});

app.listen(app.get('port'),function(){
  console.log("node app is running at localhost:" + app.get('port'));
});

