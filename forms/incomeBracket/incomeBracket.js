
submitButton.onclick=function(num){
  if (userIncome.value < 30000)
    return `With your income of ${userIncome.value} you are in a tax bracket of 8%.`
  else if (userIncome.value >= 30000 && userIncome.value < 99999)
    return `With your income of ${userIncome.value} you are in a tax bracket of 15%.`
  else if (userIncome.value > 99999)
    return `With your income of ${userIncome.value} you are in a tax bracket of 25%.`
}

taxInfo = submitButton.onclick


goAgainButton.onclick=function(){
  window.location.reload();
}
