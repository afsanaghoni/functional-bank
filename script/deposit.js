document.getElementById('deposit-button').addEventListener('click', function () {
    const newDipositAmount = getInputValue('deposit-input');
    const previousDeposit = getTextValue('deposit-total');
    const totalDeposit = newDipositAmount + previousDeposit;
    setValue('deposit-total', totalDeposit);
    const previousBalance = getTextValue('balance-total');
    const totalBalance = previousBalance + newDipositAmount;
    setValue('balance-total', totalBalance)
})