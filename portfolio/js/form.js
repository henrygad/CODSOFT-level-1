const form_ele = document.querySelector('#form')


const handleform = (e)  => {
    e.preventDefault()
}


form_ele.addEventListener('submit', e=> handleform(e))