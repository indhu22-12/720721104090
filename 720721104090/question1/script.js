import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Assuming your app component is in App.js
ReactDOM.render(<App />, document.getElementById('app-root'));
function App() {
  const [numberType, setNumberType] = useState("p"); // Initial number type
  const [averageData, setAverageData] = useState({}); // Stores average data

  // ... existing fetch logic

  return (
    <div className="App">
      <h1>Average Calculator</h1>
      <select value={numberType} onChange={handleNumberTypeChange}>
        <option value="p">Prime Numbers</option>
        <option value="f">Fibonacci Numbers</option>
        <option value="e">Even Numbers</option>
        <option value="r">Random Numbers</option>
      </select>
      {averageData && Object.keys(averageData).length > 0 && (
        <div className="average-data">
          <h3>Window States:</h3>
          <pre>
            Previous: {JSON.stringify(averageData.windowPrevState)}
            Current: {JSON.stringify(averageData.windowCurrState)}
          </pre>
          <h3>Fetched Numbers:</h3>
          <pre>{JSON.stringify(averageData.numbers)}</pre>
          <h3>Average: {averageData.ave.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
}

