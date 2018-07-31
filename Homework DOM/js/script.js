 document.addEventListener("DOMContentLoaded", onHtmlLoaded);

 function onHtmlLoaded() {
   console.log("DOM fully loaded and parsed");
   
   var fname = document.getElementById("fname");
   var lname = document.getElementById("lname");
   var message = document.getElementById("message");
   var valid;
   var btn = document.getElementById("clickMe");
   btn.addEventListener("click", onSubmit);
   
   function makeBorder(element) {
     element.style.border = "1.5px solid #FF0000";
     valid = false;
   }
   
   function hideBorder(element) {
     element.style.border = "1.5px solid #088A08";
     valid = true;
   }
   
   function displayBanner() {
     var banner = document.querySelector("h2");
     banner.innerText = "Successfully," + fname.value;
     banner.style.visibility = "visible";
     banner.style.background = "#088A08";
     banner.style.border = "1px solid #585858";
     banner.style.padding = "3px";
     console.log("First name: ", fname.value);
     console.log("Last name: ", lname.value);
     console.log("Message:", message.value);
   }
   
   function hideBanner() {
     var banner = document.querySelector("h2");
     banner.style.visibility = "hidden";
   }
   
   function onSubmit() {
     valid = true;
     if (fname.value === "") {
       makeBorder(fname);
     } else {
       hideBorder(fname);
     }
     if (lname.value === "") {
       makeBorder(lname);
     } else {
       hideBorder(lname);
     }
     if (message.value === "") {
       makeBorder(message);
     } else {
       hideBorder(message);
     } 
     if (valid === true) {
       displayBanner();
     } else {
       hideBanner();
     }
    
      console.log((document.getElementById('gender').value));
   }
 }



