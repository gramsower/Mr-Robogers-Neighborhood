// Business Logic
function beepBoop(number) {
  if (number === '0') {
    return 'Error: You must enter a number greater than zero if you want me to talk to you (other than this sentence)!'
  }
  let originalArray = [];
  for (let i = 0; i<=number; i+=1) {
      originalArray.push(i);      
    }
  let newArray = [];
  originalArray.forEach(function(entry) {
    if (entry === 1) {
      newArray.push(" Beep!"); 
     } else if (entry === 2) {
      newArray.push(" Boop!");
     } else {
      newArray.push(entry);
     }
    })
   return newArray;
  };


// UI Logic
function handleFormSubmission() {
  event.preventDefault();
  const number = document.getElementById("user-number").value;
  const result = beepBoop(number);
  document.getElementById("computer-response").innerText = result;
}

window.addEventListener("load", function() {
  document.querySelector("form#number-input").addEventListener("submit", handleFormSubmission);
});
