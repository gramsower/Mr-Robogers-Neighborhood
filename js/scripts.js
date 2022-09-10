//Utility Logic
function isEmpty(testString) {
  return(testString.trim().length===0);
}

// Business Logic
function createArray(number) {
  if isEmpty(number) {
    return "You must enter a number!";
  }
  let newArray = [];
  for (let index=0; index=userInput; )

}




// UI Logic
function handleFormSubmission() {
  e.preventDefault();
  const userInput = document.getElementById("user-number").value;
}

window.addEventListener("load", function() {
  document.querySelector("form#number-input").addEventListener("submit", handleFormSubmission);
}
