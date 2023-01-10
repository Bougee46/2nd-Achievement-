const pokemonList = [
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
 
const ul_node = document.querySelector("ul.pokemon-list"); 

function addListItem(pokemon){
   let listItem = document.createElement('li');
   let button = document.createElement('button');

   button.innerText = pokemon;
   button.classList.add(['poke-button']);
   addListener(button, pokemon);

   listItem.append(button);
   ul_node.append(listItem);
}

function addListener(someButton,pokemon){
   someButton.addEventListener("click", function () { showDetails(pokemon); }, false);
}

function showDetails(pokemon){
   console.log(pokemon);
};

pokemonList.forEach((pokemon)=> {
   addListItem(pokemon['name']);
}
 );



