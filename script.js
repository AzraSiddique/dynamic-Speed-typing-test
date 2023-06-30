let timerEl = document.getElementById("timer");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let quoteInputEl = document.getElementById("quoteInput");
let spinnerEl = document.getElementById("spinner");
let resultEl = document.getElementById("result");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");
let counter = 0;

spinnerEl.classList.toggle("d-none");

function startTimer() {
    counter += 1;
    timerEl.textContent = counter;
    console.log(counter);
}
let counterVal = setInterval(startTimer, 1000);

function quote() {
    let options = {
        method: "GET"
    };
    fetch("https://apis.ccbp.in/random-quote", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinnerEl.classList.add("d-none");
            quoteDisplayEl.textContent = jsonData.content;
            console.log(jsonData.content);
        });
}
quote();
startTimer();

resetBtnEl.onclick = function() {
    spinnerEl.classList.remove("d-none");
    quote();
    startTimer();
    counter = 0;
    resultEl.textContent = "";
    quoteInputEl.value = "";
}
submitBtnEl.onclick = function() {
    if (quoteInputEl.value === quoteDisplayEl.textContent) {
        clearInterval(counterVal);
        resultEl.textContent = "You typed in " + counter + " seconds.";
    } else {
        resultEl.textContent = "You typed Incorrect sentence";
    }
}