var xhr = new XMLHttpRequest()

 xhr.open('GET', '')
/*window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementsByTagName("nav");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("body");
  } else {
    header.classList.remove("body");
  }
}*/

var row = document.querySelector("#row");

console.log(row);

const date = new Date().getFullYear();
const images = [
  {
    img:'./assets/photo_2020-08-05_18-55-31.jpg',
    title:'valentines'
  },
  {
    img:'./assets/photo_2020-08-05_18-56-46.jpg',
    title:'fathers'
  },
  {
    img:'./assets/photo_2020-08-05_18-56-54.jpg',
    title:"birhtday"
  },
  {
    img:'./assets/photo_2020-08-05_18-59-27.jpg',
    title:'mipan'
  }
  
];
function what(){
  images.forEach( (element, index)=> {
  document.querySelector("#row").innerHTML =`
  <img src="${element.img}" alt="image" style="width:100px;">
  <h2>name of the item ${element.title}</h2>
  <h3>Contact: Someone</h3>
  
`
console.log(element.title);
});
}

$('#id').click(function(){
  $("h1").hide(1000);
});
$('button').mouseenter(()=>{
  $('button').animate({ left: '250px',
                        opacity: '0.5'})
});
$('button').mouseleave(()=>{
  $('button').animate({ left: '250px',
                        opacity: '1'})
});
$("#id").click(function(){
  alert("Text: " + $("#id").html());
});

//$('nav').mouseenter(()=>{
  //$('nav').animate({ box-shadow: ' 0 1px 5px rgba(0,0,0,0.12), 0 1px 6px rgba(0,0,0,0.24)'})
//})