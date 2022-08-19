function receivesAFunction(loginDetails) {   //takes a callback function as an argument and calls it
    return loginDetails();

}

function returnsANamedFunction() {          //takes no argument and returns a named function
    return function receivesAFunction(username) {
        console.log(username);
    }   

    }


function returnsAnAnonymousFunction() {   //takes no argument and returns an anonymous function
    return function (username) {
        console.log (username);
    }
}



// function exerciseRoutine(postRunActivity) {
//     runFiveMiles();
//     postRunActivity();
//   }

