<!--TODO: Find a way to display the text from the input to the div with id 'post-container' when a user clicks the search button-->
//call function
searchFor();

// id for BTN
    function searchFor() {
        document.getElementById("input-btn")
            .addEventListener("click", addText)
    }

//id for button input field
    function addText(e) {
        e.preventDefault();
        console.log("dog")
        document.getElementById('post-container')
            .textContent = document.getElementById('search-btn').value;
    }

    <!--TODO: When the text is displayed, set the font/size/weight using the DOM (Vanilla JS or jQuery)-->
document.getElementById("post-container").style.color = "#ff0000";
document.getElementById("post-container").font. = "bold";
document.getElementById("post-container").style.font =




