// //Simple app
// /*first achivment 
// carrer foundry*/

alert('Hello World!');

let favoritFruit = 'Mango <br>';
document.write(favoritFruit);


// let myName = 'Bryan';
// // document.write(myName);
// myName = 'Carla';
// // document.write(myName);

// let simpleAddition = 2 + 2;
// document.write(simpleAddition)

// let size1 = 100;
// let dubbleSize = 2 * size1;
// document.write(dubbleSize)

// let group = 10;
// let cars = 3;
// let howMany = group / cars;
// document.write(howMany)

// let size = 400;
// let doubleSize = size * 2;
// document.write(doubleSize) // Why dose console.log dont work with the code?
// let minSize = (doubleSize * 2) - (size/2);
// document.write(minSize)


// //let name = 'John';
// let welcomeMessage1 = "Hello, I'm";
// let welcomeMessage2 = 'and I say to you: "Hello!"';
// //console.log(welcomeMessage1 + ' ' + name + ' ' + welcomeMessage2);

// // Template Literals
// let name = 'John';
// let age = 32;
// let message = 'Hello!';
// console.log(`${message} my name is ${name} and I'm ${age} Years old!`)



// let day = 'sunday'

//  if (day === 'sunday') {
//     console.log('You have Work tomorrow!');
//   } else if (day === 'saturday') {
//     console.log("Its's Weekens! Yay!");
//   } else {
//     console.log("It's not Weekend! Boo!");
//   }

//   let age = 20;
//   let result = age > 19 ? 'Is not a teen' : 'Is a teen';
//   console.log(result); // Is not a teen
  

// for (let i = 1; i <= 5; i++) {
//     console.log(i)
// }

// let ages = [20, 30, 25, 22, 31];
// for (let i = 0; i < ages.length; i++) {
//     console.log(ages[i] - 2);

// }



/*let pokemonList = [
    {
      name: "Venusaur", 
      height: '6', 
      types: ['grass, poison'] 
   },
    {
      name: "Charizard", 
      height: '5', 
      types: ['fire, flying'] 
   },
    {
      name: "Blastoise", 
      height: '5', 
      types: ['water, water'] 
   },
    {
      name: "Onix", 
      height: '28', 
      types: ['rock ,ground'] 
   }
 ]

/*
/*for (let i = 0; i < pokemonListn.length; i++) {
   if (pokemonList[i].height > 6) {
       document.write(pokemonList[i].name + " is " + pokemonList[i].height + " feet tall and it is a " + pokemonList[i].type + " type! It's the largest!<br>")
   }
   else {
       document.write(pokemonList[i].name + " is " + pokemonList[i].height + " feet tall and it is a " + pokemonList[i].type + " type!<br>")
   }
}*/
/*
//For Each Funktion
pokemonList.forEach(function(pokemon){
   console.log(pokemon.name + 'is ' + pokemon.height + ' feet tall.');
});

//Arrow Function
pokemonList.forEach( pokemon => console.log(pokemon.name))

//object.keys
let carla = {
   name: 'Carla',
   age: 19,
   children: [],
   heigt: 5
}

Object.keys(carla).forEach(function(vision){
   document.write(vision + ': ' + carla[vision] + '<br>');
})
*/
let pokemonRepository = (function () {

   let pokemonList = [
      {
         name: "Venusaur", 
         height: '6', 
         types: ['grass, poison'] 
      },
       {
         name: "Charizard", 
         height: '5', 
         types: ['fire, flying'] 
      },
       {
         name: "Blastoise", 
         height: '5', 
         types: ['water, water'] 
      },
       {
         name: "Onix", 
         height: '28', 
         types: ['rock ,ground'] 
      }
   ];

   function add(pokemon) {
       if (typeof pokemon === 'object' && pokemon.name && pokemon.height && pokemon.type && Object.keys(pokemon).length === 3) {
           pokemonList.push(pokemon);
       } else {
           return (`${pokemon} is not a Pok??mon. Pok??mon must be an object with the keys name, height and type`);
       }
   }

   function getAll() {
       return pokemonList
   }

   return {
       add: add,
       getAll: getAll

   };

})();

