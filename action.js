
function insert(num)
{
 document.form.textview.value=document.form.textview.value+num;
}
function equal()
{
    var exp=document.form.textview.value;
  try
  {   

        document.form.textview.value=eval(exp);
    
  }
  catch(err)
  {
    document.form.textview.value="Syntax Error";
  }
    
}
function back()
{
   var x= document.form.textview.value;
   document.form.textview.value=x.substring(0,x.length-1);

}

function clean()
{
  document.form.textview.value=""; 
}
