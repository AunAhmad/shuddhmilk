const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', (ev)=>{
    const navmenu = document.querySelector(".nav-menu");
    navmenu.classList.toggle("active");
    
})