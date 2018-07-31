// GET
function Game(options) {
  options = options || {};
  this._id = options._id;
  this.title = options.title;
  this.description = options.description;

}

Game.prototype.getGameDetails = function() {
  
  var that = this;
  return $.get("https://games-world.herokuapp.com/games/" + this._id)
  .then(function(response) {
    that.title = response.title;
    that.description = response.description;

  });

}

