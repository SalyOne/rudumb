let noButt= document.querySelector("#noButt");
let yesButt= document.querySelector("#yesButt");
let container= document.querySelector(".container");
let hidden= document.querySelector(".hidden");

yesButt.addEventListener("click", function(event){
    container.style.display="none";
    hidden.style.display="block";
})
noButt.addEventListener("click", function(event){
    this.style.transform = "translate(" + getRandomInt(100) + "px," + getRandomInt(100) + "px)"
    // this.style.transform = "translate(40px,50px)";
    console.log(this.transform)
})

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }