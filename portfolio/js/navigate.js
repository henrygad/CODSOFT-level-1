import {navigateSmoothly} from './hook.js'

const header_logo_ele = document.querySelector('#header_logo')
const navlists_desktop_ele =  document.querySelectorAll('.header_nav_list_desktop')
const navlists_mobile_ele =  document.querySelectorAll('.header_nav_list_mobile')
const hero_btn_ele = document.querySelector('#hero_btn')

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

header_logo_ele.addEventListener('click', ()=> navigateSmoothly('header_section'))

hero_btn_ele.addEventListener('click', ()=> navigateSmoothly('contact_section'))

navlists_desktop_ele.forEach(ele=> {
    ele.addEventListener('click', ()=> navigateSmoothly(ele.id+'_section'))
})

navlists_mobile_ele.forEach(ele=> {
    ele.addEventListener('click', ()=> navigateSmoothly(ele.id+'_section'))
})