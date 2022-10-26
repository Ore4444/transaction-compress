export type Amount = number

export interface Transaction {
  tradingParty: string
  counterparty: string
  amount: Amount
}

export type Transactions = Array<Transaction>
