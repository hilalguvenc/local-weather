   fetch(
  "https://fcc-weather-api.freecodecamp.repl.co/api/current?lat=35&lon=139"
)
  .then((response) => response.json())
  .then((data) => document.getElementById("card-container").href = data.weather[0].icon);
 
   