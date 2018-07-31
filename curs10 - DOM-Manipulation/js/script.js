// Get element by ID 
console.log("Comments-list ", document.getElementById("comments-list"));

// SAFE DOM MANIPULATION
 window.addEventListener("load", function(event) {
 console.log("All resources finished loading!");
 });
// Recomandat de folosit - when document obj is available
 document.addEventListener("DOMContentLoaded", onHtmlLoaded);
 
function onHtmlLoaded() {
   console.log("DOM fully loaded and parsed");
  
  
  // By id
  console.log("Comments-list ", document.getElementById("comments-list"));
  // By class
  console.log("Comments-items ", document.getElementsByClassName("comment-items"));
  // first by class
  console.log("First comment ", document.getElementsByClassName("comment-items")[0]);
  // by tag name
  console.log("Comments items ", document.getElementsByTagName("section"));
  //  second by tag
  console.log("Second Comment", document.getElementsByTagName("section")[1]);
  // by class and tag
  console.log("First comment ", document.querySelector("section.comment-item"));
  // all by class and tag
  console.log("First comment ", document.querySelectorAll("section.comment-item"));
  //all users
  console.log("Users for comment ", document.querySelectorAll("section.comment-item strong"));


// Change h1 content
var h1 = document.querySelector("h1");
h1.innerText = "JS DOM Manipulation NEW"; // as string 
console.log("H1 text", h1.innerText);

h1.innerHTML = "JS DOM Manipulation <em>NEW</em>"; // as HTML 
console.log("H1 html", h1.innerHTML);

// Man1ipulate attribute
var h2 = document.querySelector("h2");
h2.setAttribute("title", "Comments-list"); // Set a attribute
console.log("Get attribute", h2.getAttribute("title"))
h2.id = "comment-list-id"; // set id
console.log("Comment list id", h2.id);

// Change style 
var commentsContainer = document.getElementById("comments-list");
commentsContainer.style.border = "solid 1px green";
  
var commentsItems = document.getElementsByClassName("comment-item");
for (var i = 0; i < commentsItems.length; i++) {
  commentsItems[i].style.border = "solid 2px red";
}

// Add new dom elements:
var commentItem = document.createElement("section");
  commentItem.className = "comment-item";
  commentItem.innerHTML = "<h3> New comment</h3>" +
                          "<p>New comment content<strong> author</strong></p>";
commentsContainer.appendChild(commentItem);
  
// Remove first commentItem
var commentItem = document.querySelector("section.comment-item");
commentsContainer.removeChild(commentItem);

// Add comments list
var list = [
  {
    title: "Title 1",
    body: "Lorem ipsum...",
    author: "Ion Pop"
  },
  {
    title: "Title 2",
    body: "Lorem ipsum...",
    author: "Ana Pop"
  }
];

for( var i = 0; i < list.length; i++) {
  var comment = list[i];
  var item = document.createElement("section");
  item.className = "comment-item";
  item.innerHTML = "<h3>" + comment.title + "</h3>" +
                    "<p>" + comment.body + "<strong>" + comment.author + "</strong></p>";
  commentsContainer.appendChild(item);
  
}
  var btnSearch = document.getElementById("btn-search");
  btnSearch.addEventListener("click", onSearch);
//   btnSearch.addEventListener("click", onSearch1);
//   btnSearch.addEventListener("click", onSearch2);

//   btnSearch.addEventListener("mouseover", onHover);

function onSearch() {
    alert(1);
  }
  // unbind from click event
//  btnSearch.removeEventListener("click", onSearch);
  
  }








