function testJS(){
   try {

       let one = document.getElementById("one")
       one.innerText = "";
       one.innerText = "JavaScript works";
   }  catch (error){
        console.error("error in testJS()", error)
   }
}

function testServer(){
    let one = document.getElementById("one")
    one.innerText = '';
    fetch("http://localhost:3000/test")
  .then(function(response) {
    if (response.ok) {
      return response.text();
    }
    throw new Error("Network response was not ok.");
  })
  .then(function(data) {
    console.log("data",data)
    // Process the response data here
    let one = document.getElementById("one")
    one.innerText = data;
  })
  .catch(function(error) {
    // Handle any error that occurred
    console.error('error in testServer()', error)
  });


}
// this is for the frontend
function testPokemonAPI(){
  let one = document.getElementById("one")
  one.innerText = '';
  fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then(function(response) {
      console.log('response from server', response.ok)
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response was not ok.");
    })
    .then(function(data) {
      // Process the response data here
      console.log('data from PokeAPI', data)
      let one = document.getElementById("one")
      //drill into the object to get the data you want
      one.innerText = data.abilities[0].ability.name
    })
    .catch(function(error) {
      // Handle any error that occurred
      console.error('error in testPokemonAPI()', error)
    });
}

function testPokemonAPIFromServer(){
  console.log('getting into testPokemonAPIFromServer()')
  let one = document.getElementById("one")
  one.innerText = '';
  fetch("http://localhost:3000/pokemon")
  .then(function(response) {
      console.log('response from server', response)
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response was not ok.");
    })
    .then(function(data) {
      // Process the response data here
      console.log('data from server route /pokemon', data)
      let one = document.getElementById("one")
      //drill into the object to get the data you want
      one.innerText = data.name;
    })
    .catch(function(error) {
      // Handle any error that occurred
      console.error('error in testPokemonAPIFromServer()', error)
    });
}

function getDataFromPokemonArray(){
  console.log('getDataFromPokemonArra')
  let one = document.getElementById("one")
  one.innerText = "";
  fetch("http://localhost:3000/pokemonArray")
  .then(function(response){
    console.log('response from server', response)
    if (response.ok) {
      return response.json();
    }
    throw new Error("Network response was not ok.");
  })
  .then(function(data){
    console.log('data from server route/pokemonArray', data)
    let one = document.getElementById('one')
    //one.innerText = data.results;
    var resultsArray = data.results
    console.log("resultsArray", resultsArray)
    var firstIndexName = resultsArray[0].name
    console.log("firstIndexName",firstIndexName)

  })
  .catch(function(error){
    console.error('error in getDataFromPokemonArray', error)
  });
}













