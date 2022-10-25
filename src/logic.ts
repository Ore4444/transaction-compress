export type Amount = number

export interface Transaction {
  tradingParty: string
  counterparty: string
  amount: Amount
}

const canCompressTwo = (tr1: Transaction, tr2: Transaction): boolean => {
  return tr1.counterparty === tr2.counterparty
}

const compressAmount = (tr: Transaction, amount: Amount): Transaction => {
  return {...tr, ...{amount: tr.amount += amount}}
}

export type Transactions = Array<Transaction>

export const compressTransactions = (transactions: Transactions): Transactions => {
  return transactions.reduce<Transactions>((before, now) => {
    const compressWith = before.findIndex(tr => canCompressTwo(now, tr))

    if (compressWith >= 0) {
      before[compressWith] = compressAmount(before[compressWith], now.amount)
      return before
    } else {
      return before.concat(now)
    }
  }, [])
}