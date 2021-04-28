/* old school way 

var aboutMe = {

    name : 'Aganith Shanbhag',
    age: 19,
    nationality: 'Indian',

    printAboutMe : function() {
        document.write('Hello, my name is '+ aboutMe.name);
    }
}

aboutMe.printAboutMe();

*/


function aboutMe(name, age, nationality) {

    this.name = name;
    this.age = age;
    this.nationality = nationality;

    this.printAboutMe = function () {

        document.write("<br/><br/> Hello, my name is " + this.name + "<br/>");
        document.writeln("I am " + this.age + " years old" + "<br/>");
        document.writeln("I am an " + this.nationality);

    }

}

function person1() {
    var person1 = new aboutMe("Aganith Shanbhag", 19, "Indian");
    person1.printAboutMe();

}

function person2() {

    var person2 = new aboutMe("Mark zuckerberg", 36, "American");
    person2.printAboutMe();

}


