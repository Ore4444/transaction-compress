import Button from '../components/Button';
import { objectsDataToCsvURI } from '../utilities';

function ButtonDownload() {
  return <Button
    label="Compress Transactions" 
    download="compressed.csv"
    href={objectsDataToCsvURI([])}
  />
}

export default ButtonDownload