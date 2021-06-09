// TODO: create a JSON object about your favorite hobby. make sure to include at least one of every data type that can
//  be accepted as values

// TODO: using https://jsonplaceholder.typicode.com/ make an ajax request to the comments endpoint and console it.
console.log($.ajax('https://jsonplaceholder.typicode.com/comments'))

$.ajax('https://jsonplaceholder.typicode.com/comments',{
    type: "GET"
}).done(function(data) {
   console.log(data)
})



// TODO: make a POST request to the '/posts' endpoint, make sure to include any data required for that post to be made successfully $.ajax("https://jsonplaceholder.typicode.com/"

$.ajax("https://jsonplaceholder.typicode.com/posts",{
    type: "POST",
    data: {
        name: "ALL MIGHTY",
        location: "miami",
    }
}).done(function(data) {
    // console.log(data)
});


$.ajax("https://jsonplaceholder.typicode.com/posts",{
    type: "POST",
    success: function (){
        // alert("this worked")
    },
    error: function (){
        // alert("an error ")
    },
    data: {
        name: "ALL MIGHTY",
        location: "miami",
    }
}).fail(function (data,status,jqXhr){
    // alert("sorry something went wrong")
}).always(function (){
    // alert("Thank you")
});

$.ajax("https://jsonplaceholder.typicode.com/posts")
    .done(function(data){
        // console.log(typeof data);
        let allPosts = data
        let dataID = allPosts[25].id
        // console.log(dataID)
    });


