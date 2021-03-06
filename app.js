/* Self closing mobile menu */

document.querySelectorAll(".nav-link").forEach((close)=>{
close.addEventListener("click",()=>{
document.getElementById("nav-btn").click()})
})


/* Preview gallery lightbox */

new SimpleLightbox({elements: '.preview-gallery-tiles a'})


/* Get started button in hero section */

function getStarted(){
SimpleLightbox.open({
content:'<div class="slb-box"><img src="gallery/i-am-lucky-to-have-a-friend-like-you.webp" alt="lucky charm girl"><h3>First of all, send a photo like this to someone special.</h3></div>',
elementClass: 'slbContentEl'})
}


/* Snackbar */

function snackbar(){
var snackbar = document.getElementById("snackbar")
snackbar.className="show"
setTimeout(function(){
snackbar.className=snackbar.className.replace("show", "")}, 3000)
}


/* Testimonials autoplay carousel */

const mySiema1=new Siema({
selector:'.siema1', loop:true, duration:200, perPage: { 200:1, 480:2, 900:3 } 
})
setInterval(()=> mySiema1.next(), 4000)




/* Accordions */

const accordionHeads = document.querySelectorAll(".accordion-item-header")

accordionHeads.forEach(itemHeader => {

itemHeader.addEventListener("click", event => {

const activeAccordion= document.querySelector(".accordion-item-header.active")

if(activeAccordion && activeAccordion!==itemHeader) {
activeAccordion.classList.toggle("active")
activeAccordion.nextElementSibling.style.maxHeight = 0 }

 itemHeader.classList.toggle("active")
    const accordionItemBody = itemHeader.nextElementSibling


if(itemHeader.classList.contains("active")) {
accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px"
} else {
  accordionItemBody.style.maxHeight = 0 }
    
  })
})










if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js')
    .then(reg => console.log('service worker registered'))
    .catch(err => console.log('service worker not registered', err)) }





/* Updating footer year with JavaScript */

const footerYear=document.querySelector("#footer-year")
const date=new Date()
const year=date.getFullYear()
footerYear.innerText=year;

/* RexArvind Web Services */