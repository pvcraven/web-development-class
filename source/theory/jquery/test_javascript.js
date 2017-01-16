/*
 * A few jQuery examples
 */

// Grab a list of all tags that match
var paragraphs = $("p");

// See:
// http://www.w3schools.com/jquery/jquery_ref_selectors.asp
// to get an idea of how we can have a lot of powerful selectors.

// How many tags match?
console.log("There are " + paragraphs.length + " paragraphs in this page.");

// Print the text in each one.
for(var i = 0; i < paragraphs.length; i++) {
    var paragraphText = paragraphs[i].textContent;
    console.log(paragraphText);
}

// Attach an action to a button click
function myUpdateFunction(event) {
    var fieldValue = $('#myTextField').val();
    $("#tableName tbody").append("<tr><td>"+fieldValue+"</td></tr>");
    console.log(fieldValue);
}

var formButton1 = $('#button1');
formButton1.on("click", myUpdateFunction);