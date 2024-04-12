function cityElement(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");
  let display = document.querySelector("#city-display");

  display.innerHTML = searchInput.value;
}

let searchButton = document.querySelector("#app-button");
searchButton.addEventListener("click", cityElement);
