let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'});

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

    function loadList() {
        return fetch(apiUrl).then(function (response) {
          return response.json();
        }).then(function (json) {
          json.results.forEach(function (item) {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url
            };
            add(pokemon);
          });
        }).catch(function (e) {
          console.error(e);
        })
      }
    
      return {
        add: add,
        getAll: getAll,
        loadList: loadList
      };
    
    pokemonRepository.loadList().then(function() {
      pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
      });
    });