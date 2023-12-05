import calculateInvestmentResults from "../util/investment";

export default function ResultsTable({ theInput }) {
  console.log(theInput);

  const tableData = [
    { year: 1,
      investmentValue: 0,
      interest: 0,
      totalInterest: 0,
      investedCapital: 0,
    },
    { year: 2,
      investmentValue: 0,
      interest: 0,
      totalInterest: 0,
      investedCapital: 0,
    },
    { year: 3,
      investmentValue: 0,
      interest: 0,
      totalInterest: 0,
      investedCapital: 0,
    },

    { year: 4,
      investmentValue: 0,
      interest: 0,
      totalInterest: 0,
      investedCapital: 0,
    },
    { year: 5,
      investmentValue: 0,
      interest: 0,
      totalInterest: 0,
      investedCapital: 0,
    },
    { year: 6,
      investmentValue: 0,
      interest: 0,
      totalInterest: 0,
      investedCapital: 0,
    },
    { year: 7,
      investmentValue: 0,
      interest: 0,
      totalInterest: 0,
      investedCapital: 0,
    },
    { year: 8,
      investmentValue: 0,
      interest: 0,
      totalInterest: 0,
      investedCapital: 0,
    },
    { year: 9,
      investmentValue: 0,
      interest: 0,
      totalInterest: 0,
      investedCapital: 0,
    },
    { year: 10,
      investmentValue: 0,
      interest: 0,
      totalInterest: 0,
      investedCapital: 0,
    },
    { year: 11,
      investmentValue: 0,
      interest: 0,
      totalInterest: 0,
      investedCapital: 0,
    },
    { year: 12,
      investmentValue: 0,
      interest: 0,
      totalInterest: 0,
      investedCapital: 0,
    },
  ];

  return (
    <div id="result" className="center">
      <h3 className="center">This is ResultsTable!</h3>
      <table className="center">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest(Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>

        <tbody>
          {tableData.map((row) => (
            <tr key={row.year}>
              <td>{row.year}</td>
              <td>{row.investmentValue}</td>
              <td>{row.interest}</td>
              <td>{row.totalInterest}</td>
              <td>{row.investedCapital}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// the thead section contains a row (<tr>) with header cells (<th>) representing different columns.
