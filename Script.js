var child = document.getElementById("nav-child");
var back = document.getElementById("back");
child.onclick = function() {
  if (back.style.display === "none") {
    back.style.display = "block"; 
  } else {
    back.style.display = "none"; 
  }
};


var stick  = document.getElementById("stick");
window.onscroll = function(){
  if(document.body.scrollTop > 60 || document.documentElement.scrollTop > 60){
    stick.classList.add("sticky");
  }
  else{
    stick.classList.remove("sticky");
  }
}


var menu = document.getElementById("menus");
var bar  =document.getElementById("bar");
var cross  =document.getElementById("cross");
var body = document.querySelector("body");
bar.onclick = function(){
bar.style.display="none";
cross.style.display = "block";
menu.style.top = "0";
menu.classList.add("rotate");
};
cross.onclick = function(){
  bar.style.display="block";
  cross.style.display = "none";
  menu.style.top = "-100%";
  };



  var teco  = document.getElementById("teco");
  var teo  = document.getElementById("teo");
  var tcs  = document.getElementById("tcs");
  var mak = document.getElementById("mak-book")
  teo.onclick = function(){
  teco.style.display = "block";
  teo.style.display = "none";
  tcs.style.display = "block";
  mak.style.fontSize = "14px";
  }
  tcs.onclick = function(){
    teco.style.display = "none";
    teo.style.display = "block";
    tcs.style.display = "none";
    mak.style.fontSize = "16px";
    }







    const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});



// =====================Dummy Text=========================
var dumText = document.getElementById("dumy-text");
var dummy = document.getElementById("dummy");
var set1 = document.getElementById("set1");
var set2 = document.getElementById("set2");
var dumd1 = document.getElementById("dumd1");
var dumd2 = document.getElementById("dumd2");
dummy.onclick = function(){
  if(dumText.style.display === "none"){
    dumText.style.display = "block";
    dummy.innerHTML = "See Less";
  }
  else{
    dumText.style.display = "none";
    dummy.innerHTML = "See More";
  }
}

set1.onclick = function(){
  if(dumd1.style.display === "none"){
    dumd1.style.display = "block";
    set1.innerHTML = "See Less";
  }
  else{
    dumd1.style.display = "none";
    set1.innerHTML = "See More";
  }
}


set2.onclick = function(){
  if(dumd2.style.display === "none"){
    dumd2.style.display = "block";
    set2.innerHTML = "See Less";
  }
  else{
    dumd2.style.display = "none";
    set2.innerHTML = "See More";
  }
}

