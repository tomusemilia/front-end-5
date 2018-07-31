$(domLoaded)

function domLoaded() {
  $("#button").on("click", function() {
    $("#spinner").css("visibility", "visible");
    $(".content").html("My name is: ", + fullName);
    
    // CALLBACK
    getName(function(fullName) {
      console.log("The name is: " + fullName)
    });
  })
//   getName(function(numeIntreg) {
//     console.log("The Name is: " + numeIntreg)
//   });
  
//   getName(function(name) {
//     alert("The second: " + name)
//   })
// 
}
