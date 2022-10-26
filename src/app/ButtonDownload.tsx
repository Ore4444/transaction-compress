import Button from '../components/Button';
import { compressTransactions } from '../logic';
import { Transactions } from '../types';
import { objectsDataToCsvURI } from '../utilities';

interface Props {
  transactions: Transactions
}

function ButtonDownload({transactions}: Props) {
  return <Button
    type='secondary'
    disabled={transactions.length === 0}
    label="Compress Transactions" 
    download="compressed.csv"
    href={objectsDataToCsvURI(compressTransactions(transactions))}
  />
}

export default ButtonDownload