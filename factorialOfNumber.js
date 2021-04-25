var x = prompt("Enter the number of which you want to find the factorial");
var i = 1;
var factX = 1;


while (i <= x) {
    factX *= i;
    i++;
}
document.write("<h1>Your answer is:</h1>",factX)