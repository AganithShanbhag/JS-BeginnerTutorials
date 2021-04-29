
/*

To generate option tag for z 2018 to 1980


for( var i = 2018; i>=1980; i--){

    
    document.write("&&option value=\'"+i + "\'>" + i+ "&&/option>");
    document.write("</br>")

}

To generate date 0 to 31
for (var i = 1; i<=31; i++){
    document.write("&&option value = \'" + i+ "\'>"+ i + "&&/option>");
    document.write("<br/>")
}

To generate Month 1 to 12



for( var i =1; i<=12; i++){

    document.write("&&option value = \'" + i + "\'>" + i + "&&/option>");
    document.write("<br/>")

}
*/

function func() {

    var x = document.getElementById("selectBox1").value;
    var y = document.getElementById("selectBox2").value;
    var z = document.getElementById("selectBox3").value;

    //console.log(x,y,z);


    //leap year

    if (y == 2) {
        if (x == 29) {

            /*
            Leap year 

            The year is multiple of 400.
            The year is multiple of 4 and not multiple of 100.
            */
            if (((z % 4 == 0) && (z % 100 != 0)) || (z % 400 == 0)) {

            }
            else {


                alert("Please enter valid Date!");
                location.reload();

            }
        }
    }

    if (y == 2) {
        if (x > 29) {
            alert("Please enter valid Date!");
            location.reload();
        }
    }

}