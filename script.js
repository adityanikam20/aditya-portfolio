const text = "whoami && echo 'Aditya Nikam - Software Developer'";
let i = 0;
const speed = 60;
const target = document.getElementById("type");
function typeEffect(){
if(target && i < text.length){
target.innerHTML += text.charAt(i);
i++;
setTimeout(typeEffect, speed);
}
}
typeEffect();
