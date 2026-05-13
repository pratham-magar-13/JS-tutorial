//Callback is ta function passed as an argument to another function to be executed later.
const sum=(a,b)=>
{
  console.log(a+b);
}
const calculator=(a,b,sumCallback)=>
{
  sumCallback(a,b);
}
output=calculator(5,6,sum)

//callback hell is the nested callback