Assignment 5 - Validate a Form
==============================

Goal
----

Learn to do front-side validation of a form using JavaScript.

Steps
-----

Step 1 - Format phone number
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Our last lab had the phone numbers listed like ``5159611212``. That
doesn't look good. Write JavaScript to format the numbers like
``515-961-1212``. You can use the JavaScript substring command::

    mysting = mystring.substring(0,2) + "-" + ...

Step 2 - Get the hidden form to pop up
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


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

Test it out. You should click on the Add Item button and see the form pop up.

Step 3 - Associate a function with the "Save Changes" button
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Next, in that hidden form is a button with the id of "saveChanges". Associate
a new JavaScript function called ``saveChanges`` with that button.

Have the function print something, and test it.


