import { Transactions } from "../types"

interface Props {
  data: Transactions
}

function TableTransactions({data}: Props) {
  return <table className="table">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Counterparty</th>
      <th scope="col">Amount</th>
    </tr>
  </thead>

  <tbody>
    {data.map((transaction, i) => 
      <tr key={i}>
        <th scope="row">{i+1}</th>
        <td>{transaction.counterparty}</td>
        <td>{transaction.amount}$</td>
      </tr>
    )}
  </tbody>
  </table>
}

export default TableTransactions