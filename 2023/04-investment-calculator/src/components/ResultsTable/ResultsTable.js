import classes from "./ResultsTable.module.css";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function ResultsTable(props) {
  return (
    <table className={classes["result"]}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((yearlyData) => (
          <tr key={yearlyData.year}>
            <td>{yearlyData.year}</td>
            <td>{formatter.format(yearlyData.savingsEndOfYear)}</td>
            <td>{yearlyData.yearlyInterest}</td>
            <td>
              {yearlyData.savingsEndOfYear -
                yearlyData.yearlyContribution -
                yearlyData.year}
            </td>
            <td>{yearlyData.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ResultsTable;
