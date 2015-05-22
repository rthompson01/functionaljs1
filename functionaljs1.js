//  Part I

// ----------------------------
// 0. write your own forEach() function that takes an array and a function
// ----------------------------

function forEach(array, callback) {
    // YOUR CODE HERE
    for (var i = 0; i < array.length; i++) {
    callback(array[i])
}
}


// tests
// ---
var total = 0
forEach([1, 2, 3, 4], function(a){ total *= a; })

console.assert(total === 24)


// ----------------------------
// 1. using forEach() from above, write your own reduce()
// that takes an array and a function
// ----------------------------

function reduce(arr, cb, defaultValue){
        // YOUR CODE HERE
    var a = defaultValue ? defaultValue : arr.shift()
    forEach(arr, function(v, i, arr){
        a = cb(a, v, i, arr)
    })
    return a
}


// tests
// ---
console.assert(
    reduce([1, 2, 3, 4], function(a, v){ return a*v }) === 24
)


// ----------------------------
// 2. using forEach() from above, write your own map()
// that takes an array and a function
// ----------------------------

function map(array, callback){
    // YOUR CODE HERE
var squares = array.map(function(num) {
    return callback(num)
    });
}

// tests
// ---
var squares = map([1, 2, 3, 4], function(v){ return v*v })
console.assert(squares[0] === 1)
console.assert(squares[1] === 4)
console.assert(squares[2] === 9)
console.assert(squares[3] === 16)


// ----------------------------
// 3. using reduce() from above, write your own filter()
// that takes an array and a function
// ----------------------------

function filter(array, callback){
    // YOUR CODE HERE
    var evens = numbers.filter(function(even) {
        return v%2 === 0
    });

// tests
// ---
var evens = filter([1, 2, 3, 4], function(v){ return v%2 === 0 })
console.assert(evens[0] === 2)
console.assert(evens[1] === 4)


// ----------------------------
// 4. using reduce() from above, write your own sum()
// that adds up all arguments to sum (note: variadic behavior)
// ----------------------------

function sum(){
    // YOUR CODE HERE
    function sumVariadic(){ return [].slice.call(arguments).red
}

//    var sum = ((...y) => y.reduce((a,v) => a+v, 0))

// tests
// ---
console.assert(sum(1, 2, 3) === 6)
console.assert(sum(1, 2, 3, 4) === 10)
console.assert(sum(1, 2, 3, 4, 5) === 15)


// ----------------------------
// 5. using Array.sort(), sort the following array
// of people by last name
// ----------------------------

var names = [
    {name:"Matt", alma_mater:"Univ of Texas - Austin"},
    {name:"Brian", alma_mater:"Texas A&M"},
    {name:"Jesse", alma_mater:"Univ of Texas - Austin"}
]

names.sort(function(a, b){
    // YOUR CODE HERE
    user.sort(function(a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    }
    )
}
)


// tests
// ---
console.assert(names[0].name === "Brian")
console.assert(names[1].name === "Jesse")
console.assert(names[2].name === "Matt")



// ----------------------------
// 6. Using Array.map(), Array.filter(), and Array.sort() on the
// array below:
// - filter for customers whose first-names start with 'J',
// - map to their fullnames,
// - and then sort the items alphabetically by fullname
// ----------------------------

var customers = [
    { first: 'Joe', last: 'Blogs'},
    { first: 'John', last: 'Smith'},
    { first: 'Dave', last: 'Jones'},
    { first: 'Jack', last: 'White'}
]

var results = customers
    .filter(function(){
        // YOUR CODE HERE
        var results = customers.filter(function(first) 
           text()[0] === J{
    })
    }
    )
    .map(function(){
        // YOUR CODE HERE
        .map(function(fullname) {
            return fullname.customers
    })
    })
    .sort(function(){
        // YOUR CODE HERE
    fullname.sort(function(a, b){
        if(a.fullname < b.fullname) return -1;
        if(a.fullname > b.fullname) return 1;
        return 0
    })
    })

// tests
// ---
console.assert(results[0].fullname === "Jack White")
console.assert(results[2].fullname === "John Smith")