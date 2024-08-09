//scroll effect
window.addEventListener('scroll',() =>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>0);
})
//show hide faq
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq =>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');
        //change icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'fa fa-plus')
            icon.className = 'fa fa-minus';
        else
           icon.className = 'fa fa-plus';
    })
})
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector(".open-menu-btn");
const closeBtn = document.querySelector(".close-menu-btn");
menuBtn.addEventListener('click',()=>{
    menu.style.display = "flex";
    menuBtn.style.display = "none";
    closeBtn.style.display = "inline-block";

})
//close nav menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}
closeBtn.addEventListener('click',closeNav)
window.addEventListener('resize',() =>{
    if(window.innerWidth>1080)
    {
        menu.style.display = "flex";
        closeBtn.style.display = "none";
        menuBtn.style.display = "none";
    }
    else{
        menuBtn.style.display = "inline-block";
        menu.style.display = "none";
        closeBtn.style.display = "none";
    }
})