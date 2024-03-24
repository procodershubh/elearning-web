var fname, fage,fmail,fcourse,fmobile;
function myform3()
{
    fname =document.getElementById('name');
    fage =document.getElementById('age');
    fmail =document.getElementById('mail');
    fcourse =document.getElementById('course');
    fmobile=document.getElementById("mobile");
    
    if(fname.value== "" || fage.value== "" || fmail.value== "" || fcourse.value== "" || fmobile.value== "")
    {
        alert("Invalid!  Please Fill This Form");
   
    }
    
    
    else if(fcourse.value=="MERN FULL STACK")
    {
        alert("thanks for choosing MERN STACK we will get in touch with you soon");
       window.location="index.html";
    }

    else if(fcourse.value=="JAVA FULL STACK")
    {
        alert("thanks for choosing JAVA STACK we will get in touch with you soon");
        window.location="index.html";
    }
    else if(fcourse.value=="FRONT-END")
    {
        alert("thanks for choosing FRONT-END DEVELOPER we will get in touch with you soon");
        window.location="index.html";
    }
    else if (fcourse.value=="WEB-DESIGN")
    {
        alert("thanks for choosing WEB-DESIGN we will get in touch with you soon");
        window.location="index.html";
    }

    
   
    
      
}




   