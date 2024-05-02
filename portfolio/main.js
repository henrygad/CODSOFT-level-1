import { getOnviewpiont} from './js/hook.js'

const mainHeader_ele = document.querySelector('#main_header')
const years_ele = document.querySelector('#years')
const projects_complated_ele = document.querySelector('#project_complated')
const skillimages_ele = document.querySelectorAll('.skillimages')
const resume_btn_wrapper_ele = document.querySelector('#resume_btn_wrapper')
let result = 0



    const hnadleheader = () => {
        mainHeader_ele.classList.toggle('header_toggle')
    }

       setTimeout(()=> {hnadleheader()}, 100)
