// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


// Friends Name (DATA)
// =============================================================
var friends = [
{
name: "Ahmed",
photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
scores: [
"5",
"1",
"4",
"4",
"5",
"1",
"2",
"5",
"4",
"1"
]
},
{
name: "Jacob Deming",
photo: "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
scores: [
"4",
"2",
"5",
"1",
"3",
"2",
"2",
"1",
"3",
"2"
]
},
{
name: "Jeremiah Scanlon",
photo: "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
scores: [
"5",
"2",
"2",
"2",
"4",
"1",
"3",
"2",
"5",
"5"
]
},
{
name: "Louis T. Delia",
photo: "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
scores: [
"3",
"3",
"4",
"2",
"2",
"1",
"3",
"2",
"2",
"3"
]
},
{
name: "Lou Ritter",
photo: "https://m.facebook.com/photo.php?fbid=10208500699025296&id=1542229019&set=a.1549418665704.77596.1542229019&source=11",
scores: [
"4",
"3",
"4",
"1",
"5",
"2",
"5",
"3",
"1",
"4"
]
},
{
name: "Jordan Biason",
photo: "https://scontent-ord1-1.xx.fbcdn.net/v/t1.0-9/12741971_10205764267089153_4212986785721953092_n.jpg?oh=4e18265f7d380167223a97fbd7eba278&oe=57B78445",
scores: [
"4",
"4",
"2",
"3",
"2",
"2",
"3",
"2",
"4",
"5"
]
}
]

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/', function(req, res){
	
	//res.send("Survey Page")
	res.sendFile(path.join(__dirname + '/survy.html'));
})

// Search for Specific Character (or all characters) - provides JSON
app.get('/api/:characters?', function(req, res){

	var chosen = req.params.characters;

	if(chosen){
		console.log(chosen);

		for (var i=0; i <characters.length; i++){

			if (chosen == characters[i].routeName){
				res.json(characters[i]);
				return;
			}
		}

		res.json(false);
	}

	else{
		res.json(characters);
	}
})

// Create New Characters - takes in JSON input
app.post('/api/new', function(req, res){

	// req.body hosts is equal to the JSON post sent from the user
	var newcharacter = req.body;

	console.log(newcharacter);

	// We then add the json the user sent to the character array
	characters.push(newcharacter);

	// We then display the JSON to the users
	res.json(newcharacter);
})

// Starts the server to begin listening 
// =============================================================
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})