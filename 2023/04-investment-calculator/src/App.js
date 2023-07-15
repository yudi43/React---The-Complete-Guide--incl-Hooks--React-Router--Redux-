import { useState } from "react";

import Header from "./components/Header/Header";
import ResultsTable from "./components/ResultsTable/ResultsTable";
import UserInput from "./components/UserInputs/UserInputs";

function App() {
  const [results, setResults] = useState(null);

  const calculateHandler = (userInput) => {
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    if (userInput) {
      let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
      const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
      const expectedReturn = +userInput["expected-return"] / 100;
      const duration = +userInput["duration"];

      // The below code calculates yearly results (total savings, interest etc)
      for (let i = 0; i < duration; i++) {
        const yearlyInterest = currentSavings * expectedReturn;
        currentSavings += yearlyInterest + yearlyContribution;
        yearlyData.push({
          // feel free to change the shape of the data pushed to the array!
          year: i + 1,
          yearlyInterest: yearlyInterest,
          savingsEndOfYear: currentSavings,
          yearlyContribution: yearlyContribution,
        });
      }
      setResults(yearlyData);
    }
  };

  return (
    <div>
      <Header />
      <UserInput onCalculate={calculateHandler} />
      {!results && (
        <p style={{ textAlign: "center" }}>No investment calculated yet.</p>
      )}
      {results && (
        <ResultsTable
          data={results}
          initialInvestment={results["savingsEndOfYear"]}
        />
      )}
    </div>
  );
}

export default App;
