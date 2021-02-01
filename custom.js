const getPin = document.getElementById("getPin");
const numberInput = document.getElementsByClassName("numberInput");
const doSubmit = document.getElementById("doSubmit");

//! Get Pin Number
getPin.addEventListener("click", function() {
    let randomNumber = Math.random()*10000 + " ";
    let newRandomNumber = randomNumber.split(".")[0];

    if (newRandomNumber.length == 4 && newRandomNumber.length < 5) {
        document.getElementById("randomPinInput").value = newRandomNumber;
    }
})

//! Number Input(right side)

var digitContainer = document.getElementById("digitContainer");
digitContainer.addEventListener("click", function(event) {
    var digit = event.target.innerText;

    if(isNaN(digit)) {
        var inputClear = document.getElementById("inputClear");
        inputClear.addEventListener("click", function(){
            document.getElementById("showNumberInput").value = " ";
        })

        var backSpace = document.getElementById("backSpace");
        backSpace.addEventListener("click", function() {
            var showNumberInput = document.getElementById("showNumberInput").value;
            var newShowNumberInput = showNumberInput.slice(0, -1);
            document.getElementById("showNumberInput").value = newShowNumberInput;
        })
    }
    else {
        var showNumberInput = document.getElementById("showNumberInput").value;
        showNumberInput = showNumberInput + digit;
        document.getElementById("showNumberInput").value = showNumberInput;

    }
})

// ! submit
doSubmit.addEventListener("click", function() {
    var randomPinInput = document.getElementById("randomPinInput").value;
    randomPinInput = parseInt(randomPinInput);
    var showNumberInput = document.getElementById("showNumberInput").value;
    showNumberInput = parseInt(showNumberInput);

    if ( randomPinInput != showNumberInput) {
        var notifyNegative = document.getElementById("notifyNegative");
        notifyNegative.style.display = "block";

        document.getElementById("tryOut").style.display = "block";
        var tryOutNumber = Number(document.getElementById("tryOutNumber").innerText);
        var tryOutLimit = tryOutNumber - 1;

        if (tryOutNumber > 0){
            document.getElementById("tryOutNumber").innerText = tryOutLimit;
        }
        else {
            document.getElementById("leftHalf").style.display = "none";
        }
    }
    else {
        var notifyPositive = document.getElementById("notifyPositive")
        notifyPositive.style.display = "block";
    }

    document.getElementById("randomPinInput").value = "";
    document.getElementById("showNumberInput").value = "";
})
