let arr = '1+2-1+3*3/6(-5)+(2*(1-3))'

let pattern = /\((.*?)\)/g;
let result = arr.match(pattern)
//console.log(result)