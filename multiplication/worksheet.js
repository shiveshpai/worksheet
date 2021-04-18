var fromno = localStorage.getItem("from");
var tono = localStorage.getItem("to");
var randomno1 = 0;
var randomno2 = 0;
var score = 0;

function newNumber() {
    document.getElementById("sum").value = "";
randomno1 = Math.floor(Math.random() * tono);
randomno2 = Math.floor(Math.random() * tono);
product = randomno1 * randomno2 ;
document.getElementById("a1").innerHTML = randomno1 + " × " + randomno2 + " =";
document.getElementById("2").innerHTML = product;
document.getElementById("sum").focus = true;
}

function check() {
    if(document.getElementById("sum").value == product) {
      score = score + 1;
      newNumber();
    } else {
        newNumber();
    }
    document.getElementById("sum").value = "";
    document.getElementById("sum").focus = true;
}
function showscore() {
    alert("Your Score is " + score + " Points");
    window.location = "worksheet.html";
    }