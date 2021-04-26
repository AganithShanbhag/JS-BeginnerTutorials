function decimalToBinary() {

    var result = [], i;

    var x = prompt("Enter the decimal number");


    for (i = x; i > 0; i = parseInt(i / 2)) {
        result.push(i % 2);
    }
    result = result.reverse();
    result = result.join("");


    document.getElementById("answer").innerHTML = "The result is : " + result;
}

function checkArmstrong() {

    // 153 = 1^3 + 5^3 + 3^3

    var number = prompt("Enter a Number (positive integer)");
    var y = number; //copy of number

    var digits = [], i, total=0;

    while (y > 0) {
        digits.push(y % 10);
        y = parseInt(y / 10);
    }

    for (i = 0; i < digits.length; i++) {
        total += digits[i] * digits[i] * digits[i];
    }
    if (total == number) {
        document.getElementById("answer").innerHTML = "It is an Amstrong Number";
    }
    else {
        document.getElementById("answer").innerHTML = "It is not an Amstrong Number";

    }


}