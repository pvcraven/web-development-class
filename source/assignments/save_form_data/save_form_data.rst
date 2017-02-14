Assignment 6 - Insert a Record
==============================

Goal
----

Learn to insert a new record into the database.

.. danger::

    I have not yet mentioned security. This is like
    handing you gasoline and matches, then saying we'll talk about fire safety
    *next* week.

Steps
-----

Step 1 - Prepare Data for Submission
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Refer back to :ref:`get_form_data`. We talked about several form submission
methods. You will need to select one of these two methods:

* JavaScript/AJAX/jQuery form submission using "post" method
* JavaScript/AJAX/jQuery/GSON form submission by posting parameterless JSON data

The first option is likely easier. The second option is trendier, and not that
much harder. Take your pick. Not sure what to pick? Pick the first one.

* Create JavaScript code that will figure out if *all* fields are valid. If so,
  print to the console. I suggest using a Boolean variable called ``valid_form``
  that you set to True. Then if any field fails, set it to False. Then
  do a simple ``if`` on that field at the end of your function. Test it out.
* Find the JavaScript code from our class example that goes with your choice.
* Put it in your 'valid code' section
* Adjust so that the field names in the example now match your field names
* Print the dataToServer object to the console, and test to make sure all is ok.

Step 2 - Submit the Data
^^^^^^^^^^^^^^^^^^^^^^^^

* Adjust the URL to say ``/api/name_list_edit`` instead of ``api/form_test_servlet``
* Test to make sure it attempts to submit the data. Look at the 'network' tab
  and you should be able to see the submission. You'll get a 404, but that's ok.

Step 3 - Receive the Data
^^^^^^^^^^^^^^^^^^^^^^^^^
* Update web.xml to map a new servlet ``NameListEdit`` to ``/api/name_list_edit``
* Create a new servlet called ``NameListEdit``. Have it log something. Test to
  make sure it runs.
* Update your new servlet to fetch the data, and then log it. Test.

Step 4 - Insert the Data
^^^^^^^^^^^^^^^^^^^^^^^^
* Look at the code you have to get the records from the database. Adapt it to
  insert a new record.
* After the record is inserted, make sure your JavaScript calls the function
  to update the table so that you can see the new record.
* Test.

Turn it in
^^^^^^^^^^

Turn in a GitHub URL and a URL to a working version of your server.
