var isHappy = function(n) {
  let slow =n;
  let fast =n;
    do
    {
        slow = findSquare(slow);
        fast = findSquare(findSquare(fast));

    }while(slow!=fast)
    return slow===1;
};
function findSquare(num)
{
    let sum=0;
    while(num>0)
    {
        const lastDigit=num%10;
        sum+=lastDigit*lastDigit;
        num = Math.floor(num / 10); 
     }
    return sum;
}