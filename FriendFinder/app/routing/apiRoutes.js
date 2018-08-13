var path = require("path");

var friendsData = require("../../app/data/friends");
var surveyData = [];

module.exports = function(app) {

    app.get('/api/friends', function(req, res) {
         res.json(friendsData);
    });

    app.post('/api/friends', function(req, res) {
        surveyData.push(req.body);
        res.json(surveyData);
        // console.log("response: ", response);
    })
        
}
//////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////////////
