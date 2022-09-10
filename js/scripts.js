// Business Logic

function createArray(number) {
  if (number === '0') {
    return "Eror: You must enter a number greater than zero if you want me to talk to you (other than this sentence)!";
  } else {
    let newArray = [];
    for (let i = 0; i<=number; i+=1) {
      newArray.push(i);
    }
    return newArray;
  }
};

function replaceNumbers(newArray) {

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
