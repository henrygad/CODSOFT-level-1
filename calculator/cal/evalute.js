const operators = ['+', '-', '*', '/', '%'] // default operators
let firstValues = '' // first value variable
let secondValues = '' // second value variable
let operation = '' // operation value sign variable
let getoperatorwithindex0 = '' // get the operators with the index of zore
let totalResult = '' // total result variable
let arrResult = [] // array result variable
let lastResult = '' // last result variable

function evalute(inputProps){
    //match each input to get operators
    const matchedOperator = operators.includes(inputProps) 

    //manupulate the incoming data to get the firstValue, operator and secondValue under the following condition
    if(firstValues && matchedOperator){
        operation = inputProps
    }else if(!operation){
        firstValues += inputProps
    }else if(operation){
        secondValues += inputProps
    }

    //prepare the incoming input before evaluating under the following conditions
    getoperatorwithindex0 = firstValues.split('')
    if(getoperatorwithindex0[0] === '%')return firstValues = ''
    if(getoperatorwithindex0[0] === '/') return firstValues = ''
    if(getoperatorwithindex0[0] === '*') return firstValues = ''
    if(getoperatorwithindex0[0] === '+') return firstValues = ''
    if(getoperatorwithindex0[0] === '-') if(!getoperatorwithindex0[1] && operation === '-') return firstValues = '-0'
    if(getoperatorwithindex0[0] === '.') return firstValues = ''
    if(getoperatorwithindex0[0] === '=')firstValues = ''

    //assign the totalResult variable evaluated to firstValue variable and return the rest variable to thier initail state to start a new calculation under the following condition
     if(lastResult){
        if(matchedOperator){
            firstValues = lastResult
            secondValues = ''
            totalResult = ''
            lastResult = ''
       }
    }
    
    //evaluation (calculate) run time basis calculation system under the following conditions
    if(operation === '%') {
       if(!secondValues) totalResult = ( parseFloat(firstValues) / 100)
       else totalResult = ( parseFloat(firstValues) / 100) * parseFloat(secondValues)
    }
    else if(operation === '/') totalResult = parseFloat(firstValues) / parseFloat(secondValues)
    else if(operation === '*') totalResult = parseFloat(firstValues) * parseFloat(secondValues)
    else if(operation === '+') totalResult = parseFloat(firstValues) + parseFloat(secondValues)
    else if(operation === '-') totalResult = parseFloat(firstValues) - parseFloat(secondValues)

    //return to previous totalResult under the following condition
    if(inputProps === 'DEL'){
        totalResult = ''
        secondValues = ''
        lastResult = ''
        operation = ''   
        arrResult = arrResult.slice(0, -1) 
        if(!arrResult[0]) firstValues =''
    }

    //delete the entire variable (system) to start a new calculation under the following condition
    if(inputProps === 'AC'){
        firstValues = ''
        secondValues = ''
        operation = ''
        totalResult = ''
        arrResult = []
        lastResult = ''
    }

    // push in each total result to the arrResult and assign the last result from the arrResult to lasResult varible under the following condition
    if(totalResult || totalResult === 0) arrResult.push(totalResult.toString()); lastResult = arrResult.slice(-1)[0]

    //return the evaluations under the following condition
     if(lastResult) return lastResult
     else return ''
}

export default evalute
