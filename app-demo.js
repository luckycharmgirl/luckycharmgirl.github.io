/* Self closing mobile menu */

document.querySelectorAll(".nav-link").forEach((close)=>{
close.addEventListener("click",()=>{
document.getElementById("nav-btn").click()})
})



const player = new Plyr('#player', {volume: 0, muted: true, autoplay: true, loop:{active:true}, controls: [ 'play' ]})

player.on('ready', event => {player.play()})


const mySiema2=new Siema({
selector:'.siema2', loop:true, duration:200
})
setInterval(()=> mySiema2.next(), 2000)




var typed = new Typed('#typed',{ strings:[
 "Enjoy the creativity of coding",
 "Enjoy your own piece of cake",
 "Enjoy your own piece of internet",
 "More features will be added here soon ..."],
 backSpeed: 40, typeSpeed: 70, loop: true })




var images=['FEFCBF', 'C3DAFE', 'FED7D7'];
var imgs=document.getElementById('img');
var x = 0;
setInterval(slider, 3000);
function slider(){if(x<images.length){x=x+1;}
else{x=1;}
imgs.innerHTML="<img src=https://dummyimage.com/hd720/" + images[x - 1] + ">";}



/* Highlight syntax */

hljs.initHighlightingOnLoad()

/* Blender */

const car3d = document.createElement('img');
car3d.src = 'icons/car.gif' ;
document.querySelector('#blender').appendChild(car3d)

/* Designed by José Palrinhas */




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






Chart.defaults.global.defaultFontFamily = 'Poppins';

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
 type: 'bar',

data: {
  labels: [ 'Lucknow', 'Meerut', 'Allahabad', 'Varanasi', 'Aligarh', 'Saharanpur'],
  datasets:[{
    label:'Population',
    data:[ 2817, 2358, 1540, 1201, 909, 703 ],
    backgroundColor:[
      'rgba(255, 99, 132, 0.6)',
      'rgba(54, 162, 235, 0.6)',
      'rgba(255, 206, 86, 0.6)',
      'rgba(75, 192, 192, 0.6)',
       'rgba(153, 102, 255, 0.6)',
       'rgba(255, 159, 64, 0.6)' ],
barPercentage:1,
categoryPercentage:0.7,

     order:1,
      borderWidth:1,
      borderColor:'#111',
      hoverBorderWidth:1,
      hoverBorderColor:'#c00'
        },
   {
    label:'onReady',
    data:[ 2358, 1358, 1480, 1201, 1540, 703 ],
type: 'line', borderWidth:1,

pointHitRadius:20,
pointHoverRadius:9,
 borderColor:'#c00',

backgroundColor:'rgba(54, 162, 235, 0.2)',
 order:2
}

      ]

  },

options: {
  title: {
  display:true,
  text:'Largest Cities of UP (in thousands)' },
  legend: { display: false}

  }
});















var ctx2 = document.getElementById('myLine').getContext('2d');
var chart2 = new Chart(ctx2, {
 type: 'line',

data: {
  labels: [ 'USA', 'Brazil', 'India', 'Russia', 'South Africa', 'Peru'],
  datasets:[{
    label:'Total Deaths',
    data:[ 147342, 84207, 30660, 13046, 6093, 17654 ],
    backgroundColor:[
      'rgba(54, 162, 235, 0.6)'],
barPercentage:1,
categoryPercentage:0.7,

pointHitRadius:20,
pointHoverRadius:9,
     
      borderWidth:1,
      borderColor:'#111',
      hoverBorderWidth:1,
      hoverBorderColor:'#c00'
        }

      ]

  },

options: {
  title: {
  display:true,
  text:'Deaths in top Countries by Covid-19' },
  legend: { display: false}

  }
});

















fetch('https://corona.lmao.ninja/v2/countries/India') .then((response) => { return response.json(); }) .then((data) => { console.log(data); document.getElementById("country").innerHTML = data.country; document.getElementById("active").innerHTML = data.active.toLocaleString(); document.getElementById("cases").innerHTML = data.cases.toLocaleString(); document.getElementById("critical").innerHTML = data.critical.toLocaleString(); document.getElementById("death").innerHTML = data.deaths.toLocaleString(); document.getElementById("recovered").innerHTML = data.recovered.toLocaleString(); document.getElementById("tests").innerHTML = data.tests.toLocaleString(); document.getElementById("flag").src = data.countryInfo.flag; });








if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js')
    .then(reg => console.log('service worker registered'))
    .catch(err => console.log('service worker not registered', err)) }





const footerYear=document.querySelector("#footer-year")
const date=new Date()
const year=date.getFullYear()
footerYear.innerText=year;