import evalute from "./cal/evalute.js";
const output_ele = document.querySelector('#output')
const input_ele = document.querySelector('#input')
const keys_ele = document.querySelectorAll('.key')
let keydata = ''
let inputValues = ''
let outputValue = ''

for(const keys of keys_ele){
    keys.addEventListener('click', ()=>{
        keydata = keys.dataset.key
       
        if(keydata === "AC"){
            inputValues = ''
            outputValue = ''
        }else if(keydata === '='){
            inputValues = outputValue
        }else if(keydata === 'DEL'){
            if(outputValue)inputValues = inputValues.slice(0, -2)
            else inputValues = inputValues.slice(0, -1)

        }else{ if(keyRepent(keydata, inputValues))inputValues += keydata}

        outputValue = evalute(keydata)
        input_ele.value = fillter(inputValues )
        output_ele.innerHTML = outputValue
    })
}

function keyRepent(value , value2) {
    const last_input = value2.slice(-1)
  
    if(value === '.' && last_input === '.' )return false 
    if(value === '+' && last_input === '+')return false 
    if(value === '-' && last_input === '-')return false  
    if(value === '*' && last_input === '*')return false  
    if(value === '/' && last_input === '/')return false  
    if(value === '%' && last_input === '%')return false 
 
    return true 
 } 

 function fillter(value){
    const firstValues = value.split('')

    if(firstValues[0] === '%')return firstValues[0] = ''
    else if(firstValues[0] === '/') return firstValues[0] = ''
    else if(firstValues[0] === '*') return firstValues[0] = ''
    else if(firstValues[0] === '+') return firstValues[0] = ''
    else if(firstValues[0] === '.') return firstValues[0] = ''
    else if(firstValues[0] === '=')firstValues[0] = ''
    else return firstValues.join('')
 }
 
