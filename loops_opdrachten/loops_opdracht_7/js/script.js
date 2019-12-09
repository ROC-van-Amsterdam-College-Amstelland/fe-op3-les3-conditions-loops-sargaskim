function go(){
    var numbers ="";
        for(i = 1; i <= 100; i++){
    
    if(i % 3 == 0 && i % 5 == 0){
        document.getElementById("output1").innerHTML += "<b>" + i + "</b>" + " Cool " + "<br>";    
    }

    else if(i % 5 == 0){
        document.getElementById("output1").innerHTML += i + " Cool " + "<br>";
    }

    else if(i % 3 == 0){
        document.getElementById("output1").innerHTML += "<b>" + i + "</b>" + "<br>";
    }

    else{
        document.getElementById("output1").innerHTML += i + "<br>";
    }
    
console.log(i)
}
}