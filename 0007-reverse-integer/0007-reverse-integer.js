/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const MAX = 2147483647;
    const MIN = -2147483648;

    let result =0

    while(x!==0)
    {
        let remainder = x%10
        x=Math.trunc(x/10)
        if(result > Math.trunc(MAX/10)|| (result===Math.trunc(MAX/10) && remainder>7))
        return 0
        if(result < Math.trunc(MIN/10)|| (result===Math.trunc(MIN/10) && remainder<-8))
        return 0
        result = result*10 + remainder
    }
    return result
};