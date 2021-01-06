.. _list-records-final:

Assignment 4 - List Records Part 2
==================================

Ok, this is probably past due, but let's make a decent landing page. Here is
a simple Bootstrap index page. Remember we covered Bootstrap last semester?
Anyway, make this your ``index.html`` page. Adjust the links in the page as
needed so they work with your project if needed. And replace "Jane Doe" with your name.

.. literalinclude:: index.html
    :linenos:
    :language: html

Now we need a page with a table on it. Create a new page called ``name_list.html``.
This page has the table to list our records, and a form that's initially
hidden.
Eventually, we need that form so we can
enter and edit our data. While won't use the form in this assignment, but we will
need it for a
later assignment.

.. literalinclude:: name_list.html
    :linenos:
    :language: html

There's nothing new or special about these pages above, they plain HTML/CSS. Except,
note that the second page loads a file called ``js/name_list.js``. This is our file with
our program we are about to write.
Create that directory
and file under the ``web`` folder in your project.

For now, just put this in your ``name_list.js`` file.

.. code-block:: JavaScript

    console.log("Hi, this is a test.");


Deploy locally and navigate to the page. Make sure you can see the test message.
If you are getting a 404 error you might not have linked up to the JavaScript
file quite right.

When you get it working, you'll want to

.. literalinclude:: name_list.js
    :linenos:
    :language: html

Now, go back to :ref:`make-json-calls` and adapt that code so you call your
``get_name_list`` and output the names to the console.

When you get that working, you need to write jQuery JavaScript that will add those
records to your table.

You can select a table called ``myTable`` (yours has a different id, look it up)
using jQuery with:

.. code-block:: JavaScript

    $('#myTable tr:last')

You can add a row to the end with:

.. code-block:: JavaScript

    $('#myTable tr:last').after('<tr><td>Hi</td><td>there</td></tr>');


Make sure your table lists out the following:

* id
* First name
* Last name
* E-mail address
* Phone number
* Birthday

Turn in:

* GitHub URL to the .js file
* Link to Amazon server with working list of records
