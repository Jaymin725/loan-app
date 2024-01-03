const amountEle = document.getElementById("amount");

const durationEle = document.getElementById("duration");
const duration_type = document.getElementById("duration-type");
const duration_range = document.getElementById("duration-range");

const loan_type = document.getElementById("loan-type");

const result = document.getElementById("result");

function changeDurationType() {
  durationEle.value = null;
  duration_range.value = 1;

  if (duration_type.value == "years") {
    duration_range.min = 1;
    duration_range.max = 10;
  } else {
    duration_range.min = 1;
    duration_range.max = 12;
  }
}

function changeDuration() {
  durationEle.value = duration_range.value;
}

function changeDurationRange() {
  duration_range.value = durationEle.value;
}

function calcInterest() {
  let amount, duration, rate, interest;
  
  if ((amount = amountEle.value) == "" || (duration = durationEle.value) == "" || (rate = loan_type.value) == "none") {
    result.innerHTML = "Enter Valid Inputs.";
    return;
  } else {
    if (duration_type.value == "months") {
      duration /= 12;
    }

    interest = amount * duration * (rate / 100);

    result.innerHTML = "Interest : " + interest;
  }
  
}