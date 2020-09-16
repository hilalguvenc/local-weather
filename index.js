   fetch(
  "https://fcc-weather-api.freecodecamp.repl.co/api/current?lat=35&lon=139"
)
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("icon").src = data.weather[0].icon;
    document.getElementById("country").innerText = data.sys.country;
    document.getElementById("temp").innerText = data.main.temp + "°";
  }) 
  
 
   