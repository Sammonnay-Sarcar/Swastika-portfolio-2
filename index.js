let toggleButton = document.getElementById("toggle-button");
let navbar = document.getElementById("navbar");
 toggleButton.addEventListener("click", ()=>{
     navbar.classList.toggle("hidden");

 })

var colorArray=["#FCD8D4", "#FDF6F0", "#F8E2CF", "#F5C6AA", "#FDD2BF", "#FCDEC0", "#FCDEC0"];
var achievementCard= document.getElementsByClassName("achievement-card");

for(var i =0;i<achievementCard.length;i++){
    var cIndex= [Math.floor(Math.random()*7)];
    achievementCard[i].style.backgroundColor= colorArray[cIndex];
}

var parameterCard= document.getElementsByClassName("parameter-card");

for(var i =0;i<parameterCard.length;i++){
    var cIndex= [Math.floor(Math.random()*7)];
    parameterCard[i].style.backgroundColor= colorArray[cIndex];
}