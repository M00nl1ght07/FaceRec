const headerIcon = document.querySelector('.header__icon');
const headerBody = document.querySelector('.header__body');
const body = document.querySelector('body');
headerIcon.addEventListener('click',menuBurger);

function menuBurger(){
    body.classList.toggle('_lock');
    headerBody.classList.toggle('_active');
    headerIcon.classList.toggle('_active');
}


let menuLinks = document.querySelectorAll('.header-menu__link');
for(let menuLink of menuLinks){
    menuLink.addEventListener('click',function(e){
        e.preventDefault();
    })
}

let linksMenu = document.querySelectorAll('.header-menu__link[data-goto]');
if(linksMenu.length > 0){
    for(let linkMenu of linksMenu){
        linkMenu.addEventListener('click',function(e){
            const clickLink = e.target;
            if(clickLink.dataset.goto && document.querySelector(clickLink.dataset.goto)){
                const goToBlock = document.querySelector(clickLink.dataset.goto);
                const goToBlockValue = goToBlock.getBoundingClientRect().top + scrollY - document.querySelector('.header').offsetHeight;

                window.scrollTo({
                    top: goToBlockValue,
                    behavior: 'smooth'
                })
            }
        })
    }
}
