(function () {
    "use strict";
    // TODO: Uncomment next line and get the main header element by id
    var mainHeader = document.getElementById('main-header');
    console.log(mainHeader.innerHTML);

    // TODO: Set inner html of mainHeader to "JavaScript is Cool"
    mainHeader.innerHTML = `JavaScript is Cool`;
    console.log(mainHeader.innerHTML)

    // TODO: Uncomment the next line and get the sub header element by id
    var subHeader = document.getElementById(`sub-header`);
    console.log(subHeader.innerHTML);

    // TODO: Set the text color of subHeader to blue
    var bodyElement = document.getElementById("sub-header")
    bodyElement.style.color = `#89CFF0`;
    // TODO: Uncomment the next line and get all list items
    var listItems = document.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++) {
        var dbid = listItems[i].getAttribute(`data-dbid`);
        console.log(dbid);
    }
    // TODO: Set text color on every other list item to grey
    for (var i = 0; i < listItems.length; i += 2) {
        var greyToes = listItems[i].style.color = "#787878";
    }
    // TODO: Set text color of li with dbid = 1 to blue
    var secondElement = document.getElementsByTagName(`li`)[0];
    console.log(secondElement.innerHTML);
    secondElement.style.color = `#FF0000`;
    // TODO: Uncomment the next line and get all elements with class name sub-paragraph
    var subParagraphs = document.getElementsByClassName(`sub-paragraph`)[0]
    console.log(subParagraphs.innerHTML);

    // TODO: Change the text in the first sub paragraph to "Mission Accomplished!"
    subParagraphs.innerHTML = "Mission Accomplished!";


    // Event Listener

    var listener1 = function (event) {
        mainHeader.innerHTML = `JavaScript is for Tools`;
    }
    var listener2 = function (event) {
        let ruby = document.createElement("img");
        ruby.setAttribute("src", "kodak/pizza.png");
        ruby.setAttribute("class", "col-12 col-sm-6 col-md-4 px-0");
        ruby.setAttribute("class", "col-12");
    }
    var listener3 = function (event) {
        mainHeader.innerHTML = `Too Cool for School`;
    }
    var listener4 = function (event) {
        mainHeader.innerHTML = `Girls just wanna have fun`;
    }

    var btn1 = document.getElementById(`btn1`);
    btn1.addEventListener(`click`, listener1);

    var btn2 = document.getElementById(`btn2`);
    btn2.addEventListener("keyup", listener2);

    var btn3 = document.getElementById(`btn3`);
    btn3.addEventListener("click", listener3);

    var btn4 = document.getElementById(`btn4`);
    btn4.addEventListener("click", listener4);

document.body.onload = addElement;
    function addElement () {
        // create a new div element
        const newDiv = document.createElement("div");

        // and give it some content
        const newContent = document.createTextNode("New Buttons should above below this!");

        // add the text node to the newly created div
        newDiv.appendChild(newContent);

        // add the newly created element and its content into the DOM
        const currentDiv = document.getElementById("div1");
        document.body.insertBefore(newDiv, currentDiv);
    }

    var btn = document.createElement("BUTTON");   // Create a <button> element
    btn.innerHTML = "CLICK ME1";                   // Insert text
    document.body.appendChild(btn);               // Append <button> to <body>
    var searchLink = document.getElementsByTagName("BUTTON")[0];
    searchLink.setAttribute("class", "btn btn-default");


})();
