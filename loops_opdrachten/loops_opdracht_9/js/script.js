function go(){
    var numbers ="";
        for(i = 1; i <= 5; i++){
    
        if (i == 5){
            document.getElementById("output1").innerHTML += i + " Het einde is bereikt!" + "<br>" + "<br>";
            door(); 
            break;
        }

        else{
            document.getElementById("output1").innerHTML += i + "<br>";
        }
    
    console.log(i);
    }
}
function door(){
    var numbers2 ="";
        for(i = 5; i >= 1; i--){

        if (i == 1){
            document.getElementById("output1").innerHTML += i + " Het begin is het begin" + "<br>" + "<br>";
            break;
        }

        else{
            document.getElementById("output1").innerHTML += i + "<br>";
        }
    
    console.log(i);
    }
    
}
