let AboutComputerload = document.querySelector('#About-computer');
let SkillsComputerload = document.querySelector('#Skills-computer');
let ProjectsComputerload = document.querySelector('#Projects-computer');
let CurriculumComputerload = document.querySelector('#CV-computer');
let BlogComputerload = document.querySelector('#Blog-computer');
let load = document.querySelector('#loading-container');
/*--------Code--------*/
AboutComputerload.addEventListener('click', (e) => {
    e.preventDefault();
    load.style.display = 'flex';
    load.style.opacity = '1';
    setTimeout(() => {
        load.style.opacity = '0';
        setTimeout(() => {
            load.style.display = 'none';
        }, 300);
    }, 3800)
});
SkillsComputerload.addEventListener('click', (e) => {
    e.preventDefault();
    load.style.display = 'flex';
    load.style.opacity = '1';
    setTimeout(() => {
        load.style.opacity = '0';
        setTimeout(() => {
            load.style.display = 'none';
        }, 300);
    }, 3800)
});
ProjectsComputerload.addEventListener('click', (e) => {
    e.preventDefault();
    load.style.display = 'flex';
    load.style.opacity = '1';
    setTimeout(() => {
        load.style.opacity = '0';
        setTimeout(() => {
            load.style.display = 'none';
        }, 300);
    }, 3800)
});
CurriculumComputerload.addEventListener('click', (e) => {
    e.preventDefault();
    load.style.display = 'flex';
    load.style.opacity = '1';
    setTimeout(() => {
        load.style.opacity = '0';
        setTimeout(() => {
            load.style.display = 'none';
        }, 300);
    }, 3000)
});
