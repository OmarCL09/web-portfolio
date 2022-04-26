/*-------Elements--------*/
let burgerMenu = document.querySelector('#display-menu-responsive');
let menuResponsive = document.querySelector('.responsive-information');
let AboutComputer = document.querySelector('#About-computer');
let SkillsComputer = document.querySelector('#Skills-computer');
let ProjectsComputer = document.querySelector('#Projects-computer');
let CurriculumComputer = document.querySelector('#CV-computer');
let BlogComputer = document.querySelector('#Blog-computer');
let AboutCell = document.querySelector('#About-cell');
let SkillsCell = document.querySelector('#Skills-cell');
let ProjectsCell = document.querySelector('#Projects-cell');
let CurriculumCell = document.querySelector('#CV-cell');
let BlogCell = document.querySelector('#Blog-cell');
let mainMessage = document.querySelector('.about-me-info');
let aboutMe = document.querySelector('.information-about-me');
let myProjects = document.querySelector('.my-projects');
let curriculumVitae = document.querySelector('.curriculum-vitae');
let myBlog = document.querySelector('.Blog-info');
let mySkills = document.querySelector('.my-skills');
let adviseMenu = true;
/*--------Functions--------*/
/*--------Burguer menu click display function---------*/
burgerMenu.addEventListener('click', (e) => {
    e.preventDefault();
    if(adviseMenu == false){
        menuResponsive.style.left = '-100%';
        adviseMenu = true;
        setTimeout(() => {
            menuResponsive.style.display = 'none';
        }, 200)
    }else{
        menuResponsive.style.display = 'flex';
        adviseMenu = false;
        setTimeout(() => {
            menuResponsive.style.left = '0%';
        }, 200)
    }
});
AboutCell.addEventListener('click', (e) =>{
    e.preventDefault();
    menuResponsive.style.left = '-100%'
    adviseMenu = true;
})
SkillsCell.addEventListener('click', (e) =>{
    e.preventDefault();
    menuResponsive.style.left = '-100%'
    adviseMenu = true;
})
ProjectsCell.addEventListener('click', (e) =>{
    e.preventDefault();
    menuResponsive.style.left = '-100%'
    adviseMenu = true;
})
CurriculumCell.addEventListener('click', (e) =>{
    e.preventDefault();
    menuResponsive.style.left = '-100%'
    adviseMenu = true;
})
BlogCell.addEventListener('click', (e) =>{
    e.preventDefault();
    menuResponsive.style.left = '-100%'
    adviseMenu = true;
})

/*-----------Sections clicks function-------------*/
/*-------SubElements--------*/
    AboutComputer.addEventListener('click', (e) => {
        e.preventDefault();
        mainMessage.style.display = 'none';
        aboutMe.style.display = 'flex';
        mySkills.style.display = 'none';
        myProjects.style.display = 'none';
        curriculumVitae.style.display = 'none';
        myBlog.style.display = 'none';
    });
    SkillsComputer.addEventListener('click', (e) => {
        e.preventDefault();
        mainMessage.style.display = 'none';
        aboutMe.style.display = 'none';
        mySkills.style.display = 'flex';
        myProjects.style.display = 'none';
        curriculumVitae.style.display = 'none';
        myBlog.style.display = 'none';
    });
    ProjectsComputer.addEventListener('click', (e) => {
        e.preventDefault();
        mainMessage.style.display = 'none';
        aboutMe.style.display = 'none';
        mySkills.style.display = 'none';
        myProjects.style.display = 'flex';
        curriculumVitae.style.display = 'none';
        myBlog.style.display = 'none';
    });
    CurriculumComputer.addEventListener('click', (e) => {
        e.preventDefault();
        mainMessage.style.display = 'none';
        aboutMe.style.display = 'none';
        mySkills.style.display = 'none';
        myProjects.style.display = 'none';
        curriculumVitae.style.display = 'flex';
        myBlog.style.display = 'none';
    });
    BlogComputer.addEventListener('click', (e) => {
        e.preventDefault();
        mainMessage.style.display = 'none';
        aboutMe.style.display = 'none';
        mySkills.style.display = 'none';
        myProjects.style.display = 'none';
        curriculumVitae.style.display = 'none';
        myBlog.style.display = 'flex';
    });
/*Cellphone*/
AboutCell.addEventListener('click', (e) => {
    e.preventDefault();
    mainMessage.style.display = 'none';
    aboutMe.style.display = 'flex';
    mySkills.style.display = 'none';
    myProjects.style.display = 'none';
    curriculumVitae.style.display = 'none';
    myBlog.style.display = 'none';
});
SkillsCell.addEventListener('click', (e) => {
    e.preventDefault();
    mainMessage.style.display = 'none';
    aboutMe.style.display = 'none';
    mySkills.style.display = 'flex';
    myProjects.style.display = 'none';
    curriculumVitae.style.display = 'none';
    myBlog.style.display = 'none';
});
ProjectsCell.addEventListener('click', (e) => {
    e.preventDefault();
    mainMessage.style.display = 'none';
    aboutMe.style.display = 'none';
    mySkills.style.display = 'none';
    myProjects.style.display = 'flex';
    curriculumVitae.style.display = 'none';
    myBlog.style.display = 'none';
});
CurriculumCell.addEventListener('click', (e) => {
    e.preventDefault();
    mainMessage.style.display = 'none';
    aboutMe.style.display = 'none';
    mySkills.style.display = 'none';
    myProjects.style.display = 'none';
    curriculumVitae.style.display = 'flex';
    myBlog.style.display = 'none';
});
BlogCell.addEventListener('click', (e) => {
    e.preventDefault();
    mainMessage.style.display = 'none';
    aboutMe.style.display = 'none';
    mySkills.style.display = 'none';
    myProjects.style.display = 'none';
    curriculumVitae.style.display = 'none';
    myBlog.style.display = 'flex';
});