fetch("https://fcc-weather-api.freecodecamp.repl.co/api/current?lat=35&lon=139")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("icon").src = data.weather[0].icon;
    document.getElementById("country").innerText = data.name;
    document.getElementById("temp").innerText = data.main.temp + "°";
    document.getElementById("weather-text").innerText = data.weather[0].main;
    document.getElementById("pressure-text").innerText = "Pressure ";
    document.getElementById("pressure-data").innerText =
      data.main.pressure + "hPa";
    document.getElementById("humidity-text").innerText = "Humidity ";
    document.getElementById("humidity-data").innerText =
      data.main.humidity + "%";
    document.getElementById("visibility-text").innerText = "Visibility ";
    document.getElementById("visibility-data").innerText =
      data.visibility + "km";
    document.getElementById("wind-text").innerText = "Wind ";
    document.getElementById("wind-data").innerText = data.wind.speed + "km/h";
  });
