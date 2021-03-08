Assignment 6 - Insert a Record
==============================

**Goal:** Learn to insert a new record into the database.

With :ref:`validate_form_assignment` we created a nice user interface to validate
our data on the front-end. Now we need to:

* Have the front-end package up our form data into a JSON object.
* Send the JSON object to the server using a new URL.
* Create a servlet at the new URL.
* Unpack the JSON object in the servlet.
* Do an SQL insert.
* Have the front-end refresh the table.

.. note::

    As we can't trust the data the front-end sends us, we need to validate on the
    back-end. We'll be doing that as part of the next assignment.

Step 1 - Prepare Data for Submission
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Refer back to :ref:`get_form_data`. Make sure you have each data field in
a variable. (You might already have this from the validation step.)

If all your form fields are valid,
create a JSON object using the ``dataToServer`` variable as an example in
:ref:`json-form-request`. Don't do the ``.ajax`` call yet, just
output the JSON object to the console using ``console.log``.
Make sure you get this far ok.

Strip all extra characters from the phone number. If the user enters
``515-555-1212`` then change it to ``5155551212``.

Try validating your JSON data and seeing it in a nice formatted manner,
by using an on-line tool like this one: https://jsonlint.com/

Step 2 - Submit the Data
^^^^^^^^^^^^^^^^^^^^^^^^

* Figure out how to take the ``.ajax`` code from ``jqueryPostJSONButtonAction`` and
  put it in the code you already have for validating, so it tries to send the JSON
  data we made in step 1.
* Adjust the URL to say ``api/name_list_edit`` instead of ``api/form_test_json_servlet``
  Make sure the URL doesn't start with a ``/`` or your link will be absolute rather
  than relative.
* Test to make sure it attempts to submit the data. Look at the 'network' tab
  of your browser
  and you should be able to see the submission. You'll get a 404, but that's ok.

Step 3 - Connect a Servlet
^^^^^^^^^^^^^^^^^^^^^^^^^^
* Create a new servlet called ``NameListEdit``.
* Update servlet to map the URL ``/api/name_list_edit``
* Have your servlet log "hello world" or something. Test to make sure it runs.

Step 4 - Receive the Data
^^^^^^^^^^^^^^^^^^^^^^^^^

* Update your new servlet to fetch the data

  * The code should be similar to that in :ref:`json-requests`.
  * Keep in mind you don't need to create a new business object, as you already
    have ``Person`` created.
  * Make sure the JSON object field names map exactly to
    the Person object. That is, if your JSON object has ``first`` as a field name,
    and the ``Person`` class has ``firstName``, those aren't the same so it won't
    work.

* Log it via ``System.out.println`` or use the logging library (better choice).
* Validate you got this far successfully.

Step 5 - Insert the Data
^^^^^^^^^^^^^^^^^^^^^^^^
* Find and update your ``PersonDAO`` class.
* Look at the code you have to get the records from the database.
  That code should be in the ``getPeople()`` function of ``PersonDAO``.
* Create a new method in that class called ``addPerson()``.
* You'll return ``void`` and take in a ``Person`` class as a parameter.
* Copy the database code from ``getPeople()`` to get started with the body of the
  ``addPerson()`` method.
* Adjust the code to insert a record.
* You will need to know how to set fields in a SQL statement. It looks
  something like:

.. code-block:: java

  String sql = "INSERT INTO table_name (column1, column2) VALUES (?, ?);";
  stmt = conn.prepareStatement(sql);
  stmt.setString(1, my_data_1);
  stmt.setString(2, my_data_2);


* The way we set up the database, the table will auto-create the id field. You
  do not want to insert a value for id.
* You won't be returning a list, so you can remove that variable.
* You won't need to process a ``ResultSet`` so you can remove that whole
  while loop.
* When inserting data, you need ``executeUpdate`` instead of ``executeQuery``.
* Once you finish the DAO method, call it from your servlet and pass it the
  ``Person`` object.
* Make sure your code inserts the record doesn't log any errors. You should be
  able to refresh the page and see the new record after it is inserted.

Step 6 - Refresh the Table Automatically
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

* Forcing the user to hit refresh is a bad idea. Write JavaScript to clear
  to load our new data automatically after the insert. (Make sure the old
  data is cleared out.)
* Remember, you need to put that code inside the anonymous function, not after
  it. The code after the ``ajax`` call is run immediately, and does not wait for
  the ``ajax`` call to finish.
* Test.

Turn it in
^^^^^^^^^^

Turn in a GitHub URL and a URL to a working version of your server.
