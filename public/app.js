var inputID = document.getElementById("input")

function xyz(p) {
    inputID.value += p;
}

function equal() {
    inputID.value = eval(inputID.value)
}
function clearValue() {
    inputID.value = "";
}
function deleteValue() {
    inputID.value = inputID.value.slice(0, -1)
}
