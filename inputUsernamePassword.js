function signUp() {

    var pass1 = document.getElementById("text3").value;
    var pass2 = document.getElementById("text2").value;

    if (pass1 != pass2) {
        alert("Passwords not matching... Try again");
        location.reload();
    }
    else {

        if (pass1.length < 8) {
            alert("Password too short... Shd include minimum 8 characters");
        }


        var arr = pass1.split(''), count = 0;

        for (var i = 0; i < pass1.length; i++) {

            if ((arr[i] == '!') || (arr[i] == '@') || (arr[i] == '#') || (arr[i] == '$') || (arr[i] == '%') || (arr[i] == '^')) {
                count++;
            }
        }

        if (count == 0) {
            alert("Password too weak... Throw in some special characters like '&' or '#', to make it Strong");
        }
        else {

            document.write("<h1>Your Profile is now Saved</h1>")
        }



    }
}