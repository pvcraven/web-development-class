Assignment 8 - Back-End Validate / Delete a Record
==================================================

Requirements
------------

Step 1 - Back-End Validate
^^^^^^^^^^^^^^^^^^^^^^^^^^

Update your code to edit a record so that it also validates on the back-end.
Refresh your memory on how to do this by looking at :ref:`validate_backend`.

Don't insert the record if it fails the validation. You will need to temporarily
disable your front-end validation to test the code. Go ahead and re-enable it
when done.

Step 2 - Add a Button
^^^^^^^^^^^^^^^^^^^^^

* Go to your JavaScript code.
* Find where you update the table and add in the rows.
* Create a string that will have the HTML for a "delete" button. It should look
  like:
  ``<td><button type='button' name='delete' class='deleteButton btn' value='" + id + "'>Delete</button></td>``.
  Note that you will need to replace ``id`` with whatever variable holds that id.
* Test to make sure the button shows up

Step 3 - Add JavaScript
^^^^^^^^^^^^^^^^^^^^^^^

* Create this JavaScript function in your js file:

.. code-block:: JavaScript

    function deleteItem(e) {
        console.debug("Delete");
        console.debug(e.target.value);
    }

* Back in your update table function, after adding the rows to the table, hook
  this new delete item function to all your buttons:

.. code-block:: JavaScript

    var buttons = $(".deleteButton");
    buttons.on("click", deleteItem);

Alternatively you can do it in one line:

.. code-block:: JavaScript

    $(".deleteButton").on("click", deleteItem);

It is nice that works not just for one button, but for every button matching that
class.

* Test the button and make sure it prints the proper id to your console.
* Create JavaScript to post to ``api/name_list_delete``. It should look
  a lot like the JavaScript for adding a new record, except the only thing
  we will pass is the id of the record we are deleting.

Step 4 - Add Servlet
--------------------

Create a servlet that will delete the record based on the id. Pattern the
servlet after the "add record" servlet. It will be very similar.

Turn in
-------

* A GitHub URL to the source code for where your back-end validation happens.
* An Amazon URL to your code where I can confirm that records are deleted.
