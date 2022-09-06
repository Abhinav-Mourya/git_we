let str="abhinav";

let s=0;
let e=str.length-1;

let flag=0;

while(s<=e)
{
    if(str[s]==str[e])
    {
        s++;
        e--;
    }
    else
    {
      flag++;
      break;
    }
}


if(flag==0)
{
    console.log("Palindrome");
}
else
{
 console.log("Not a Palindrome");
}