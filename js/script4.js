let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    const ul_node = document.querySelector("ul.pokemon-list");

    function addListItem(pokemon){
        let listItem = document.createElement('li');
        let button = document.createElement('button');
     
        button.innerText = pokemon['name'];
        button.classList.add(['poke-button']);
        addListener(button, pokemon['url']);
     
        listItem.append(button);
        ul_node.append(listItem);

     }
     
     function addListener(someButton,pokemon_url){
        someButton.addEventListener("click", function () { showDetails(pokemon_url); }, false);
     }
     
     function showDetails(pokemon_url){
        console.log(pokemon_url);
     };
     

    async function loadList() {
        try {
        const response = await fetch(apiUrl).then();
        const json = await response.json();
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            url: item.url
          };

          pokemonList.push(pokemon);
        });
      } catch (e) {
        console.error(e);
      }
      };
      
    
      function getAll() {
        return pokemonList;
      };

      return {
        addListItem: addListItem,
        getAll: getAll,
        loadList: loadList
      };
  })();
  

  pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon){
      pokemonRepository.addListItem(pokemon);
    });
  });
