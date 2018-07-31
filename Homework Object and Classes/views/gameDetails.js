window.addEventListener("load", function() {
  var containerEl = document.getElementById("game-list");
  
  var game = new Game();
  var gameId = getUrlParameter("gameId");
  game._id = gameId;
  
  game.getGameDetails().then(function() {
    displayGameDetails(game);
  });
  
  function displayGameDetails(gameDetails) {
        var titleEl = document.createElement('h1');
        titleEl.innerHTML = gameDetails.title;
        containerEl.appendChild(titleEl);
        
        var descriptionEl = document.createElement('p');
        descriptionEl.innerHTML = gameDetails.description;
        containerEl.appendChild(descriptionEl);
 
    }
 
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }
  
});