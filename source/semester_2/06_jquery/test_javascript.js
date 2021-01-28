/*
 * A few jQuery examples
 */

// Grab a list of all tags that match (jQuery selector)
// The $ is actually a function name! Wacky, but legal.
let paragraphs = $("p");

// See: http://www.w3schools.com/jquery/jquery_ref_selectors.asp
// to get an idea of how we can have a lot of powerful selectors.

// How many tags match? Use the array 'length' attribute.
console.log("There are " + paragraphs.length + " paragraphs in this page.");

// Print the text in each one.
// jQuery items have a 'textContent' attribute
for(let i = 0; i < paragraphs.length; i++) {
    let paragraphText = paragraphs[i].textContent;
    console.log(paragraphText);
}

// -- Add a row to the table based on a form field

// Create a function to add a row to the table
function myUpdateFunction(event) {
    // Grab field with id=myTextField and get teh value out of the form field
    // using the val() function:
    let fieldValue = $('#myTextField').val();
    // Select the tbody in a table with id=tableName
    // Append to that tbody the following html (a row)
    $("#tableName tbody").append("<tr><td>"+fieldValue+"</td></tr>");
    // Log for debuf info
    console.log(fieldValue);
}

// Attach an the function to a button click. This is a callback. Will run when
// we click.
let formButton1 = $('#button1');
formButton1.on("click", myUpdateFunction);

// -- How to hide an item based on a button click

// Create a function to hide an item
function hideFunction(event) {
    $("#hideme").hide(500);
}

// Attach an action to a button click
let formButton2 = $('#button2');
formButton2.on("click", hideFunction);

// -- How to validate an item

// Function to validate
function validateFunction(event) {
    // Get the field
    let v1 = $('#validateMe').val();

    // Create the regular expression
    let reg = /^[A-Za-z]{1,10}$/;

    // Test the regular expression to see if there is a match
    if (reg.test(v1)) {
        $('#result').text("Ok");
    } else {
        $('#result').text("Bad");
    }}

// Attach an action to a button click
let formButton3 = $('#button3');
formButton3.on("click", validateFunction);

// -- JSON'ify a form
// We'll use this a lot to interact with the back-end

// Create function to JSON'ify
function jsonFunction(event) {

    // Create an empty object
    let formObject = {};

    // Set a field in the object to the value in this form field
    formObject.myName = $('#myName').val();

    // Build the JSON string based on that object's fields
    let jsonString = JSON.stringify(formObject);

    // Set a field to the JSON result so we can see it.
    $('#jsonResult').text(jsonString);
}

// Attach an action to a button click
let formButton4 = $('#button4');
formButton4.on("click", jsonFunction);
