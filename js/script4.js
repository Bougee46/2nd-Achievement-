let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    const ul_node = document.querySelector("ul.pokemon-list");

    function addListItem(pokemon){
        let listItem = document.createElement('li');
        let button = document.createElement('button');
     
        button.innerText = pokemon['name'];
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

  function showModal() {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.add('is-visible');
  }
  
  document.querySelector('#pokemon-list').addEventListener('click', () => {
    showModal();
  });
  
  function showModal(title, text) {
    let modalContainer = document.querySelector('#modal-container');
        modalContainer.innerHTML = '';
  
    let modal = document.createElement('div');
        modal.classList.add('modal');
  
    let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'Close';
        closeButtonElement.addEventListener('click', hideModal);
        
    let titleElement = document.createElement('h1');
        titleElement.innerText = title;
  
    let contentElement = document.createElement('p');
        contentElement.innerText = text;
    
        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(contentElement);
    
        modalContainer.appendChild(modal);
        modalContainer.classList.add('is-visible');
        modalContainer.addEventListener('click', (e) => {
    let target = e.target;
          
    if (target === modalContainer) {
      hideModal();
    }
  });
  }
  
  document.querySelector('#pokemon-list').addEventListener('click', () => {
    showModal('$pokemon.name', '$pokemon.height');
  });
  
  function hideModal() {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible');
  }
  
  window.addEventListener('keydown', (e) => {
    let modalContainer = document.querySelector('#modal-container');
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();  
    }
  });
  