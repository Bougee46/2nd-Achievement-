var pokemonRepository = {
    
pokemonList : [
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
 ]   ,   

getAll:function(){return this.pokemonList},
add:function(item){this.pokemonList.push(item)}
};
pokemonRepository.add({
   name: "Pikachu", 
   height: '10', 
   types: ['electric , thunder'] 
});
console.log(pokemonRepository.getAll());



var Pikachu = {
   name: "Pikachu", 
   height: '10', 
   types: ['electric , thunder'] 
}

console.log(Pikachu.name)




