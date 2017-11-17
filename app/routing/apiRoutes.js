// Import dependency
var path = require('path');

// Import list of characters
var characters = require('../data/characters.js');

// Export API routes
module.exports = function(app) {    
console.log('__ENTER apiRoutes.js__');
}

// Total list of entries
// app.get('/api/characters', function(req, res){
//     res.json(characters);
// });

// Add new character entry
app.post('/api/characters', function(req, res) {
    // Capture user input object
    var userInput = req.body;
    console.log('userInput = ' + JSON.stringify(userInput));

    var userResponses = userInput.scores;
    console.log('User Responses = ' + userResponses);

    // Compute character match
    var matchName = '';
    var matchImage = '';
    var totalDifference = 10000; // Make initial value big for comparison

    // Examine all existing characters in the list
    for (var i = 0; i < characters.length; i++) {
        console.log('Character = ' + JSON.stringify(friends[i]));

        // Compute differences for each question
        var diff = 0;
        for (var j = 0; j < userResponses.length; j++) {
            diff += math.abs(characters[i].scores[j] - userResponses[j]);
        }
        console.log('Difference = ' + diff);

        if (diff < totalDifference){
            console.log('Closest match found = ' + diff);
            console.log('Character name = ' + characters[i].name);
            console.log('Friend image = ' + characters[i].photo);

            totalDifference = diff;
            matchName = characters[i].name;
            matchImage = characters[i].photo;

        }
    }

    // Add new user
    characters.push(userInput);s

    // Sends appropriate response
    res.json({status: 'OK', matchname: matchName, matchImage: matchImage})
    
});