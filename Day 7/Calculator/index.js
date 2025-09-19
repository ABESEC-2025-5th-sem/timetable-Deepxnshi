const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const Output = document.getElementById("Output");
const error = document.getElementById("error");

const add = () => {
    const val1 = parseInt(num1.value);
    const val2 = parseInt(num2.value);
    if (isNaN(val1) || isNaN(val2)) {
        error.innerText = "Please enter valid numbers";
        Output.value = "";
    } else {
        error.innerText = "";
        Output.value = val1 + val2;
    }
}

const sub = () => {
    const val1 = parseInt(num1.value);
    const val2 = parseInt(num2.value);
    if (isNaN(val1) || isNaN(val2)) {
        error.innerText = "Please enter valid numbers";
        Output.value = "";
    } else {
        error.innerText = "";
        Output.value = val1 - val2;
    }
}

const mul = () => {
    const val1 = parseInt(num1.value);
    const val2 = parseInt(num2.value);
    if (isNaN(val1) || isNaN(val2)) {
        error.innerText = "Please enter valid numbers";
        Output.value = "";
    } else {
        error.innerText = "";
        Output.value = val1 * val2;
    }
}

const div = () => {
    const val1 = parseInt(num1.value);
    const val2 = parseInt(num2.value);
    if (isNaN(val1) || isNaN(val2)) {
        error.innerText = "Please enter valid numbers";
        Output.value = "";
    } else if (val2 === 0) {
        error.innerText = "Cannot divide by zero";
        Output.value = "";
    } else {
        error.innerText = "";
        Output.value = val1 / val2;
    }
}