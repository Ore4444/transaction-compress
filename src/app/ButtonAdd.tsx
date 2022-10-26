import Button from '../components/Button';

function ButtonAdd() {
  return <Button
    type='primary'
    label="Add new Transaction"
    openModal="#staticBackdrop"
  />
}

export default ButtonAdd