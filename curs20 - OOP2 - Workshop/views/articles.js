// Afisare html:
window.addEventListener("load", function() {
  var containerEl = document.getElementById("articles-list");
  
  var articlesModel = new Articles();
  // ArticlesModel.getAll() returns 100 articles from the API 
  // The articles are set as input to the success function in then
  // Response will take the value
  articlesModel.getAll().then(function(response) {
  // Call displayAllArticles function with the response from API
    displayAllArticles(response);
  });
  
  // Exactly the same as:   articlesModel.getAll().then(function(response)
  
  function displayAllArticles(articlesData) {
    for (var i = 0; i < articlesData.length; i++) {
    var article = new Article (articlesData[i]);
      displayArticle(article);
      }
  }
  
  function displayArticle(article) {
    var liEl = document.createElement('li');
    
    var titleEl = document.createElement('h1');
    titleEl.innerHTML = article.title;
    
    titleEl.addEventListener("click", function() {
      window.location = "http://cursuri-tomusemilia498423.codeanyapp.com/curs20%20-%20OOP2%20-%20Workshop/templates/article.html?articleId=" + article.id;
    });
    
    var bodyEl = document.createElement('p');
    bodyEl.innerHTML = article.body;
    
    liEl.appendChild(titleEl);
    liEl.appendChild(bodyEl);
    
    containerEl.appendChild(liEl); 
  }
  
});