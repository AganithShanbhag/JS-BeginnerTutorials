var x = prompt("Enter your Number");

document.write("<h1>How well do you know your number ?</h1>")

if (x % 2 == 0) {

    document.write("<br />The number is even");

}
else {
    document.write("<br />The Number is odd");
}

if (x > 0) {
    document.write("<br />The number is positive")
}
else {
    document.write("<br />The number is negative");
}


var countPrime = 0; //count shd not go more than 2 for prime no
var i;
for (i = 1; i <= Math.sqrt(x); i++) {
    if (x % i != 0) {
        countPrime++;
    }
}

if (countPrime == 1) {
    document.write("<br />The number is a prime No");
}
else {
    document.write("<br/>The number is a composite Number");
}