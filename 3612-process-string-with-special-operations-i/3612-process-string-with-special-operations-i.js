/**
 * @param {string} s
 * @return {string}
 */
var processStr = function(s) {
   let res=''
   for(let i=0;i<s.length;i++)
    {
        let char=s[i]
        if(char=="*")
        {
            res=res.slice(0,-1)
        }
        else if(char=="#")
        {
           res=res.concat(res)
        }
        else if(char=="%")
        {
            let temp =''
            for(let i=res.length-1;i>=0;i--)
            {
               temp=temp.concat(res[i])
            }
            res=temp
        }
        else
        res=res.concat(s[i])
    }
    return res
};