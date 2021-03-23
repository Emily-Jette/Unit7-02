// This code decides if the number the user inputs is positive or negative and delivers a message accordingly

document.getElementById('button').addEventListener('click', comparison)
let userNumber = 0

function comparison () {
  // convert userNumber into integer
  userNumber = document.getElementById('input').value
  userNumber = parseInt(userNumber)
  if (userNumber < 0) {
    document.getElementById('answer').innerHTML = 'The number you wrote was negative'
  }else{
    document.getElementById('answer').innerHTML = 'The number you wrote was positive'
  }
}
