document.getElementById("id1").innerHTML = "What's My Paycheck?"
var btn = document.getElementById("btn1");
btn.addEventListener('click', f);

function f (){
    var normal_hour = Number(document.getElementById("input1").value);
    var normal_rate = Number(document.getElementById("input2").value);
    var overtime_rate = Number(document.getElementById("input3").value);
    var hours_worked = Number(document.getElementById("input4").value);

    var earned_money; 
    if (hours_worked <= normal_hour) {
        earned_money = hours_worked * normal_rate;
    } else {
      earned_money = (hours_worked - normal_hour)*overtime_rate;
      earned_money += normal_hour * normal_rate;
    }

    document.getElementById("output").innerHTML = earned_money + " dollars. ";