/*
create an object and assign it to a variable "spinner"
up(), down()
*/

spinner.up() // => 1
spinner.up() // => 2
spinner.up() // => 3
spinner.up() // => 4


spinner.down() // => 3
spinner.down() // => 2
spinner.down() // => 1
spinner.down() // => 0
spinner.down() // => -1

function getSpinner(){
    var counter  = 0;
    function increment(){
       return ++counter;
    }
    function decrement(){
        return --counter;
    }
    return {
        up : increment,
        down : decrement
    }
       
}


//Write a function that returns if the given number is a prime number or not.


function getPrimeFinder(){
    var cache = {};
    function checkPrime(n){
       if (n <= 3) return true;
       for(var i =2;i<=(n/2);i++)
            if (n % i === 0) return false;
                return true;
    }
    return function(n){
        if (typeof cache[n] !== "undefined"){
            console.log("from cache..");
            return cache[n];
        }
        console.log("freshly processed..");
        cache[n] = checkPrime(n);
        return cache[n];
    }
}
