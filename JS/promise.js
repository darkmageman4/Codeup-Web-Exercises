// TODO: using fetch(), make a simple GET request to this api:
//  “https://dog.ceo/api/breeds/image/random” and
//  append this image to the image element with an id of “random-dog-image”

// fetch(`https://dog.ceo/api/breeds/image/random`,{
//     method: "GET",
// })
//     .then(function (data){
//         $("random-dog-image").append(data)
//     })

fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(response => response.json())
    .then(data=>{
        // console.log(`Who let the dogs out!`, data)
        $("#random-dog-image").attr("src",data.message)
    })
.catch(error =>{
    console.error(error)
    alert("You did! You let the dogs out")
})

// TODO: create a second GET request to return the blog post with an id of 11 and display that blog post on the dom.
fetch('https://jsonplaceholder.typicode.com/posts') // make a request - GET
    .then(response => response.json())
    .then(data =>{
        console.log(data[10]);
        $(".morningExercise").replaceWith(JSON.stringify(data[10]));
    }) // we have the data in json format, now we can manipulate it
    .catch(error => {
        console.error(error);
    });

