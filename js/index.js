const header = document.querySelector('.js-header');

function fixedMenu(){
    console.log(window.pageYOffset);
    if (window.pageYOffset >= 80){
        header.classList.add('fixed-menu');
        console.log('teste')
    } else {
        header.classList.remove('fixed-menu');
    }
}

window.addEventListener('scroll', fixedMenu);