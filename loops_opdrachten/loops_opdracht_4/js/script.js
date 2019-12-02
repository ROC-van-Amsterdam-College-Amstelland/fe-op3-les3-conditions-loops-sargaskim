function go(){
    var numbers ="";
        for(i = 0; i <= 1000; i+=10){
            numbers +="<br>" + i;
        }
    
    document.getElementById("output1").innerHTML = numbers;
    console.log(numbers) 
    }
    