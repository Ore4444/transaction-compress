import {compressTransactions, Transaction} from './logic'

const transactionsNonCompressable = Array<Transaction>(
  { tradingParty: "me", counterparty: "you", amount: -400 },
  { tradingParty: "me", counterparty: "someone_else", amount: 100 },
)

const transactionsCompressable = Array<Transaction>(
  { tradingParty: "me", counterparty: "you", amount: -400 },
  { tradingParty: "me", counterparty: "you", amount: 500 },
  { tradingParty: "me", counterparty: "you", amount: 600 },
  { tradingParty: "me", counterparty: "someone_else", amount: 100 },
)

const transactionsCompressableCompressed = Array<Transaction>(
  { tradingParty: "me", counterparty: "you", amount: 700 },
  { tradingParty: "me", counterparty: "someone_else", amount: 100 },
)

test('transactions are already compressed', () => {
  expect(compressTransactions(transactionsNonCompressable))
    .toEqual(transactionsNonCompressable);
});

test('transactions are compressed', () => {
  expect(compressTransactions(transactionsCompressable))
    .toEqual(transactionsCompressableCompressed);
});
