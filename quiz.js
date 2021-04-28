var count = 0;
function fn() {


    var rd1 = document.getElementById("rd1");
    var rd2 = document.getElementById("rd2");
    var rd3 = document.getElementById("rd3");
    var rd4 = document.getElementById("rd4");

    var rd5 = document.getElementById("rd5");
    var rd6 = document.getElementById("rd6");
    var rd7 = document.getElementById("rd7");
    var rd8 = document.getElementById("rd8");

    // var rd9 = document.getElementById("rd1");
    // var rd10 = document.getElementById("rd1");
    // var rd11 = document.getElementById("rd1");
    // var rd12 = document.getElementById("rd1");


    if (rd1.checked == true) {
        count++;
    }
    else {
        count -= 0.25;
    }

    if (rd6.checked == true) {
        count++;
    }
    else {
        count -= 0.25;
    }

    if (rd12.checked == true) {
        count++;
    }
    else {
        count -= 0.25;
    }

    if (rd14.checked == true) {
        count++;
    }
    else {
        count -= 0.25;
    }

    if (rd17.checked == true) {
        count++;
    }
    else {
        count -= 0.25;
    }

    if (rd22.checked == true) {
        count++;
    }
    else {
        count -= 0.25;
    }

    if (rd25.checked == true) {
        count++;
    }
    else {
        count -= 0.25;
    }

    if (rd30.checked == true) {
        count++;
    }
    else {
        count -= 0.25;
    }

    if (rd32.checked == true) {
        count++;
    }
    else {
        count -= 0.25;
    }

    if (rd38.checked == true) {
        count++;
    }
    else {
        count -= 0.25;
    }


    document.write("Your Score is " + count);

}