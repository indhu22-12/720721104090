const messageEl = document.getElementById("message");
const numberTypeEl = document.getElementById("numberType");

function calculateAverage() {
  const numberType = numberTypeEl.value;
  const url = `http://localhost:9876/numbers/${numberType}`; // Replace with your microservice URL

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const { ave, windowCurrState } = data;
      messageEl.textContent = `Average: ${ave.toFixed(2)} (Based on: ${windowCurrState.join(", ")})`;
    })
    .catch(error => {
      messageEl.textContent = `Error: ${error.message}`;
    });
}
