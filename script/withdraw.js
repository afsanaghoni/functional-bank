document.getElementById('withdraw-button').addEventListener('click', function () {
    const newWithdrawAmount = getInputValue('withdraw-input');
    const previousWithdraw = getTextValue('withdraw-total');
    const totalWithdraw = newWithdrawAmount + previousWithdraw;
    setValue('withdraw-total', totalWithdraw);
    const previousBalance = getTextValue('balance-total');
    const totalBalance = previousBalance - newWithdrawAmount;
    setValue('balance-total', totalBalance)
})