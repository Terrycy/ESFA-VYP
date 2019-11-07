const mapRemittanceData = (data) => {
  const remittanceData = data;

  let remittanceObj = [];

  let temporaryDate = '';
  let temporaryID = 0;
  let lineRunningTotal = 0;
  let temporaryRemittanceLineItem;


  for (const lineItem in remittanceData) {
    if (remittanceData[lineItem].hasOwnProperty('date')) {
      const lineItemDate = remittanceData[lineItem].date;
      const lineItemID = Number(remittanceData[lineItem].remittanceID);
      let lineItemAmount = parseFloat(remittanceData[lineItem].amount.replace(/[^0-9.-]+/g,""));

      if (temporaryDate !== lineItemDate || lineItem == 0 || temporaryID !== lineItemID ) {
        lineRunningTotal = lineItemAmount;
        temporaryID = lineItemID;
        temporaryDate = lineItemDate;
        temporaryRemittanceLineItem = new RemittanceLineItem(lineItemDate, lineItemAmount, lineItem, lineItemID);

      } else {
        lineRunningTotal = parseFloat(lineRunningTotal) + lineItemAmount;
        temporaryRemittanceLineItem.addNewAmount(lineRunningTotal.toFixed(2));
      }
      remittanceObj.push(temporaryRemittanceLineItem)
    }

  }
  let unique = [...new Set(remittanceObj)];

  return unique;

}


class RemittanceLineItem {
  constructor(transactionDate, transactionAmount, transactionID, remittanceID) {
    this.transactionDate = transactionDate;
    this.transactionAmount = transactionAmount;
    this.lineID = transactionID;
    this.remittanceID = remittanceID
  }

  addNewAmount(newAmount) {
    this.transactionAmount = parseFloat(newAmount);
  }
}


const self = module.exports = {
  mapRemittanceData
}
