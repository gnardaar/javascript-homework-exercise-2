//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza: ["Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco bell",
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes: [{
        oberwise: "Chocolate",
        dunkin: "Vanilla",
        culvers: "All of them",
        mcDonalds: "Sham-rock-shake",
        cupids_candies: "Chocolate Malt"
    }]
}

function favFood(object) {
    for (let i = 0; i < Object.keys(object).length; i++) {
        console.log(Object.keys(object)[i]);
        console.log(Object.values(object)[i]);
    }
}
console.log(favFood(person3));


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.printInfo = () => {
        console.log(`${this.name} is ${this.age} years old`)
        this.addAge = () => {
            this.age += 1
            console.log(`${this.name} is ${this.age} years old`)
        }

    }
}

let new_person = new Person('Andy', 28);
let new_person2 = new Person('Andy', 28);

console.log(new_person.printInfo())
console.log(new_person.addAge())
console.log(new_person.addAge())
console.log(new_person.addAge())
console.log(new_person2.printInfo())
console.log(new_person2.addAge())
console.log(new_person2.addAge())
console.log(new_person2.addAge())


let


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
big_word = "Supercalifragilisticexpialidocious!"

let check_length = new Promise((resolve, reject) => {
    if (big_word.length >= 10) {
        resolve(true);
     } else {
         reject(false);
     }
});

check_length.then(()=>{
    console.log('thats a huge word');
}).catch(()=>{
    console.log('its not like its too small...but');
})
console.log(check_length);

