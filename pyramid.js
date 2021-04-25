

for (var i = 0; i <= 100; i++) {
    for (var j = 100; j >= i; j--) {

        document.write("&nbsp&nbsp");
    }

    for (var k = 0; k <= i; k++) {
        document.write("+");
    }

    for (var l = 1; l <= i; l++) {
        document.write("+");
    }

    document.write("<br>");
}