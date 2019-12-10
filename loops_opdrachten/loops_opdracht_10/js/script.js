function go(){
    var letters = ["A", "B", "C", "D", "E"];
    for(i = 0; i <= 4; i++){

        if(i == 0){
            document.getElementById("output1").innerHTML += letters[0] + "<br>";
        }

        else if(i == 1){
            document.getElementById("output1").innerHTML += letters[1] + "<br>";
        }

        else if(i == 2){
            document.getElementById("output1").innerHTML += letters[2] + "<br>";
        }

        else if(i == 3){
            document.getElementById("output1").innerHTML += letters[3] + "<br>";
        }

        else if(i == 4){
            document.getElementById("output1").innerHTML += letters[4] + "<br>";
        }

        else{
            alert("error")
        }
    }
}