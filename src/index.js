import R from 'ramda'

const splitUpBill = (bill) => {
  const splitedAmount = parseFloat((bill.amount / bill.group.length).toFixed(1))

  return R
    .filter(member => member !== bill.owner, bill.group)
    .map(member => {
      return {
        from: member,
        to: bill.owner,
        amount: splitedAmount
      }
    })
}

const splits = (bills) => {
  return R
    .flatten(R
      .map(splitUpBill, bills))
}

export default { splitUpBill, splits }