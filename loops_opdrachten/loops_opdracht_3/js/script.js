function go(){
    var numbers ="";
        for(i = 1; i <= 50; i++){
            numbers +="<br>" + i;
        
    
        if([i] >= 20 && [i] <= 40)
            document.getElementById("output1").innerHTML= numbers += " Dit zijn mooie getallen";
        
    }
    document.getElementById("output1").innerHTML = numbers;
    console.log(numbers) 
    }
    
    