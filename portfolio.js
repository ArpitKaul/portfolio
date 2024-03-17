var typed = new Typed(".auto-type",{
    strings: ["coder", " designer"],
    typeSpeed: 300,
    backspeed: 1,
    loop:true
})
var popup= document.getElementById("mypopup");
var btn=document.getElementById("mybtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function(){
    popup.style.display="block";
}
span.onclick = function(){
    popup.style.display="none";
}
window.onclick = function(event) {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  }