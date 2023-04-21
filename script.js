
var display = document.getElementById("display")
var num1 = ""
var num2 = ""
var op = ""

function press(num) {
    num1 += num
    display.innerHTML = num1
}

function setOP(key) {
    op += key
    num2 = num1
    num1 = ""
}

function clr() {
    num1 = ""
    num2 = ""
    op = ""
    display.innerHTML = "0"
}

function calculate() {
    var a = parseFloat(num2)
    var b = parseFloat(num1)
    var result = 0;
    switch(op) {
        case "+":
            result = a + b
            break
        case "-":
            result = a - b
            break
        case "*":
            result = a * b
            break
        case "/":
            result = a / b
            break
    }
    num1 = result
    op = ""
    display.innerHTML = result
}


