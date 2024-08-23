/*

    Defensive Programming is assuming that all the arguments that a function will receive are the wrong type, the wrong value or both.
    In simple words, it means anything can go wrong, a user may put an invalid data, you ask for an email the user puts phone number or hacker puts a special character. 
    And Defensive Programming is making sure you program can defend those attacks and keep on running. Instead of going after everything that can go wrong, you define rules and everythig outside of those rules will not work.

*/

function letterFinder(word, match) {
    for (var i = 0; i < word.length; i++){
        /* 
            rules are: Anything outside of it. It doesn't accept it
                - the length of the word parameter cannot be less than 2.
                - the length of the match parameter must be 1.
                - the type of both word and the letter parameter must be string
        */

        if(word.length < 2 || match.length != 1 || typeof(word) != 'string' || typeof(match) != 'string'){
            throw new Error("Please follow the arguments rules");
        } else{
            if(word[i] == match){
                console.log("Found the", match, "At:", i);
            } else {
                console.log("---No match found at:", i);
            }
        }
    }
}

letterFinder("Marcelo", "o");