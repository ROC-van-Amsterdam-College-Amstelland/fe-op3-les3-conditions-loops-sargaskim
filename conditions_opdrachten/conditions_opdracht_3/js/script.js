function getSaldo()
{
var saldo=document.getElementById("saldo").value;

    if(saldo == 500 ) 
        {
        document.getElementById("comment").innerHTML = "Je salaris is gestoirt"
        }
    else if (saldo > 500 )
        {
        document.getElementById("comment").innerHTML = "Je hebt een bonus gekregen!"
        }
    else 
        {    
        document.getElementById("comment").innerHTML = "Er is geen salaris gestort"
        }

}