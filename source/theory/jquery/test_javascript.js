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

// How to hide an item
var formButton1 = $('#button1');
formButton1.on("click", myUpdateFunction);

// Attach an action to a button click
function hideFunction(event) {
    $("#hideme").hide(500);
}

var formButton2 = $('#button2');
formButton2.on("click", hideFunction);

// How to validate an item
function validateFunction(event) {
	var v1 = $('#validateMe').val();
	var reg = /^[A-Za-z]{1,10}$/;
	if (reg.test(v1)) {
	    $('#result').text("Ok");
	} else {
	    $('#result').text("Bad");
	}}

var formButton2 = $('#button3');
formButton2.on("click", validateFunction);

