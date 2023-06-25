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












