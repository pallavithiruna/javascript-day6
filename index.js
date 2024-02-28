//Question 1 : https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md

/*
Class - Movie

The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

title, which is a String representing the title of the movie
studio, which is a String representing the studio that made the movie
rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13” 
*/

class Movie{
    constructor(title, studio, rating = "PG")
    {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}
const movie1 = new Movie("Casino Royale", "Eon Productions", "PG13");
const movie2 = new Movie("Casino Royale", "Eon Productions");


console.log(movie1.title);
console.log(movie1.studio);
console.log(movie1.rating);

console.log(movie2.rating);

/*----------------------------------------------------------------------------------------------------*/

//Question 2 : https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md

class Circle{
    constructor(radius, color){
        this.radius = radius;
        this.color = color;
    }
    get radiusCircle(){
        return this.radius;
    }
    set radiusCircle(radius){
            this.radius = radius;
    }
    get colorCircle(){
        return this.color;
    }
    set colorCircle(color){
        this.color = color;
    }
    get toString(){
        return `"Circle[radius=${this.radius},colors=${this.color}]"`
    }
    get areaCircle(){
        return Math.PI * this.radius * this.radius;
    }
    get circumferenceCircle(){
        return 2 * Math.PI * this.radius;
    }
}
var obj1 = new Circle(1.0,"red");

console.log("\n")
console.log(obj1.radiusCircle);
obj1.radiusCircle = 2.2
console.log(obj1.radiusCircle);

console.log(obj1.colorCircle);
obj1.colorCircle = "blue";
console.log(obj1.colorCircle);

console.log(obj1.toString);

console.log(obj1.areaCircle);

console.log(obj1.circumferenceCircle);


/*----------------------------------------------------------------------------------------------------*/

//3.)Write a “person” class to hold all the details.
class Person {
    constructor(name, age, country) {
      this.name = name;
      this.age = age;
      this.country = country;
    }
  
    displayDetails() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Country: ${this.country}`);
    }
  }
  // Create instances of the Person class
  const person1 = new Person('Francisca Rohan', 25, 'USA');
  const person2 = new Person('Raimond Aruna', 30, 'Netherlands');

console.log("\n")
  // Display details of person1
  console.log('Person-1 Details:');
  person1.displayDetails();
  
  // Display details of person2
  console.log('Person-2 Details:');
  person2.displayDetails();
/*----------------------------------------------------------------------------------------------------*/ 
  //4.)write a class to calculate the uber price.
  class UberPricing {
    constructor(distance, duration) {
        this.baseFare = 2.50; // Base fare in dollars
        this.costPerMile = 1.50; // Cost per mile in dollars
        this.costPerMinute = 0.25; // Cost per minute in dollars
        this.distance = distance; // Distance in miles
        this.duration = duration; // Duration in minutes
    }

    calculatePrice() {
        const totalCost = this.baseFare + (this.distance * this.costPerMile) + (this.duration * this.costPerMinute);
        return totalCost;
    }
}

// Example usage:
const distance = 5.2; // miles
const duration = 15; // minutes
const uberTrip = new UberPricing(distance, duration);
const price = uberTrip.calculatePrice();

console.log("\n")
console.log("The estimated price for the Uber ride is ₹", price.toFixed(2));



