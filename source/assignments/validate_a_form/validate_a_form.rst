Assignment 5 - Validate a Form
==============================

Goal
----

Learn to do front-side validation of a form using JavaScript.

Steps
-----

First, we need something to happen when we click the "Add Item" button on
the form. Let's have it call a JavaScript function:

.. code-block:: javascript

    // There's a button in the form with the ID "addItem"
    // Associate the function showDialogAdd with it.
    var addItemButton = $('#addItem');
    addItemButton.on("click", showDialogAdd);

Ok, now let's create that function. Have it pop up the hidden Bootstrap form
we have.

.. code-block:: javascript

    // Called when "Add Item" button is clicked
    function showDialogAdd() {

        // Print that we got here
        console.log("Opening add item dialog");

        // Clear out the values in the form.
        // Otherwise we'll keep values from when we last
        // opened or hit edit.
        // I'm getting it started, you can finish.
        $('#id').val("");
        $('#firstName').val("");

        // Show the hidden dialog
        $('#myModal').modal('show');
    }

Next, in that hidden form is a button with the id of "saveChanges". Associate
a new JavaScript function called ``saveChanges`` with that button.
