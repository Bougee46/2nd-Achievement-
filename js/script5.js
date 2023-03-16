let pokemonRepository = (function () {
  let pokemonList = [];
  let pokemonInfoList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  const $ul_node = $("ul.pokemon-list");

  function addListItem(pokemon) {
    let $listItem = $("<li>");
    let $button = $("<button>").text(pokemon.name).addClass("poke-button");
    $button.on("click", function () {
      showDetails(pokemon);
      showModal(pokemon.name, 'Ich bin ein Pokemon', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png');
    });

    $listItem.append($button);
    $ul_node.append($listItem);
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  };

  async function loadList() {
    try {
      const response = await fetch(apiUrl);
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

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

function showModal(title, text, image) {
  let $modalContainer = $("#modal-container");
  $modalContainer.empty();
  let $modal = $("<div>").addClass("modal");
  let $closeButtonElement = $("<button>").addClass("modal-close").text("Close");
  $closeButtonElement.on("click", hideModal);
  let $titleElement = $("<h1>").text(title);
  let $contentElement = $("<p>").text(text);
  let $imageElement = $("<img>").attr("src", image);
  $modal.append($closeButtonElement, $titleElement, $contentElement, $imageElement);
  $modalContainer.append($modal).addClass("is-visible");
  $modalContainer.on("click", (e) => {
    if (e.target === $modalContainer.get(0)) {
      hideModal();
    }
  });
}

function hideModal() {
  let $modalContainer = $("#modal-container");
  $modalContainer.removeClass("is-visible");
}

$(document).on("keydown", (e) => {
  let $modalContainer = $("#modal-container");
  if (e.key === "Escape" && $modalContainer.hasClass("is-visible")) {
    hideModal();
  }
});

$(document).on("click", "#pokemon-list", function () {
  showModal('$pokemon.name', '$pokemon.height');
});
