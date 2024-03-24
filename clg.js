var fname,fmail,fsub;
function form()
{
    fname =document.getElementById('name');
    fmail =document.getElementById('mail');
    fsub =document.getElementById('sub');
    
    if(fname.value==""|| fmail.value=="" || fsub.value=="")
    {
        alert("Please put Your Query");         
        errormsg();

    }
    else
    {
        alert("Thanks For Responding");
        window.location="index.html"
    }

}
function myFunction() {
    document.getElementById("menulist").classList.toggle("show");
    };

function errormsg()
{
    fname.value="";
    fmail.value="";
    fsub.value="";
}