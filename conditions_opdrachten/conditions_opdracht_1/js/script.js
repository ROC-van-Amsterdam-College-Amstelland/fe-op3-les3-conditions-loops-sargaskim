function getSaldo()
{
var saldo=document.getElementById("saldo").value;

    if(saldo <=25 ) 
        {
        document.getElementById("comment").innerHTML = "Sorry, je hebt te weinig saldo!"
        }
    else if(saldo > 25 )
        {
        document.getElementById("comment").innerHTML = "Je hebt genoeg geld"

        }
 
}