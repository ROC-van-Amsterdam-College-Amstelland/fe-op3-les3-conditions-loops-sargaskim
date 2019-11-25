function getSaldo()
{
var saldo=document.getElementById("saldo").value;

    if(saldo >=25 ) 
        {
        document.getElementById("comment").innerHTML = "Je hebt voldoende saldo om € 25 op te nemen."
        }
    else if(saldo < 25 )
        {
        document.getElementById("comment").innerHTML = "Sorry, je hebt te weinig saldo!"

        }
 
}