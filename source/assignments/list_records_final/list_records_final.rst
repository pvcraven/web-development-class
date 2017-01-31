Assignment 4 - List Records - Final
===================================

Ok, this is probably past due, but let's make a decent landing page. Here is
a simple Bootstrap index page. Remember we covered Bootstrap last semester?
Anyway, make this your ``index.html`` page. Adjust the links in the page as
needed so they work with your project.

.. literalinclude:: index.html
    :linenos:
    :language: html

Now we need a page with a table on it. Eventually, we need a form so we can
enter and edit our data. This page has the table, and a form that's initially
hidden. We won't use the form in this assignment.

.. literalinclude:: name_list.html
    :linenos:
    :language: html

Note that the page loads a file called ``js/name_list.js``. Create that directory
and file under the ``web`` folder in your project.

.. literalinclude:: name_list.js
    :linenos:
    :language: html

Now, just write the code for the js file, and get it to work.
See :ref:`make-json-calls` for more information.

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
