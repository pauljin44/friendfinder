//load data
var friendsData = require('../data/friends.js');

//routing

module.exports = function(app){

	app.get('/api/friends',function(req, res){
        res.json(friendsData);

	});


	app.post('/api/friends',function(req, res){

		var match = {

			name: "",
			image: "",
			friendDiff: 1000

		};

		var userData = req.body;
		var userName = userData.name;
		var userImage = userData.image;
		var userScores = userData.scores;


		var totalDifference = 0;

		for (var i=0; i<friendsData.length; i++){
			console.log (friendsData[i].name);

			for (var j=0; j<friendsData[i].scores[j]; j++){

				totalDifference += Math.abs(userScores[j]- friendsData[i].scores[j]);

				if (totalDifference <= match.friendDiff){

					match.name = friendsData[i].name;
					match.image = friendsData[i].image;
					match.friendDiff = totalDifference;


                }
			}
		}

		friendsData.push(userData);
		res.json(match);
	});
}