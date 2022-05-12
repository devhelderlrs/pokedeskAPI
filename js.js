function criaPokemon() {
  let novoPokemon = $("#inputUser").val().toLowerCase();
  return novoPokemon;
}

$("#submit").on("click", function (eve) {
  eve.preventDefault();

  $.ajax({
    url: `https://pokeapi.co/api/v2/pokemon/${criaPokemon()}`,
    type: "GET",
    dataType: "json",

    success: function (result) {
      console.log(result);
      $('.pokeImg').html(`<img width='150px' src=${result.sprites.front_default}>`);
      $('.pokeName').html(`${result.name.toUpperCase()}`);
      $('.pokeId').html(`#${result.id}`);
    },
    error: function () {
      alert("erro!");
    },
  });
});