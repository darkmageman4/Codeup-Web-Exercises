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
    .then(data =>{
        console.log(data)
        $("#random-dog-image").attr("src",data.message)
    })
.catch(err =>{
    console.error(error)
    alert("You done goofed up!")

})

