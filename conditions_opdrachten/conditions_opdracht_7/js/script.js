function start()
{
var myNumber=document.getElementById("myNumber").value;

    if(myNumber <= 5){
        document.getElementById("comment").innerHTML = "Je hebt een onveldoene"
        document.getElementById("inputcontainer").style.backgroundColor = "red"
    }

    else if(myNumber > 5 && myNumber <= 10){
        document.getElementById("comment").innerHTML = "Je hebt een veldoene"
        document.getElementById("inputcontainer").style.backgroundColor = "green"
    }

    else{
        document.getElementById("comment").innerHTML = "Er is iets fout gegaan"
        document.getElementById("inputcontainer").style.backgroundColor = "white"
    }
}