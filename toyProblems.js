//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {
  reverseIt: function(string){
    return string.split("").reverse("").join("");
  },

  //uncomment and finish the reverseIt function. It will take in one parameter which is a String and
  //reverse it

  removeDups: function(arr){
    arr = arr.filter(function(value, index){
      return arr.indexOf(value) == index;
    });
    return arr;
  },


  //uncomment and finish the removeDups function. It will take in one parameter which is an Array
  //remove all duplicates

  titleIt: function(string) {
    string = string.split(" ");
    string = string.map(function(word){
      word = word.replace(word.charAt(0), word.charAt(0).toUpperCase());
      return word;
    })
    return string.join(" ");
  },

  //uncomment and finish the titleIt function. It will take in one parameter which is a String and
  //capitalize the first letter of each word

  vowelCounter: function(string){
    string = string.split("");
    var vowels = ['a','e','i','o','u'];
    var counter = 0;
    string.forEach(function(a){
      if(vowels.includes(a)){
        counter ++;
      }
    })
    return counter;
  },

  //uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
  //return the number of vowels in the string

  isPrime: function(num){
    if(num < 2) {
      return false;
    }
    for (var x = 2; x < num; x++) {
      if(num % x === 0) {
        return false;
      }
    }
    return true;
  },

  //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not

  //what is the value of foo?
  //var foo = 10 + '20';
  //uncomment the foo property and give your answer as its value

  foo: "1020",

  //what is the outcome of the two console.logs below?
  //   var foo = "Hello";
  // (function() {
  //   var bar = " World";
  //   console.log(foo + bar);
  // })();
  // console.log(foo + bar);
  // uncomment the log1 and log2 properties and give your answers as their values

  log1:"Hello World",
  log2: undefined
}
