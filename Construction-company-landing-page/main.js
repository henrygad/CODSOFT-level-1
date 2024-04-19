const hamburgerOpen_ele = document.querySelector('#hamburger_open')
const hamburgerClose_ele = document.querySelector('#hamburger_close')
const mobileNavList_ele = document.querySelector('#mobile_nav_list')
const mobileNavListWrapper = document.querySelector('#mobile_nav_list_wrapper')

let isOpen  = false

const Handlemobilenav = () => {
    let value ;

    if(isOpen){
        isOpen = false
    }else if (!isOpen){
        isOpen = true
    }

    
    if(isOpen){
        value  = '0'
    }else{ 
        value = '-100%'
    }

    mobileNavListWrapper.style.right =  value
}


hamburgerOpen_ele.addEventListener('click', Handlemobilenav)
hamburgerClose_ele.addEventListener('click', Handlemobilenav)
mobileNavList_ele.addEventListener('click', Handlemobilenav)