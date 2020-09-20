fetch("https://fcc-weather-api.freecodecamp.repl.co/api/current?lat=35&lon=139")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("icon").src = data.weather[0].icon;
    document.getElementById("country").innerText = data.name;
    document.getElementById("temp").innerText = data.main.temp + "°";
    document.getElementById("weather-text").innerText = data.weather[0].main;
    document.getElementById("pressure").innerText =
      "Pressure" + data.main.pressure;
    document.getElementById("humidity").innerText =
      "Humidity" + data.main.humidity;
    document.getElementById("visibility").innerText =
      "Visibility" + data.visibility;
    document.getElementById("wind").innerText = "Wind" + data.wind.speed;
  });
