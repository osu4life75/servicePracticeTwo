const express = require('express');
const app = express();
const cors =require('cors');

//Enable CORS
app.use(cors());

app.get('/test', (req, res)=>{
    res.send('Hello from Server');
});


app.get('/pokemon', (req, res) => {
    console.log('getting into /pokemon')
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
        console.log('data from server route /pokemon', data)
        return res.send(data)
    })
      .catch(function(error) {
        // Handle any error that occurred
        console.error('error in /pokemon', error)
      });
});

app.get('/pokemonArray', (req, res) =>{
    console.log('getting into/pokemonArray')
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(function(response){
        console.log('response from server', response.ok)
        if( response.ok){
            return response.json();
        
        }
        throw new Error("Network response was not ok.");
    })
    .then(function(data){
        //process the response data here
        console.log('data from server route/pokemon', data)
        return res.send(data)
    })
    .catch(function(error){
        //handle any error that occured
        console.error('error in /pokemonArray', error)
    });
});






const port = 3000;
app.listen(port, ()=> {
    console.log(`Server listening on port ${port}`);
})
