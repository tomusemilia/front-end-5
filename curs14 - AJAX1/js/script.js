// $(document).ready(
//   function() {
//     console.log('DOM IS READY')
//   }
// )

$(domLoaded)

function domLoaded() {
  console.log('Dom loaded')
  
  var getShowsData = function () {
  $.ajax({  // metoda prin care facem call la un http
    url: "http://api.tvmaze.com/search/shows?q=girls",
    method: "GET",
    success: manageData
    })
  }
  
   $('#invoke-ajax-test-call').on('click', function() {
    getShowsData()
  })
  
  function manageData (data, textStatus, jqXHR) {   // nu putem schimba ordinea parametrilor la request
    $(".container").html(renderHtml(data))
//     console.log('data', data)
//     console.log('textStatus', textStatus)
//     console.log('Headers', jqXHR)
//     console.log('jqXHR',  jqXHR.getAllResponseHeaders()) // apelare headers
  }
  
  function renderHtml(data) {
    var html = `<ul>`
     for (i = 0; i < data.length; i++) {
//         console.log("Title: ", data.show[i].show.name);
       html += `<li>` + data[i].show.name + `</li>`
      }
       html += `</ul>`
       return html;
        
  }
  
 
}