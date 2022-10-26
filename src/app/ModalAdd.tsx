import 'bootstrap/js/dist/modal';
import { useRef } from 'react';
import { Transaction } from '../logic';

interface Props {
  addTransactionFn: (transaction: Transaction) => void
}

function ModalAdd({addTransactionFn}: Props) {
  const closeButton = useRef<HTMLButtonElement>(null)
  const counterpartyInput = useRef<HTMLInputElement>(null)
  const amountInput = useRef<HTMLInputElement>(null)

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {    
    addTransactionFn({
      tradingParty: 'me',
      counterparty: counterpartyInput.current!.value,
      amount: parseInt(amountInput.current!.value),
    })
    event.preventDefault()
    console.log(closeButton.current)
    closeButton.current!.click()
    event.currentTarget.reset()
  }

  return <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
      <form className="needs-validation" onSubmit={handleSubmit}>
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="staticBackdropLabel">Add Transaction</h1>
          <button ref={closeButton} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
            <div className="mb-3">
              <label className="col-form-label">Counterparty:</label>
              <input ref={counterpartyInput} type="text" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="col-form-label">Amount:</label>
              <input ref={amountInput} type="number" className="form-control" placeholder='0' required />
            </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="submit" className="btn btn-primary">Add</button>
        </div>
      </form>
      </div>
    </div>
  </div>
}

export default ModalAdd