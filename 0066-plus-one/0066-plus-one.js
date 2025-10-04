/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const lastDigit=digits.length-1
    let carry =0;
  if(digits[lastDigit]<=8)
  {
    digits[lastDigit]=digits[lastDigit]+1
    return digits
  }
  else
  {
    for(let i=lastDigit;i>=0;i--)
    {
        if(digits[i]===9)
        {
            digits[i]=0;
            carry=1
        }
        else
        {
            digits[i]=digits[i]+carry;
            carry=0;
            break;
        }

    }
  }
  return carry>0?[1,...digits]:digits
};