// function receivesAFunction(something) {
//     return something
// }

// receivesAFunction(function () {return something})

function receivesAFunction(cb) {
    const Spy = ""
    cb(Spy)
}



// // first try
// function returnsANamedFunction () { 
//     return "name"
// }

// {} in innerfunction was missed to get 3 tests to pass
function returnsANamedFunction () {
     return function namedFunction() {}
}
     
function returnsAnAnonymousFunction () {
    return function() {}
}
