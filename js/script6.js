$(document).ready(function() {
    // Erstelle die Liste der Pokemons
    $.ajax({
      url: "https://pokeapi.co/api/v2/pokemon?limit=150",
      method: "GET",
      success: function(data) {
        var pokemonList = data.results;
        var pokemonHTML = "";

        for (var i = 0; i < pokemonList.length; i++) {
          var pokemon = pokemonList[i];
          var pokemonName = pokemon.name;
          var pokemonUrl = pokemon.url;

          pokemonHTML += '<li class="list-group-item pokemon-item" data-bs-toggle="modal" data-bs-target="#modal" data-url="' + pokemonUrl + '">' + pokemonName + '</li>';
        }

        $(".pokemon-list").html(pokemonHTML);
      }
    });

    // Öffne das Modal-Fenster, wenn ein Pokemon angeklickt wird
    $(document).on("click", ".pokemon-item", function() {
      var url = $(this).data("url");

      $.ajax({
        url: url,
        method: "GET",
        success: function(data) {
          var pokemonName = data.name;
          var pokemonImage = data.sprites.front_default;

          $("#modal .modal-title").text(pokemonName);
          $("#modal .modal-body img").attr("src", pokemonImage);

          $("#modal").modal("show");
        }
      });
    });
  });
