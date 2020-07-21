/* Self closing mobile menu */
document.querySelectorAll(".nav-link").forEach((close)=>{
close.addEventListener("click",()=>{
document.getElementById("nav-btn").click()})
})




new SimpleLightbox({elements: '.preview-gallery-tiles a'})





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
selector: '.siema1', loop: true, duration: 200, perPage: { 200:1, 480: 2, 900: 3 } 
})

setInterval(()=> mySiema1.next(), 4000)










/* Highlight syntax */

hljs.initHighlightingOnLoad()


/* Updating footer year with JavaScript */

const footerYear=document.querySelector("#footer-year")
const date=new Date()
const year=date.getFullYear()
footerYear.innerText=year

