let span = document.querySelector(".up")

window.onscroll = function() {
    if(this.scrollY >= 500){
        span.classList.add("show")
    }else{
        span.classList.remove("show")
    }
};
span.onclick = function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth",

    });
};
const head =document.querySelector(".head")
const scrollWatcher =document.createElement("div")
scrollWatcher.setAttribute('data-scroll-watcher', '');
head.before(scrollWatcher);
const navObserver =new IntersectionObserver((entries) => {
    head.classList.toggle('stiky-nav', !entries[0].isIntersecting )
});
navObserver.observe(scrollWatcher);

let hamberg =document.querySelector(".hamberg");
let navMenu =document.querySelector(".nav-menu");

hamberg.addEventListener("click", ()=>{
    navMenu.classList.toggle("show-menu");
    
});
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",
 () => {
    navMenu.classList.remove("show-menu");
}));


