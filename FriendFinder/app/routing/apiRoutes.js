var path = require("path");

var friendsData = require('../data/friends.js');
// var surveyData = [];

module.exports = function(app) {

    app.get('/api/friends', function(req, res) {
         res.json("friendData: " + friends);
    });

    app.post('/api/friends', function(req, res) {

        var surveyData = req.body;
        // console.log("surveydata: " + surveyData);
        console.log("surveydata:" + JSON.stringify(surveyData));

        var surveyScore = surveyData.scores;
        console.log("scores: " + surveyScore);

        var closestMatch = {
            matchName: "",
            matchPhoto: "",
            matchDiff: 1000
        };

        var totalDiff = 0;

        for (var i=0; i<friendsData.length; i++) {
            // console.log("friendsData: " + JSON.stringify(friends[i]));

            for (var k=0; k<surveyScore.length; k++) {
                totalDiff += Math.abs(parseInt(friendsData[i].scores[k]) - parseInt(surveyScore[k]));

                if (totalDiff <= closestMatch.matchDiff) {
                    closestMatch.matchName = friendsData[i].name;
                    closestMatch.matchPhoto = friendsData[i].photo;
                    closestMatch.matchDiff = totalDiff;
                }
            }
            console.log("diff: " + totalDiff);
        };

        friendsData.push(surveyData);

        res.json(closestMatch);
         
        // surveyData.push(req.body);
        // res.json(surveyData);
        // console.log("response: ", response);
    });
        
}
