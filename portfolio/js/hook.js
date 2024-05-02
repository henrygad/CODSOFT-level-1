
export const getOnviewpiont = (id) => {
    const el_id = document.getElementById(id) 
    const rect = el_id.getBoundingClientRect()
      return(
        rect.top <= el_id.clientHeight / 2 &&
        rect.bottom >= el_id.clientHeight / 2
      )
    
}


export const navigateSmoothly = (id) => {
    const targer_el = document.getElementById(id) 
    const targetPositionY = targer_el.getBoundingClientRect().top
    const currentPostionY = window.pageYOffset
    const distance =  currentPostionY + targetPositionY

    window.scroll({top: distance, behavior: 'smooth'})
}
