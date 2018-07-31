$(onHtmlLoaded)

function onHtmlLoaded() {
    console.log("DOM LOADED")
    var urlApi = "https://jsonplaceholder.typicode.com/posts/";
  
    $("#btn").on("click", function() {
    getTitle()
  })
  
  function getTitle() {
    var listContainer = $("#listTitle");
    $.ajax({
    url: urlApi,
    method: "GET",
    success: function(response) {
       for(var i = 0; i < response.length; i++) {
       var title = "<li>" + response[i].title + "</li>";
       listContainer.append(title);
      }
    console.log("List of TITLE: ", response);
    }
  });
 }
}
  
