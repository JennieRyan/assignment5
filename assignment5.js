//COMM644
//Assignment 5

//Practice with Forms and the DOM Event Model (20 points) - 
/*====================================================================
In this part of the assignment you will practice working with form objects and the DOM Event Model:
1.	Add a button to a web page. Use the old school HTML attribute method to attach a click event handler to the button. That handler should call a function that displays the message “I have been clicked” out into an alert box.
2.	Add a button to a web page and uniquely ID the button. Write a script that finds the button by its ID. Then use the DOM Element method to associate a function with the onclick event of the button. Again, display the message “I have been clicked” out into an alert box.
3.	Add a button to a web page and uniquely ID the button. Write a script that attaches an event listener to the button and listens for the click event. When it’s heard, a user-defined function should be called and the message “I have been clicked” should be displayed out into an alert box.
4.	Modify the code within step 3 so that the code that displays an alert box is written directly within a callback function as opposed to a user-defined function.
5.	Modify the code in step 4 so that you can write your script within the <head> tag of the page rather than underneath the button in the markup.
6.	Add a link to your web page. Add the text “Visit Google” to the link, set the ID to “redirect” and set the href attribute to http://www.google.com. Now, write a script that alerts the user that they clicked on the link but prevents the browser from also redirecting to the Google site.
7.	Add a text box and a button to a web page. Add an event listener to the button. When the click event is heard, the button should be disabled, and the text that the user input into the text box should be displayed within an alert box.
8.	Create a new page called newpage.html. You will now have 2 web pages including index.html and newpage.html. Add a button to index.html. When the button is clicked, newpage.html should appear as a popup window at 300 pixels wide by 300 pixels high. As soon as newpage.html loads however, resize the window to 500 pixels wide by 300 pixels high. You will need to handle the load event on newpage.html and use a BOM method on newpage.html to accomplish this task.
9.	Add two buttons to a web page. Add the text Start to one button and Stop to the other button. Using the BOM .setInterval() method, figure out a way to move display the text “Learning JavaScript is fun!” into the console window every 2 seconds but only when the Start button is clicked. If the user clicks on the Stop button, the console should stop logging the text immediately.
10.	Add a drop down list to a web page. Populate the drop down list with 4 items. Add a button next to the drop down list and set the text to “Select”. When the user clicks the button, the item selected in the drop down list should appear within an alert box.
====================================================================*/

//STEP 1
/*====================================================================
function fewd() {
    "use strict";
    window.alert("I have been clicked");
}
====================================================================*/

//STEP 2
/*====================================================================
var myElement = document.getElementById("clickMe");
myElement.onclick = function () {
    "use strict";
    window.alert("I have been clicked");
}
====================================================================*/

//STEP 3

/*====================================================================

var clickMe = document.getElementById("clickMe");
var writeMessage;

clickMe.addEventListener("click", writeMessage, false);

function writeMessage() {
    "use strict";
    window.alert("I have been clicked");
}
====================================================================*/


//STEP 4
/*====================================================================
var clickMe = document.getElementById("clickMe");
var writeMessage;

clickMe.addEventListener("click", function () {
    "use strict";
    window.alert("I have been clicked");
}, false);
====================================================================*/

//STEP 5
/* I tried to get rid of JSLint Errors about init, clickMe, writeMessage being used before they were defined (not sure how else to resolve that other than something like this?
//var clickMe = document.getElementById("clickMe");
//var writeMessage;
However that produced console errors.  Note to self - revisit this.*/
/*====================================================================

document.addEventListener("DOMContentLoaded", init, false);
function init() {
    "use strict";
    clickMe.addEventListener("click", writeMessage, false);
    function writeMessage() {
        window.alert("I have been clicked");
    }
}
====================================================================*/


//STEP 6
/*====================================================================

document.addEventListener("DOMContentLoaded", init, false);
function init() {
    "use strict";
    redirect.addEventListener("click", function (event) {
        event.preventDefault();
        window.console.log("Denied! :)");
    });
}
====================================================================*/


//STEP 7
/*====================================================================
window.addEventListener("load", init);
function init() {
    var clickMe = document.getElementById("clickMe");
    var textField = document.getElementById("textField");
    clickMe.addEventListener("click", function (event) {
        "use strict";
        clickMe.disabled = true;
        window.alert(textField.value);
    }, false);
}

====================================================================*/

//STEP 8
/*====================================================================

var myButton = document.getElementById("myButton");
myButton.addEventListener("click", loadPage);
        
function loadPage() {
    "use strict";
    window.open("assignment5_STEP8_newPage.html", 'gg', 'width=300,height=300,resizable=yes');
}
//For resize -- see "assignment5_STEP8_newPage.html" for inline script
====================================================================*/

//STEP 9
/*====================================================================

window.addEventListener("load", init);
function init() {
    "use strict";
    var writeMessage = null;
    var startButton = document.getElementById("startButton");
    var stopButton = document.getElementById("stopButton");
    startButton.addEventListener("click", function () {
        writeMessage = setInterval(blahBlahSpam, 2000);
    });
    stopButton.addEventListener("click", function () {
        clearInterval(writeMessage);
    });
}
function blahBlahSpam() {
    "use strict";
    window.console.log('Learning JavaScript is fun!');
}
====================================================================*/

//STEP 10
/*====================================================================
var drop = document.getElementById("selectTag");
var selectButn = document.getElementById("drop_down");
selectButn.addEventListener("click", option, false);
function option() {
    "use strict";
    window.alert(drop.value);
}

====================================================================*/



//The Calculator II (30 points)

/*====================================================================

In this part of the assignment you will practice working with the DOM, DOM Events, Functions, and more to create a better version of the calculator that we built in a previous class. To complete this part, follow the steps outlined below:
1.	Notice the markup that I’ve included for you in the web page. There is a text box that will display the value of each button click and 16 different buttons each of which represents a major key on a basic calculator. Begin adding an event listener to the window object that “listens” for the load event and when heard, calls a user-defined function called init().
2.	Create the user-defined function called init().
3.	Within the init() function, attach an event listener to each of the 16 buttons in the web page. You will listen for the click event and when heard, a function called enter() should be called for each of the buttons except for the equal sign. Since you are attaching an event listener to an object, you can pass in this.value as a parameter to each of the enter() function calls. 
4.	For the equal button, call a function called calculate(). You will not pass any arguments into this function.
5.	Create a user-defined function called enter() that accepts val as an argument. 
6.	Within the enter() function get the result text box by its ID and set its value plus equal to the val parameter being passed in.
7.	Create a user-defined function called calculate() that doesn’t accept any arguments. 
8.	Within the calculate() function get the result text box by its ID and set its value equal to the calculation currently stored in the result text box. HINT: Use the built-in eval() function to perform the heavy lifting for you.
Figure out a way to simplify your code so that you don’t have to manually attach an event handler to each and every button. You should be able to programmatically attach a listener to every button on the page and attach a handler that listens for the click without having to write so much code. 
HINT: Remember the concept of “event bubbling”. Perhaps it makes more sense to listen for an event on a parent element rather than each and every button….
====================================================================*/


window.addEventListener("load", init, false);

var x = document.getElementById("result");
var y = x.getElementsByTagName("button");

function init() {
    "use strict";
    x.addEventListener("click", enter, false);
}

var enter = function (value) {
    "use strict";
    this.value = document.getElementById(this.id);
    var result = document.getElementById("result");
    result.value += this.value.value;
};

var calculate = function () {
    "use strict";
    var final, calculation, evaluation;
    final = document.getElementById("result").value;
    calculation = final.toString();
    evaluation = window.eval(calculation);
    document.getElementById("result").value = evaluation;
};

function init() {
    var body, button, grabField, makeString, finalAnswer;
    body = document.querySelector("body");
    
    body.addEventListener("click", function () {
        button = event.target.id.toString();
        if (button === "equal") {
            calculate();
        } else {
            this.value = document.getElementById(event.target.id);
            var result = document.getElementById("result");
            result.value += this.value.value;
        }
    });
}