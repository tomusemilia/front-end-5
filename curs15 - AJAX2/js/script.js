// $(document).ready( (document este o variabila; ready este o metoda)
//   function() {
//     console.log('DOM IS READY')
//   }
// )

$(domLoaded)

function domLoaded() {
  console.log('Dom loaded')
  
  var getShowsData = function(query) {
  $.ajax({  // metoda prin care facem call la un http
    url: "http://api.tvmaze.com/search/shows?q=" + query,
    method: "GET",
    success: manageData
    })
  }
  
   $('#invoke-ajax-test-call').on('click', function() {
    var query = $(`#search`).val() // .val citeste valoarea din input; operatie sincron
    getShowsData(query)
  })  
  
  
  
  function manageData (data, textStatus, jqXHR) {   // nu putem schimba ordinea parametrilor la request
    $(".container").html(renderHtml(data)) // .html e content din clasa container
//     console.log('data', data)
//     console.log('textStatus', textStatus)
//     console.log('Headers', jqXHR)
//     console.log('jqXHR',  jqXHR.getAllResponseHeaders()) // apelare headers
  }
  
//   function renderHtml(data) {
//     var html = `<ul>`
//      for (i = 0; i < data.length; i++) {  // for-ul e o iteratie
// //         console.log("Title: ", data.show[i].show.name);
//        html += `<li>` + data[i].show.name + `</li>`  // += concatenare
//       }
//        html += `</ul>`
//        return html;  
//   }
  

  function renderHtml(data) {
    var html;
     for (i = 0; i < data.length; i++) { 
       var name = data[i].show.name;
       var score = data[i].score;
       var url = data[i].show.url;
 
       html += `<li>` + name + " - " + score + " - " + `<a href=` + url + `>` + url + `</a>` + `</li>`
      }
       return html;     
 }
  
 

}
