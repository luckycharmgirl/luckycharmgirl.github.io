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
content:'<div class="slb-box"><img src="img/lucky-charm-girl-hero-image.webp" alt="lucky charm girl hero image"><h3>Here&apos;s what you can do</h3><ul><li>First of all relax</li><li>Then breath</li></ul></div>',
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


/* Slideshow with opacity */

var images=['FEFCBF', 'C3DAFE', 'FED7D7'];
var imgs=document.getElementById('img');
var x = 0;
setInterval(slider, 3000);
function slider(){if(x<images.length){x=x+1;}
else{x=1;}
imgs.innerHTML="<img src=https://dummyimage.com/hd720/" + images[x - 1] + ">";}















/* Updating footer year with JavaScript */

const footerYear=document.querySelector("#footer-year")
const date=new Date()
const year=date.getFullYear()
footerYear.innerText=year;

/* RexArvind Web Services */