function Article(options) {
  options = options || {};
  this.id = options.id;
  this.title = options.title;
  this.body = options.body;
  this.userId = options.userId;
}

Article.prototype.getArticleDetails = function() {
  // we're saving the value of the current context (=article model)
  // later on, in the AJAX success function we'll set attributes on it
  
  var that = this;
  return $.get("https://jsonplaceholder.typicode.com/posts/" + this.id)
  .then(function(response) {
    that.title = response.title;
    that.body = response.body;
    that.userId = response.userId;
    console.log("This: ", this);
    console.log("That: ", that);

  });

}