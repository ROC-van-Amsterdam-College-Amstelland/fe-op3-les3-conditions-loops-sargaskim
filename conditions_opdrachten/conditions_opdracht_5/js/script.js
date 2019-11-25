function rekenUit(myOperator)
{
    var myNumber1=parseInt(document.getElementById("myNumber1").value);
    var myNumber2=parseInt(document.getElementById("myNumber2").value);
    var myUitkomst;

    if(myOperator=="+"){
        myUitkomst = myNumber1 + myNumber2;
    }
    else if(myOperator=="-"){
        myUitkomst = myNumber1 - myNumber2;
    }
    else{

    }

    document.getElementById("uitkomst").innerHTML = myNumber1 + myOperator + myNumber2 + " = " + myUitkomst;

}
