function go(){
    var mijnNummer=document.getElementById("mijnNummer").value;
    var numbers ="";
        for(i = 1; i <= mijnNummer; i++){
  
        document.getElementById("output1").innerHTML += i + "<br>";
        console.log(i);
        }
}

