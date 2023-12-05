import { calculateInvestmentResults, formatter } from '../util/investment';

export default function ResultsTable({ theInput }) {
  const resultsData = calculateInvestmentResults(theInput);
  const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;

  console.log(resultsData);

  return (
    <table id="result" className="center">
      <thead>
        <tr>
          {/* titles of the header: th */}
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>

      <tbody>
        {resultsData.map((yearData) => {
          const totalInterest =
          yearData.valueEndOfYear -
          yearData.annualInvestment * yearData.year -
          initialInvestment;

          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

          return (
            // the "year" property will be the key as it is unique for each year
            <tr key={yearData.year}>
              {/* table data: td */}
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

// the thead section contains a row (<tr>) with header cells (<th>) representing different columns.
