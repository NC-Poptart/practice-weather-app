function cityElement(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");
  let display = document.querySelector("#city-display");

  display.innerHTML = searchInput.value;

  let apiKey = "8005c0f1346d7o3334btcffa67aabd4b";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInput.value}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}

let searchButton = document.querySelector("#app-button");
searchButton.addEventListener("click", cityElement);

function displayTemperature(response) {
  let cityElement = document.querySelector("#city-display");
  cityElement.innerHTML = response.data.city;

  let temperature = document.querySelector("#app-temperature");
  let roundedTemperature = Math.round(response.data.temperature.current);

  temperature.innerHTML = roundedTemperature;
}
