Assignment 9 - Edit a Record
============================

Our goal with this assignment is to create an "edit" button that lets us edit
a record. We will use a lot of the same code that we already have, and add
the following:

Front-End
---------
* We will add an "edit" button alongside the "delete" button.
* When the user selects edit, we will open the dialog box for "add", except
  we will pre-fill it with the values we are editing.
* Here's the kicker. Rather than having a blank id, we will also pre-fill in
  the record id.

Back-End
--------
* If we are sent an id, rather than insert a record into the database, we will
  use the SQL to do an "UPDATE" rather than an "INSERT".

Detailed Requirements
---------------------

Step 1 - Add an Edit Button
^^^^^^^^^^^^^^^^^^^^^^^^^^^

* This will be a lot like your "delete" button you have now. Keep it. Add an
  edit button.
* Go to your JavaScript code.
* Find where you update the table and add in the rows.
* Create a string that will have the HTML for a "edit" button. It should look
  like:
  ``<td>"<button type='button' name='edit' class='editButton btn' value='" + id + "'>Edit</button>"</td>``.
  Note that you will need to replace ``id`` with whatever variable holds that id.
* Test to make sure the button shows up

Step 2 - Add JavaScript
^^^^^^^^^^^^^^^^^^^^^^^

Create this JavaScript function in your js file:

.. code-block:: JavaScript

    function editItem(e) {
        console.debug("Edit");
        console.debug(e.target.value);
    }

Back in your update table function, after adding the rows to the table, hook
this new delete item function to all your buttons:

.. code-block:: JavaScript

    var buttons = $(".editButton");
    buttons.on("click", editItem);

Alternatively you can do it in one line:

.. code-block:: JavaScript

    $(".editButton").on("click", editItem);

It is nice that works not just for one button, but for every button matching that
class.

Test the button and make sure it prints the proper id to your console.

Next, pop up the "edit" dialog, and fill it in with all the data values.

.. code-block:: JavaScript

    // Grab the id from the event
    var id = e.target.value;

    // This next line is fun.
    // "e" is the event of the mouse click
    // "e.target" is what the user clicked on. The button in this case.
    // "e.target.parentNode" is the node that holds the button. In this case, the table cell.
    // "e.target.parentNode.parentNode" is the parent of the table cell. In this case, the table row.
    // "e.target.parentNode.parentNode.querySelectorAll("td")" gets an array of all matching table cells in the row
    // "e.target.parentNode.parentNode.querySelectorAll("td")[0]" is the first cell. (You can grab cells 0, 1, 2, etc.)
    // "e.target.parentNode.parentNode.querySelectorAll("td")[0].innerHTML" is content of that cell. Like "Sam" for example.
    // How did I find this long chain? Just by setting a breakpoint and using the interactive shell in my browser.
    var firstName = e.target.parentNode.parentNode.querySelectorAll("td")[0].innerHTML;

    $('#id').val(id); // Yes, now we set and use the hidden ID field
    $('#firstName').val(firstName);
    // Etc
    $('#myModal').modal('show');



Step 4 - Update the Servlet
---------------------------

* Create a new PersonDAO method for updating a record. The SQL code looks
  something like:

.. code-block:: sql

  update person set first=?, last=? where id=?

Update your servlet for adding a new record.

* If no id was sent to us, then insert the record as we did before.
* If we did get an id, call the update method on the PersonDAO instead of the
  add method.
* Test it out.

Turn in
-------

* GitHub URL
* An Amazon URL
