Misc Improvements
=================

Here are things that can make life better.

Setting the focus
-----------------

Every mouse click takes time. Added up over thousands of people, or some people
thousands of times, we want to minimize this. One way, is to set the cursor's
focus on the first field of the form and save a click.

Usually, you can set focus like this:

.. code-block:: JavaScript

    $('#firstName').focus();

But it doesn't work in our case with a Bootstrap dialog, as we need to do this
only when the modal window is fully open.
`From the docs <https://getbootstrap.com/docs/4.0/components/modal/>`_,
when we do a 'show', it returns *immediately*. We can add a 'hook' by tossing
the following code at the end of our JS file:

.. code-block:: JavaScript

    $('#myModal').on('shown.bs.modal', function () {
        $('#firstName').focus();
    })

This took a bit of searching on
`Stack Overflow <https://stackoverflow.com/questions/15474862/twitter-bootstrap-modal-input-field-focus/20629541#20629541>`_
to find the answer.

Focus on the error
------------------

You could update your JavaScript to focus the cursor on the error field:

.. code-block:: JavaScript

    // Get the field
    let firstNameField = $('#firstName');
    // Run the validate function to see if this field is legit
    // Also sets field styles
    valid = fieldValidate(firstNameField, /^[^0-9]{1,10}$/);
    // If it isn't value, and we haven't yet had a field that has
    // been invalid, then set the focus here.
    if (!valid && success) {
        firstNameField.focus();
    }
    // Not valid field, say that form isn't going to work
    if (!valid) {
        success = false;
    }


Make your own hotkey
--------------------

It would be great if we didn't need the mouse to even bring up the dialog box.
We can create a function that runs each time we press a key:

.. code-block:: JavaScript

    // Fire an event with keydown
    $(document).keydown(function(e){
        // Log the key
        console.log(e.keyCode);
    });


Since '65' is the 'A' key we could map that key to open the dialog window:

.. code-block:: JavaScript

    // Fire an event with keydown
    $(document).keydown(function(e){
        // If key is an 'a' and dialog not shown, pop it up
        if(e.keyCode == 65) {
            showDialogAdd();
        }
    });

...but what if

.. code-block:: JavaScript

    // Fire an event with keydown
    $(document).keydown(function(e){
        // If key is an 'a' and dialog not shown, pop it up
        if(e.keyCode == 65 && !$('#myModal').is(':visible')) {
            showDialogAdd();
        }
    });

We could also map the 'enter' key to commit the form:

.. code-block:: JavaScript

    // Fire an event with keydown
    $(document).keydown(function(e){
        // If key is an 'a' and dialog is NOT shown, pop it up
        if(e.keyCode == 65 && !$('#myModal').is(':visible')) {
            showDialogAdd();
        }
    });
    // If key is an enter key and dialog IS shown, save changes
    if(e.keyCode == 13 && $('#myModal').is(':visible')) {
        saveChanges();
    }

Auto Hotkey
-----------

Do you hate entering form data again and again? This is a common issue when
doing testing. If you are on Windows, a useful program to help with this
(and a *lot* of other things)
is `AutoHotKey <https://autohotkey.com/>`_.

After installing AutoHotkey, it is kind of hard to figure out how to use it.
For our project, just use your favorite text editor to make a file that ends in
``.ahk``.

This program maps Ctrl-J to send a bunch of text to our form:

.. code-block:: ahk

    ^j::
       Send Matthew
       Send {tab}
       Send Simpson
       Send {tab}
       Send matt.simpson@simpson.edu
       Send {tab}
       Send 555-555-1212
       Send {tab}
       Send 01/01/1990
    Return

Add Toast
---------

We can give unintrusive feedback to the user by adding pop-up toast! Those
little status windows.
`Bootstrap instructions for toast. <https://getbootstrap.com/docs/4.3/components/toasts/>`_

Add this HTML right after you open your container ``<div>``:

.. code-block:: html

    <div class="toast" id="myToast">
        <div class="toast-header">
            <strong class="mr-auto"><i class="fa fa-grav"></i> Action</strong>
            <small>Now</small>
            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast">&times;</button>
        </div>
        <div class="toast-body" id="toast-body">
            Record Inserted
        </div>
    </div>

By default, it will be invisible. But it will take up space as we haven't
fixed around the positioning style yet.

In our JavaScript, we can make it display with this code. Do this with an
insert, a delete, or an error:

.. code-block:: JavaScript

    // Set the message body
    $("#toast-body").html("Success! Record inserted.");
    // Set the delay in ms. Defaults to 500.
    $('#myToast').toast({delay: 5000});
    // Show it
    $('#myToast').toast('show');

We need to position our box. We can do this in the ``<head>`` quickly
with some CSS. Here we make our container relative positioning, so everything
inside is relative to the container. Then we position the box in the upper
right.

.. code-block:: html

    <style>
        .container{
            position: relative;
        }
        .toast {
            position: absolute;
            top: 0px;
            right: 0px;
        }
    </style>