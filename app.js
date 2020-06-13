//All the comments are for the devoloper to understand if he is a beginner
//Please do not mind of any spelling mistakes. 

var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')



button.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=662605a52801d87013999b2b0f1e8862')
    //inputValue is the tag and value is the type of data 
    // it then returns 2 promises that is two responses
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];

        name.innerHTML = nameValue; // the name of the city entered
        temp.innerHTML = tempValue+" F"; // the temperature value in Farenheight
        desc.innerHTML = descValue; // the description like scattered clouds or so

    })
    // we want to pass it to the function when the data is passed. In the screen shpots included you can see the tests the the data is shown in the console. But we want the data to be shown outside in the main screen

     


    //if the above doesnot work for some you can put the below code.
    .catch(err => alert("City name not found / available just yet"))
})