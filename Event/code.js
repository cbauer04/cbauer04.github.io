document.getElementById("id1").innerHTML = "Input Three Numbers"
var btn = document.getElementById("btn1");
btn.addEventListener('click', f);

function f (){
    var a = Number(document.getElementById("input1").value);
    var b = Number(document.getElementById("input2").value);
    var c = Number(document.getElementById("input3").value);

    var max = a > b ? a : b;
    max = max > c ? max : c;
    var max;
    if (a > b) {
        max = a;
    } else {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    document.getElementById("output").innerHTML = max;
}