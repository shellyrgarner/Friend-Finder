var path = require("path");

var friends = require('../data/friends.js');
// var surveyData = [];

module.exports = function(app) {

    app.get('/api/friends', function(req, res) {
         res.json(friends);
    });

    app.post('/api/friends', function(req, res) {

        var surveyData = req.body;
        // console.log("surveydata: " + surveyData);
        // console.log("surveydata:" + JSON.stringify(surveyData));

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
            totalDiff = 0;

            for (var k=0; k<friendsData[i].scores[k]; k++) {
                totalDiff += Math.abs(parseInt(friendsData[i].scores[k]) - parseInt(surveyScore[k]));

                if (totalDiff <= closestMatch.matchDiff) {
                    closestMatch.matchName = friendsData[i].name;
                    closestMatch.matchPhoto = friendsData[i].photo;
                    closestMatch.matchDiff = totalDiff;
                }
               
            }
            console.log("diff: " + totalDiff);
            //  console.log("surveyscore: " + surveyScore[k])
                console.log("friendsscore: " + friendsData[i].scores);
            
        };

        friendsData.push(surveyData);

        res.json(closestMatch);
         
        // surveyData.push(req.body);
        // res.json(surveyData);
        // console.log("response: ", response);
    });
        
}
