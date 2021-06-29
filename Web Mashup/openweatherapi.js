//This tutorial was found from https://www.youtube.com/watch?v=GXrDEA3SIOQ&ab_channel=ShanjaiRajShanjaiRaj 


let input = document.querySelector('.inputtext');
let main = document.querySelector('#name');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');
let clouds = document.querySelector('.clouds');
let button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=6bb58287594ab5a676780fb4cce9e766')
.then(response => response.json())
.then(data => {
  var tempValue = Math.round(data.main.temp-271.71);
  var nameValue = data.name;
  var descValue = data.weather[0].description;

  main.innerHTML = nameValue;
  desc.innerHTML = "Situation: "+descValue;
  temp.innerHTML = "Celsius: "+tempValue;
  input.value ="";

})

.catch(err => alert("No City found"));
})