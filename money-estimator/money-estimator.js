function estimateTransactionFee(amountToSend) {
  const feePercentage = 0.015;
  let fee = amountToSend * feePercentage;

  if (fee < 10) {
    fee = 10;
  } else if (fee > 70) {
    fee = 70;
  }

  const totalDebited = amountToSend + fee;

  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${fee}`);
  console.log(`Total amount to be debited: KES ${totalDebited}`);
  console.log(`\nSend Money Securely!`);
}

// Get input
const input = prompt("Unatuma Ngapi? (KES):");
const amountToSend = Number(input);
estimateTransactionFee(amountToSend);
