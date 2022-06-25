function validateform()
{
    var fn=document.forms["regform"]["firstname"].value;
    var ln=document.forms["regform"]["lastname"].value;
    var gn=document.forms["regform"]["gender"];
    var ctry=document.forms["regform"]["country"];

    if(fn==null||fn=="")
    {
        alert("First name cannot be blank");
        return false;
    }
    else if(ln==null||ln=="")
    {
        alert("Last name cannot be blank");
        return false;
    }
    else if((gn[0].checked==false)&&(gn[1].checked==false))
    {
        alert("please enter you gender");
        return false;
    }
    else if(ctry.selectedIndex==0)
     {
        alert("Enter your country");
        return false;
     }    
}
