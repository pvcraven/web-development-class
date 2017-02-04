Assignment 5 - Validate a Form
==============================

Goal
----

Learn to do front-side validation of a form using JavaScript.

Steps
-----

Step 1 - Clean-up Phone Numbers
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


Our last lab had the phone numbers listed like ``5159611212``. That
doesn't look good. Write JavaScript to format the numbers like
``515-961-1212``. You can use the JavaScript substring command::

    mysting = mystring.substring(0,3) + "-" + ...

Step 2 - Clean-up Database Connections
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Our database connections kept timing out. Through a lot of research, I think
I've got a better ``context.xml`` file. Try this on your local and remote server.

.. code-block:: xml

  <?xml version="1.0" encoding="UTF-8"?>
  <Context>
      <Resource name="jdbc/cis320"
                auth="Container"
                type="javax.sql.DataSource"
                maxTotal="50"
                maxWaitMillis="-1"
                username="cis320"
                password="PUT_PASSWORD_HERE"
                driverClassName="com.mysql.jdbc.Driver"
                url="jdbc:mysql://PUT_SERVER_NAME_HERE:3306/cis320"
                maxActive="15"
                maxIdle="3"
                testOnBorrow="true"
                removeAbandoned="true"
                removeAbandonedTimeout="55"
                validationQuery="SELECT 1"
                validationInterval="34000"
                timeBetweenEvictionRunsMillis="34000"
                minEvictableIdleTimeMillis="55000"
                factory="org.apache.tomcat.jdbc.pool.DataSourceFactory"
      />
      <ResourceLink name="jdbc/cis320"
                    global="jdbc/cis320"
                    type="javax.sql.DataSource" />
  </Context>
Step 3 - Get the hidden form to pop up
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

Step 4 - Update form fields
^^^^^^^^^^^^^^^^^^^^^^^^^^^

Update the form to:

* Have fields for all everything
* Make your fields (except for the hidden id) look something like the example
  below.
* Understand what each line is doing. So if you have to write this yourself
  someday you know what to do.

.. code-block:: html

  <!-- See http://getbootstrap.com/css/#forms-control-validation for styling info. -->
  <div id="firstNameDiv" class="form-group has-feedback">
    <label class="control-label" for="firstName">First Name:</label>
    <input type="text" id="firstName" name="firstName" class="form-control" placeholder="First name" aria-describedby="firstNameStatus"/>
    <span id="firstNameGlyph" class="glyphicon form-control-feedback" aria-hidden="true"></span>
    <span id="firstNameStatus" class="sr-only"></span> <!-- Text goes in firstNameStatus for screen readers that can't see our icons. -->
  </div>

Step 5 - Associate a function with the "Save Changes" button
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Next, in that hidden form is a button with the id of "saveChanges". Associate
a new JavaScript function called ``saveChanges`` with that button.

Have the function print something, and test it.

Step 6 - Validate the fields using regular expressions
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Use jQuery to grab the form fields, and then regular expressions to validate
them. Print on the console if it validates or not.
See :ref:`jquery` to remember how to validate.

Come up with reasonable regular expressions. Don't take empty fields. Don't
take fields of 35 characters if your database field is 30 characters. But you
do want to accept names like "O'Malley" and "José".

Step 7 - Display validation results to the user
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Now we need to get the user to see what fields are ok, and what fields aren't.
Here is code that will apply the appropriate Bootstrap classes to show that
the first name field is valid:

.. code-block:: javascript

        // Set style for outline of form field
        $('#firstNameDiv').removeClass("has-error");
        $('#firstNameDiv').addClass("has-success");

        // Set the icon for the form field
        $('#firstNameGlyph').removeClass("glyphicon-remove");
        $('#firstNameGlyph').addClass("glyphicon-ok");

        // Put in the field used by screen readers
        $('firstNameStatus').val("(success)");

Adjust this template for the other fields, both success and failure.