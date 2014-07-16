// A Person must be initialized with a firstName and a lastName, plus any of the following optional properties:

// age (in years, default to 30)
// weight (in kilograms, default to 80)
// height (in centimeters, default to a random value between 150 and 200)
// friends (an array of other Person objects, default to empty)


// Constructor Function object creation

// Constructor function is camel cased by convention.
var Person = function(firstName, lastName, age, weight, height, friends){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age || 30;
    this.weight = weight || 80;
    this.height = height || Math.floor(Math.random() * 150 || 200);
    this.friends = friends || [];
};

// Define all the methods for Person in an object literal.
// A little faster than above, defining them individually.
Person.prototype = {
   age: function(){
    return this.firstName + " is " + this.age + " years old";
   },
   // fullName should return the person's first name plus their last name
   fullname: function(){
    return this.firstName + ' ' + this.lastName;
   },
   // weightInStone should return the person's weight in stone
    weightInStone: function(){
    return this.weight * 0.15747;
   },
   // addFriend should take a Person object and add it to the person's friends
    addFriend: function(friend){
      friends = [];
    return this.friends += friend;
   },
};

var joe = new Person('joe', 'walsh', 32, 64, 26, "Linda");
var jill = new Person('jill', 32);

console.log(joe.describe());
console.log(jill.describe());
