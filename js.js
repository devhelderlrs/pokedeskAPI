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

        $(".container2").css({ display: "block" });
        $(".pokeImg").html(`<img width='200px' src=${result.sprites.front_default}>`);
        $(".pokeName").html(`${result.name}`);
        $(".pokeId").html(`#${result.id}`);
        $(".pokeType").html(`TYPE: ${result.types[0].type.name.toUpperCase()}`);
        $(".pokeSkill").html(`HABILIDADE: ${result.abilities[0].ability.name.toUpperCase()}`);
      },

    error: function () {
      alert("Digite um nome de pokemon válido!");
    },
})});