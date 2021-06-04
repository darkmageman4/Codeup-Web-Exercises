(function(){
    let jqElements = $('.jqClass');
    let backgroundBlue = 'lightblue';
    let backgroundReset = '';
    function addClickEvents(elementsToBind, color1, color2){
        let handlerBlueBckGnd = function(){
            elementsToBind.css('background-color', color1);
            $(this).css('background-color', color2);
        }
        elementsToBind.click(handlerBlueBckGnd);
    }
    addClickEvents(jqElements, backgroundReset, backgroundBlue);
    addClickEvents($(".card"), "", "red");
    // make sure the DOM is loaded first
    document.addEventListener("DOMContentLoaded", function() {
        addListeners();
    });
    // $(document).ready(function(addListeners);

    //parent method for adding all listeners
    function addListeners() {
        //get the elements to add listener and change image
        let cardContainers = Array.from(document.querySelectorAll(".col-md-3"));
        addEvents(cardContainers, 'kodak/jazz-music-rubber-duck.jpg', 'mouseover');
        addEvents(cardContainers, 'kodak/300x300.png', 'mouseout');

        // $( "#greatphoto" ).attr( "alt", "Beijing Brush Seller" );
//         let cardContainers = $(".col-md-3");
// addEvents(cardContainers,"kodak/jazz-music-rubber-duck.jpg","kodak/jazz-music-rubber-duck.jpg")
//     )
    //     $('.col-md-3').hover(
    //         function () {
    //             $(this).mouseenter( "kodak/jazz-music-rubber-duck.jpg");
    //         },
    //         function () {
    //             $(this).mouseleave("kodak/question.png");
    //         }
    //     );
    }

    //add mouseover/mouseout events to all selected elements
    function addEvents(cardContainers, imgPath, listenerType){
        cardContainers.forEach((cc) => {
            let card = cc;
            //create listener which will call function change the image
            let listener = function (event) {
                let cardImg = card.querySelector(".card .card-img-top");
                changeImage(cardImg, imgPath);
            };
            cc.addEventListener(listenerType, listener);
        });
    }
    //actual function to swap images
    function changeImage(card, imgPath){
        card.setAttribute('src', imgPath);
    }


    // TODO: When the user clicks the button with the id of 'submitBtn,' the background color of #override-bootstrap changes to 'red'

    //     $("#submitBtn").click(function (event){
    //     event.preventDefault();
    //     $("#override-bootstrap").css("background-color","red")
    // });

    // TODO: When the user clicks a .card-text element, change its background color to 'red'
    // $(".card-text").click(function(){
    //     $(this).css("background-color","red")
    // })

    // $(".card-text").click(function() {
    //     $(this).toggleClass("background-color", "red")
    // });

//     TODO: Add a new button to the html, directly below the first button. Give it an id of 'resetBtn'.
// TODO: When the user clicks that button, the page should reload. (HINT: BOM has a super easy method for reloading the page. You'll still need a click event)

    // let remix = function (event) {
    //     location.reload(true);
    // }
    //     let dogPound = document.getElementById('resetBtn');
    //     dogPound.addEventListener('click', remix);

        // $("#resetBtn").click(function (){
        //     location.reload();
        // })
    // TODO: When the user clicks the element with the id #main-title, its text font size doubles
$("#main-title").click(function(){
        $(this).css("font-size"," +=1")
    })

})();