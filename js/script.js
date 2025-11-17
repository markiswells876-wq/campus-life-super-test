document.getElementById("helloBtn").addEventListener("click", function() {
  alert("Welcome to the Campus Life Super App!");
});
const form = document.getElementById("feedbackForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Feedback submitted!");
});
// Placeholder for future API integration
async function getWeather() {
  // TODO: Replace URL with real API endpoint later
  try {
    const response = await fetch("https://api.example.com/weather");
    const data = await response.json();
    console.log(data); // shows the data for now
  } catch (error) {
    console.log("API not working yet.");
  }
}
