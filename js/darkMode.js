/*---Elements---*/
let imagentb = document.querySelector('#imgtb');
let body = document.querySelector('#About-me');
let modoOscuro = document.querySelector('#tb');
let modoOscuroResponsive = document.querySelector('#tbre');
let mainBody = document.querySelector('#About-me')
let arrowPage = document.querySelector('#arrow-container');
let text = document.querySelectorAll('.DarkText');
let title = document.querySelectorAll('.DarkTitle');
let cards = document.querySelectorAll('.DarkCard');
let cardSkill = document.querySelectorAll('.card');
let circle = document.querySelectorAll('.DarkCircle');
let loading = document.querySelectorAll('#loading-container');
let charge = document.querySelector('.color');
/*---Code---*/
if (localStorage.getItem("Theme") == null){
    localStorage.setItem("Theme", "oscuro");
    imagentb.src="./img/icons/moon.png";
}else{
    if(localStorage.getItem("Theme") == "claro"){
        imagentb.src="./img/icons/moon.png";
        body.classList.replace('Dark', 'White');
        mainBody.classList.replace('DarkBody', 'WhiteBody');
        arrowPage.classList.replace('DarkArrow','WhiteArrow');
        charge.classList.replace('DarkCharge','WhiteCharge');
        text.forEach(txt =>{
            txt.classList.replace('DarkText','WhiteText');
        })
        title.forEach(title =>{
            title.classList.replace('DarkTitle','WhiteTitle');
        })
        cards.forEach(cards =>{
            cards.classList.replace('DarkCard','WhiteCard');
        })
        cardSkill.forEach(card =>{
            card.classList.replace('DarkSkill','WhiteSkill');
        })
        circle.forEach(circle =>{
            circle.classList.replace('DarkCircle','WhiteCircle');
        })
        loading.forEach(load =>{
            load.classList.replace('Dark','White');
        })
    }else{
        imagentb.src="./img/icons/sun.png";
        body.classList.replace('White', 'Dark');
        mainBody.classList.replace('WhiteBody','DarkBody');
        arrowPage.classList.replace('WhiteArrow','DarkArrow');
        charge.classList.replace('WhiteCharge','DarkCharge');
        text.forEach(txt =>{
            txt.classList.replace('WhiteText','DarkText');
        })
        title.forEach(title =>{
            title.classList.replace('WhiteTitle','DarkTitle');
        })
        cards.forEach(cards =>{
            cards.classList.replace('WhiteCard','DarkCard');
        })
        cardSkill.forEach(card =>{
            card.classList.replace('WhiteSkill','DarkSkill');
        })
        circle.forEach(circle =>{
            circle.classList.replace('WhiteCircle','DarkCircle');
        })
        loading.forEach(load =>{
            load.classList.replace('White','Dark');
        })
    }
}
function cambiarModo(e){
    e.preventDefault();
    if(localStorage.getItem("Theme") == "claro"){
        localStorage.setItem("Theme", "oscuro");
        imagentb.src="./img/icons/sun.png";
        tbre.src="./img/icons/sun.png";
        body.classList.replace('White', 'Dark');
        mainBody.classList.replace('WhiteBody','DarkBody');
        arrowPage.classList.replace('WhiteArrow','DarkArrow');
        charge.classList.replace('WhiteCharge','DarkCharge');
        text.forEach(txt =>{
            txt.classList.replace('WhiteText','DarkText');
        })
        title.forEach(title =>{
            title.classList.replace('WhiteTitle','DarkTitle');
        })
        cards.forEach(cards =>{
            cards.classList.replace('WhiteCard','DarkCard');
        })
        cardSkill.forEach(card =>{
            card.classList.replace('WhiteSkill','DarkSkill');
        })
        circle.forEach(circle =>{
            circle.classList.replace('WhiteCircle','DarkCircle');
        })
        loading.forEach(load =>{
            load.classList.replace('White','Dark');
        })
    }else{
        localStorage.setItem("Theme", "claro");
        imagentb.src="./img/icons/moon.png";
        tbre.src="./img/icons/moon.png";
        body.classList.replace('Dark','White');
        mainBody.classList.replace('DarkBody', 'WhiteBody');
        arrowPage.classList.replace('DarkArrow','WhiteArrow');
        charge.classList.replace('DarkCharge','WhiteCharge');
        text.forEach(txt =>{
            txt.classList.replace('DarkText','WhiteText');
        })
        title.forEach(title =>{
            title.classList.replace('DarkTitle','WhiteTitle');
        })
        cards.forEach(cards =>{
            cards.classList.replace('DarkCard','WhiteCard');
        })
        cardSkill.forEach(card =>{
            card.classList.replace('DarkSkill','WhiteSkill');
        })
        circle.forEach(circle =>{
            circle.classList.replace('DarkCircle','WhiteCircle');
        })
        loading.forEach(load =>{
            load.classList.replace('Dark','White');
        })

    }
}

modoOscuro.addEventListener("click", (e)  =>{
    cambiarModo(e);
})

modoOscuroResponsive.addEventListener("click", (e)  =>{
    cambiarModo(e);
})