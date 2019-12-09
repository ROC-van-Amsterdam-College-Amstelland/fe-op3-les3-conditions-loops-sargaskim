function go(){
    var numbers ="";
        for(i = 1; i <= 20; i++){
        

        if (i % 2 == 1){
        console.log(i);
        } 

        else if(i % 2 == 0) {
        document.getElementById("output1").innerHTML += i + "<br>";
        }
    }
}