const apiKey = "7f210f20bf7cad11f79f5a7ef2991f19";
const weatherButton = document.getElementById("get-weather");
const cityInput = document.getElementById("city");
const weatherOutput = document.getElementById("weather-output");
const locationElement = document.getElementById("location");
const temperatureElement = document.getElementById("temperature");
const descriptionElement = document.getElementById("description");

// Function to fetch weather data
async function getWeather(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.cod === 200) {
      locationElement.textContent = `Location: ${data.name}, ${data.sys.country}`;
      temperatureElement.textContent = `Temperature: ${data.main.temp}°C`;
      descriptionElement.textContent = `Description: ${data.weather[0].description}`;
    } else {
      alert("City not found!");
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
    alert("Failed to fetch weather data.");
  }
}

// Event listener to fetch weather when the button is clicked
weatherButton.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) {
    getWeather(city);
  } else {
    alert("Please enter a city.");
  }
});
