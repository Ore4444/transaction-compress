import { useTransactions } from '../hooks/transactions';
import './App.scss';
import ButtonDownload from './ButtonDownload';
import ButtonAdd from './ButtonAdd';
import ModalAdd from './ModalAdd';
import TableTransactions from './TableTransactions';

function App() {
  const [transactions, setTransactions] = useTransactions()

  return (
    <div className="container">
      <div className="row">
        <div className="col-md">
          <h2>Paying</h2>
          <TableTransactions
            data={transactions.filter(_ => _.amount < 0)}
          ></TableTransactions>
        </div>
        
        <div className="col-md">
          <h2>Receiving</h2>
          <TableTransactions
            data={transactions.filter(_ => _.amount > 0)}
          ></TableTransactions>
        </div>  
      </div>

      <div className="row justify-content-center">
        <div className="col-4 col-md-3"><ButtonAdd /></div>
        <div className="col-4 col-md-3"><ButtonDownload transactions={transactions}/></div>
      </div>

      <ModalAdd addTransactionFn={setTransactions} />
    </div>
  );
}

export default App;
