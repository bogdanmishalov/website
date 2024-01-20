let l = false;
document.addEventListener('DOMContentLoaded', function() {
const savedValue = localStorage.getItem('savedNumber');
const numberObject = {
  value: savedValue ? parseInt(savedValue) : 0
};
numberObject.value++;
localStorage.setItem('savedNumber', numberObject.value);
const countsElement = document.getElementById('pon');
  countsElement.innerHTML = `Количество посещений: ${numberObject.value}`;
});
function on() {
  if (l == false) {   document.getElementById('on').src='image/1704703164380.png';
document.body.style.backgroundColor = "#1C1C1C" ;  document.getElementById("header").style.backgroundColor = "#181513";  document.getElementById("footer").style.backgroundColor = "#181513";
document.querySelector("main").style.color = "white";
return l = true;
  } else if (l == true) {  
document.getElementById('on').src="image/1704703164627.png";               
document.body.style.backgroundColor = "white"; 
document.getElementById("header").style.backgroundColor = "#1E5945"; 
document.getElementById("footer").style.backgroundColor = "#1E5945";
document.querySelector("main").style.color = "black";
return l = false;
  }
}
