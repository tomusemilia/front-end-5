window.addEventListener("load", function() {
  var containerEl = document.getElementById("games-list");
  
  var gamesModel = new Games();

  gamesModel.getAll().then(function(response) {
    console.log(response);
  // Call displayAllGames function with the response from API
    displayAllGames(response);
  });
    
  function displayAllGames(gamesData) {
    for (var i = 0; i < gamesData.length; i++) {
    var game = new Game (gamesData[i]);
      displayGame(game);
      }
  }
  
  function displayGame(game) {
    var liEl = document.createElement('li');
    
    var titleEl = document.createElement('h1');
    titleEl.innerHTML = game.title;
    
    titleEl.addEventListener("click", function() {
      window.location = "http://cursuri-tomusemilia498423.codeanyapp.com/Homework%20Object%20and%20Classes/templates/game.html?gameId=" + game._id;
    });
    
    var descriptionEl = document.createElement('p');
    descriptionEl.innerHTML = game.description;
    
    liEl.appendChild(titleEl);
    liEl.appendChild(descriptionEl);
    
    containerEl.appendChild(liEl); 
  }

});

