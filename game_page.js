function send() {
 number_1 = document.getElementById("player1").value;
 number_2 = document.getElementById("player2").value;
 actual_answer = parseInt(number_1) * parseInt(number_2);
 question_number = "<h4>" + number_1 + " X "+ number_2 + "</h4>";
input_box = "<br>Answer : <input type='text' id='check_input_box'>";
check_button = "<br><br> <button class='btn btn-info' onclick='Check'>Check</button>";
row = question_number + input_box + check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("player1").value = "";
document.getElementById("player2").value = "";
}