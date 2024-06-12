import math from "./cal/math.js";
const display_result_ele = document.querySelector('#output')
const display_input_ele = document.querySelector('#input')
const inputs_ele = document.querySelectorAll('.input')
const action_ele = document.querySelectorAll('.action')

class Calculator{    
    constructor(){
        this.entry = ''
        this.result = ''
        this.entries = ''
    }
    getEntry(entry){
        this.entry = entry
        return this.filterEntries()    
    }
    filterEntries(){
        this.entries += this.entry
        const firstItem = this.entries[0]
        const arrlength = this.entries.length
        const lastItem = this.entries[arrlength - 1]
        const secondtothelast = this.entries[arrlength - 2]
        const match = ['/', '*', '+', '-', '.']
        const match1 = ['/', '*', '+', '.', '%']
        
        if(match1.includes(firstItem) && match1.includes(lastItem)) return this.entries = this.entries.slice(0, -1)
        if(match.includes(secondtothelast) && match.includes(lastItem)) return this.entries = this.entries.slice(0, -1)
        return this.entries  
    }
    fitterinput(){
         this.entries = this.entries.split('').filter((item) => {
            if(item === '%') item = !item
            return item 
        }).join('')
        return this.entries
    }
    deleteEntry(){
        return this.entries = this.entries.slice(0, -1)
    }
    clearallEntries(){
        return this.entries = ''
    }
    evaluateEntries(){
        return this.entries = math(this.fitterinput()).toString()
    }
    evaluatePercentageEntry(){
      return this.entries = parseFloat(this.entries) / 100
    }
}

const calculator = new Calculator()

for(const input of inputs_ele){
    input.addEventListener('click', (e)=>{
        if(input.dataset.key === '%') {
            display_result_ele.innerHTML = calculator.evaluatePercentageEntry()
        }
        display_input_ele.value = calculator.getEntry(input.dataset.key)
    })
}
for(const action of action_ele){
    action.addEventListener('click', (e)=>{ 
        if(action.dataset.key === '=') display_result_ele.innerHTML = calculator.evaluateEntries()
        if(action.dataset.key === 'D') display_input_ele.value = calculator.deleteEntry()
        if(action.dataset.key === 'C') display_result_ele.innerHTML = display_input_ele.value =  calculator.clearallEntries()
    })
}