var computer = document.querySelector("#computer");
var bodyText = document.querySelectorAll(".body-text");
var addressText = document.querySelectorAll(".address");
var page = document.querySelector("#document");
var tag = document.querySelector("#tag");

computer.addEventListener("mouseover", function(){
    var tl = new TimelineMax();
    tl.set(tag, {height: 0});
    for (var i = 0; i < bodyText.length; i++){
      var currentBodyText = bodyText[i];
      tl.set(currentBodyText,{attr:{"x2": 54}, css:{"stroke-width": 0}});
    }
    
    for (var l = 0; l < addressText.length; l++){
        var currentAddressText = addressText[l];
        tl.set(currentAddressText,{attr:{"x2": 85}, css:{"stroke-width": 0}});
    }
    tl.to(page, 0.4, {y: 72});
    tl.to(tag, 0.5, {height: 4});
     
    for (var k = 0; k < addressText.length; k++){
      var currentAddressText = addressText[k];
      tl.set(currentAddressText, {css:{"stroke-width": 2}}); 
      tl.to(currentAddressText, 0.1, {attr:{"x2": 93}});
    }
  
    for (var i = 0; i < bodyText.length; i++){
      var currentBodyText = bodyText[i];
      tl.set(currentBodyText, {css:{"stroke-width": 2}}); 
      if (i == (bodyText.length -1)){ 
        tl.to(currentBodyText, 0.2, {attr:{"x2": 70}});
      } else {
        tl.to(currentBodyText, 0.2, {attr:{"x2": 85.61}});
      }
    }
  
}, false);

computer.addEventListener("mouseout", function(){
    var tlout = new TimelineMax();
    tlout.to(page, 0.3, {y: 0});
 
    for (var i = 0; i < bodyText.length; i++){
      var currentBodyText = bodyText[i];
      tlout.set(currentBodyText,{attr:{"x2": 54}, css:{"stroke-width": 0}});
    }
    
    for (var l = 0; l < addressText.length; l++){
        var currentAddressText = addressText[l];
        tlout.set(currentAddressText,{attr:{"x2": 85}, css:{"stroke-width": 0}});
    }
}, false);