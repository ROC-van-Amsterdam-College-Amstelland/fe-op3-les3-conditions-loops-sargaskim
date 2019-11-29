function rekenUitP(myOperator)
{
    var myNumber1=parseInt(document.getElementById("myNumber1").value);
    var myNumber2=parseInt(document.getElementById("myNumber2").value);
    var myUitkomst;

    if(myOperator=="+"){
        myUitkomst = myNumber1 + myNumber2;
    }
   
    document.getElementById("uitkomst").innerHTML = myNumber1 + myOperator + myNumber2 + " = " + myUitkomst;
}

function rekenUitM(myOperator)
{
    var myNumber1=parseInt(document.getElementById("myNumber1").value);
    var myNumber2=parseInt(document.getElementById("myNumber2").value);
    var myUitkomst;

    if(myOperator=="-"){
        myUitkomst = myNumber1 - myNumber2;
    }
        
    document.getElementById("uitkomst").innerHTML = myNumber1 + myOperator + myNumber2 + " = " + myUitkomst;
}

function rekenUitK(myOperator)
{
    var myNumber1=parseInt(document.getElementById("myNumber1").value);
    var myNumber2=parseInt(document.getElementById("myNumber2").value);
    var myUitkomst;

    if(myOperator=="*"){
        myUitkomst = myNumber1 * myNumber2;
    }
   
    document.getElementById("uitkomst").innerHTML = myNumber1 + myOperator + myNumber2 + " = " + myUitkomst;
}

function rekenUitD(myOperator)
{
    var myNumber1=parseInt(document.getElementById("myNumber1").value);
    var myNumber2=parseInt(document.getElementById("myNumber2").value);
    var myUitkomst;

    if(myOperator=="/"){
        myUitkomst = myNumber1 / myNumber2;
    }
   
    document.getElementById("uitkomst").innerHTML = myNumber1 + myOperator + myNumber2 + " = " + myUitkomst;
} 