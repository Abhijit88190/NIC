
function validateInput()
{
  const charInput=document.getElementById('charInput');
  charInput.value=charInput.value.replace(/[^A-Za-z]/g,'');
}

function ValidateEmail()
{
   const emailInput=document.getElementById('email');
  const isValidEmail=/^[^\s@]+@[^\s@]+$/.test(emailInput.value);
  if(!isValidEmail)
    {
    alert('Please enter a valid email address');
    emailInput.value='';
   }
}

function validateInput1()
{
  const intInput=document.getElementById('intInput');
  intInput.value=intInput.value.replace(/\D/g,'');
}

function myfun()
{
   var a=document.getElementById("password").value;
   var b=document.getElementById("passwords").value;
   if(a != b)
   {
    document.getElementById("messages").innerHTML=" * * Password are not same";
    return false;
   }
}
