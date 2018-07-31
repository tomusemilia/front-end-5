$(domLoaded)

function domLoaded(){
  console.log("Dom loaded")
   
 // GET ALL
   var loadPosts = function() {
     $.ajax({
       url: "https://jsonplaceholder.typicode.com/posts/",
       // method: by default it's GET
       success: function(data) {
         console.log("Posts = ", data);
       }
     });
   }
   
   // GET ONE 
   var loadPost = function(id) {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts/" + id,
      success: function(data){
        console.log("Post = ", data);
      }
    })
  }
   
   // REQUEST TO CREATE A POST
   var createPost = function() {
     $.ajax({
       url: "https://jsonplaceholder.typicode.com/posts/",
       method: "POST",
       data: { // on data put the content
         title: "POST by Emilia",
         body: "Lorem ipsum",
         userId: 1
       },
       success: function(data) {
         console.log("Create POST = ", data);
         console.log("Create POST with ID = ", data.id);
         

     }     
     });
   }
   
   // REQUEST TO UPDATE A POST 
   var editPost = function(id) {
     $.ajax({
     url: "https://jsonplaceholder.typicode.com/posts/" + id, 
     method: "PUT",
     data: {
       title: "Edit post",
       body: "Edit post body",
       userId: 1
     },
     success: function(data) {
        console.log("Update POST = ", data);
     }
     });
   } 
    
   // REQUEST TO DELETE A POST
   var deletePost = function(id) {
     $.ajax({
       url: "https://jsonplaceholder.typicode.com/posts/" + id,
       method: "DELETE",
       success: function(data) {
          console.log("POST was deleted = ", data);

       }
     });
   }
   
   
  loadPosts();
  loadPost(3);
  loadPost(10);
  loadPost(50);
  
  createPost();
  
  editPost(1);
  editPost(10);

  deletePost(4);
  
}