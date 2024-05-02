import {projectsData} from './data.js'

const projects_ele = document.querySelector('#projects_container')
let displayList = ''


projectsData.map(ele => {
    displayList += `
        <div class="boxs">
            <div class="title_wrapper">
                <h3>${ele.title}</h3>
            </div>
            <div class="image_wrapper">
                <img src="${ele.imgUlr}" alt="project">
            </div>
            <div class="text_wrapper">
                <p>${ele.description}</p>
            </div>
            <div class="btn_wrapper">
                <a class="btn" href="${ele.liveLink}" target="_blank" >View project live <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAhUlEQVR4nO3UoQ3CQBiG4RrwMAOsQSfBMguWOWCRdgsUGnTTh1RcEFTQpJ8g8Pj73+Tu8lfV39xQpwM9TlimAkWLbTIweOCQDBQXrJOBwRW7sQM38+lwxCIVKBpskoHXBwgG7th/3RV1b48c/6ZTGXfGavKwDwLRVdGmll2fXtd1ZHD1s54nOPIt4ViWuQAAAABJRU5ErkJggg=="></a>
                <a class="btn" href="${ele.githubLink}"  target="_blank">Source code </a>
            </div>
        </div>
    `
})

projects_ele.innerHTML = displayList
