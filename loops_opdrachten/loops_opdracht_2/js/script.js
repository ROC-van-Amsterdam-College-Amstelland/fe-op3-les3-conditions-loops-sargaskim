function go(){
    var numbers ="";
        for(i = 20; i >= 0; i--){
            numbers += i + ", ";
        }
    
    document.getElementById("output1").innerHTML = numbers;
    console.log(numbers) 
    }
    
    