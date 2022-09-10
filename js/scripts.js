// Business Logic
function beepBoop(number) {
  if (number === 0) {
    return 'Error: You must enter a number greater than zero if you want me to talk to you (other than this sentence)!'
  }
  let originalArray = [];    
  for (let i = 0; i<=number; i+=1) {
      originalArray.push(i);      
    }
    
};



// UI Logic
function handleFormSubmission() {
  event.preventDefault();
  const number = document.getElementById("user-number").value;
  const originalArray = beepBoop(number);
  document.getElementById("computer-response").innerText = originalArray;


}

window.addEventListener("load", function() {
  document.querySelector("form#number-input").addEventListener("submit", handleFormSubmission);
});
