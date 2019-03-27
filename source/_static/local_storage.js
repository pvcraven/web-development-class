// --- This code runs on start-up of the page.

// -- Local Storage Example

// First, see if there is any data stored in local storage
// for the key "myLocalStorageKey".
var textContent = localStorage.getItem("myLocalStorageKey", $('#htmlFormFieldForLocalStorage').val());

// If there is data, initialize the form field with the data.
// Otherwise, don't.
if(textContent){
    console.log("Initialized with saved data.");
    $('#htmlFormFieldForLocalStorage').val(textContent);
} else {
    console.log("No saved data.");
}

// -- Local Session Example

// First, see if there is any data stored in local storage
// for the key "myLocalStorageKey".
textContent = sessionStorage.getItem("mySessionStorageKey", $('#htmlFormFieldForSessionStorage').val());

// If there is data, initialize the form field with the data.
// Otherwise, don't.
if(textContent){
    console.log("Initialized with saved data.");
    $('#htmlFormFieldForSessionStorage').val(textContent);
} else {
    console.log("No saved data.");
}

// --- This runs when we change the text in the FIRST (storage) text field
$('#htmlFormFieldForLocalStorage').bind("input", function(e) {
    if (typeof(Storage) === "undefined") {
        console.log("Sorry, no local storage available.");
        return;
    }
    localStorage.setItem("myLocalStorageKey", $('#htmlFormFieldForLocalStorage').val());
});

// --- This runs when we change the text in the SECOND (session) text field
$('#htmlFormFieldForSessionStorage').bind("input", function(e) {
    if (typeof(Storage) === "undefined") {
        console.log("Sorry, no local storage available.");
        return;
    }
    sessionStorage.setItem("mySessionStorageKey", $('#htmlFormFieldForSessionStorage').val());
});