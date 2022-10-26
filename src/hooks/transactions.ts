import { useState } from "react";
import {Transaction, Transactions} from '../logic'

export function useTransactions() {
  const [transactions, setState] = useState<Transactions>([])

  const addTransaction = (transaction: Transaction) => {
    setState(transactions.concat(transaction))
  }

  return [transactions, addTransaction] as const
}