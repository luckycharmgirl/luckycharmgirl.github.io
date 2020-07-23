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
       'rgba(255, 159, 64, 0.6)',
       'rgba(255, 99, 132, 0.6)' ],
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

















function initMap(){
  var options = { zoom:10,
  center:{lat:26.8711,lng:80.9409} }

  var map = new google.maps.Map(document.getElementById('map'), options)

  google.maps.event.addListener(map, 'click', function(event){
 addMarker({coords:event.latLng})
  })

  var markers = [
{ coords:{lat:26.8711,lng:80.9409},
  iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
  content:'<h2>RexArvind</h2>' },

{ coords:{lat:26.8664,lng:80.9650},
  content:'<h2>RexArvind Web Services</h2>' },

{ coords:{lat:26.8654,lng:80.9750} }
]

  for(var i = 0;i < markers.length;i++){
    addMarker(markers[i]) }

  function addMarker(props){
  var marker = new google.maps.Marker({
    position:props.coords,
    map:map })

  if(props.iconImage){
    marker.setIcon(props.iconImage) }

  if(props.content){
    var infoWindow = new google.maps.InfoWindow({
  content:props.content })

  marker.addListener('click', function(){
            infoWindow.open(map, marker) })
        }
      }
    }









fetch('https://corona.lmao.ninja/v2/countries/India') .then((response) => { return response.json(); }) .then((data) => { console.log(data); document.getElementById("country").innerHTML = data.country; document.getElementById("active").innerHTML = data.active.toLocaleString(); document.getElementById("cases").innerHTML = data.cases.toLocaleString(); document.getElementById("critical").innerHTML = data.critical.toLocaleString(); document.getElementById("death").innerHTML = data.deaths.toLocaleString(); document.getElementById("recovered").innerHTML = data.recovered.toLocaleString(); document.getElementById("tests").innerHTML = data.tests.toLocaleString(); document.getElementById("flag").src = data.countryInfo.flag; });












const footerYear=document.querySelector("#footer-year")
const date=new Date()
const year=date.getFullYear()
footerYear.innerText=year;