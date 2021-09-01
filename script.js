//100% height. fix for smartphones.
var intro=document.getElementById("intro");
window.onload=function(){
var height=window.innerHeight;
intro.style.height=height+"px";
};
window.onresize=function(){
var height=window.innerHeight;
intro.style.height=height+"px";
indicator.style.width="0";
};


window.onscroll=function (){
var scrollVertical=window.scrollY;
intro.style.backgroundPosition=`0% ${scrollVertical*0.5}px`;
scrollf();
};

//to top button
var toTop=document.querySelector("#toTop");
function scrollf(){
if (document.body.scrollTop>20||document.documentElement.scrollTop>20){
toTop.style.display="block";
}
else {
toTop.style.display="none";
}
}

function topf(){
document.body.scrollTop=0;
document.documentElement.scrollTop=0;
}
toTop.addEventListener("click",topf);

//navigation bar 
var navBtn=document.querySelector("#navBtn");
var togglerIcon=document.querySelector("#togglerIcon");
var navbar=document.querySelector("#navbar");

//changing menu icon
function iconChanger(){
var navShow=navbar.classList.contains("show");
var navCollapse=navbar.classList.contains("collapsing");
if (navShow==false && navCollapse==false){
togglerIcon.className="fas fa-times";
}
else if(navShow==true && navCollapse==false){
togglerIcon.className="fas fa-bars";
}

}
navBtn.addEventListener("click",iconChanger);

var navItems=document.querySelectorAll(".nav-item");
var navLinks=document.querySelectorAll(".nav-link");

// navigation marker
var indicator=document.querySelector("#marker");
function marker(e){
indicator.style.left=e.offsetLeft+"px";
indicator.style.width=e.offsetWidth+"px";
}
navLinks.forEach(navLink=>navLink.addEventListener("click", (e)=>{marker(e.target)}));


//theme toggler
var themeToggler=document.querySelector("#themeToggler");
var myTheme=window.localStorage.getItem("theme");
if (myTheme==="dark"){
document.documentElement.setAttribute("data-theme","dark");
}

function themeChanger(){
var myTheme=window.localStorage.getItem("theme");
var html=document.documentElement;

if (myTheme==null || myTheme==="light"){
html.setAttribute("data-theme","dark");
localStorage.setItem("theme","dark");
}
else if (myTheme==="dark"){
html.setAttribute("data-theme","light");
localStorage.setItem("theme","light");
}
}

themeToggler.addEventListener("click",themeChanger);


// typewriting effect
var myName=document.getElementById("name");

var typewriter = new Typewriter(myName, {
    loop: true
});

typewriter.typeString('Hello World!')
    .pauseFor(1000)
    .deleteAll()
    .typeString("I'm Nafis")
    .pauseFor(200)
    .deleteChars(5)
    .typeString('<br><strong>NAFIS SADIQ</strong>.')
    .pauseFor(2500)
    .start();



//scroll reveal animations

ScrollReveal().reveal("#connect",{delay:200, duration:2000,distance:"100px",reset:true,useDelay:"once"});
ScrollReveal().reveal(".underline",{delay:500,duration:2500, distance:"40px",origin:"right", opacity:0,reset:true,useDelay:"once"});
ScrollReveal().reveal("#works .card",{delay:500,duration:2000,distance:"40px",origin:"left",reset:true,useDelay:"once"});
