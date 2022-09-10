// Business Logic

function beepBoop(number) {
  if (number === 0) {
    return 'Error: You must enter a number greater than zero if you want me to talk to you (other than this sentence)!'
  }
  let originalArray = [];    
  for (let i = 0; i<=number; i+=1) {
      originalArray.push(i);
    }
  let cloneArray = originalArray;
  return cloneArray;
  };


function replaceNumbers(createArray) {
  if 
}

// UI Logic
function handleFormSubmission() {
  e.preventDefault();
  const userNumber = document.getElementById("user-number").value;
  const 
}

window.addEventListener("load", function() {
  document.querySelector("form#number-input").addEventListener("submit", handleFormSubmission);
}
