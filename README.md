# Friend-Finder

>Created a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site takes in results from users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match. Used Express to handle routing.

>App has been deployed to Heroku so other users can fill it out.

>The survey consists of 10 questions. Each answer is on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.  Compatibility is determined by converting each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]) - calculating the total difference then comparing the difference between current user's scores against those from other users, question by question. The closest match is determined by users with the least amount of difference.

>A modal popup is used to display the display both the name and picture of the closest match.

>Files Created:

    -data:
       *friends.js - holds friend data in an array 

    -public:
       *home.html
       *survey.html

    -routing:
       *apiRoutes.js - GET/POST routes - handles compatibility logic
       *htmlRoutes.js

>Packages Used:

    *express
    *body-parser
    *path
