  getName = function(callback) {
    var firstName = prompt("firstName")
    var lastName = prompt("lastName")
    var fullName;
    
    setTimeout(function() {
      fullName = firstName + " " + lastName
      if (typeof callback === "function") {
        callback (fullName)
      }
    }, 2000)
    
    return fullName;
  }