.. _get_form_data:

Getting Data From a Form
========================

.. image:: web-forms.webp

How do we get data that the user has filled out on the front-end, to the back-end?
Turns out there are a lot of ways. I have some examples below. What these examples
don't show:

* How to validate on the front-end (we already covered that)
* How to validate on the back-end (can't trust the front end, we'll get to that
  later)
* What to do with the data once you've got it
* Anything to do with security
* Anything to do with managing logins

We will show:

* Send data without JavaScript with GET

  * Send via a form
  * Send via a link (e.g. a list of records, we create a different link for each record)

* Send data without JavaScript with POST
* Send data with JavaScript via GET
* Send data with JavaScript via POST
* Send data with JavaScript via POST and JSON

You can send the data with a **GET** and a **POST** method.
Data sent via GET is insecure, and will even be part of bookmarks. Only
send data this way if the parameter specifies something that should be part of
the navigation, like a menu selection. If in doubt, use POST.

Form Tags
---------

.. image:: tag.svg
    :width: 15%
    :class: right-image

If we are sending data via a form, we need to understand how to use the
``<form>`` tag. The older way:

.. code-block:: html
    :caption: Form tag to send data

    <form action="api/form_test_servlet" method="get">
       <!-- Form fields go here -->
    </form>

What do these fields do?

.. code-block:: text

    action="api/form_test_servlet" <-- Where to send the data (our servlet)
    method="get"                   <-- How to send the data (get or post)

Another way is to use JavaScript and send the data via AJAX.
Since JavaScript controls the sending of the data, we don't want the form to do
anything.
We'll keep the JavaScript in a separate ``js/form_demo.js`` file that will
attach JavaScript to the button. You
can view the output on the JavaScript console.

We have to disable
the default action on the form to prevent it from doing anything,
so the JavaScript can manage it. It is a weird work-around that doesn't look
very elegant:

.. code-block:: html
    :caption: Form tag, allowing JavaScript to manage the form

    <form action="javascript:void(0);">
       <!-- Form fields go here -->
    </form>

It is this action that means "don't do anything."

.. code-block:: text

    javascript:void(0); <-- Don't do anything during submission.

Form Fields
-----------

This is an example form with an input field, and a submit button.
Every field should have a label (line 2). The has a ``for`` field
that links up to the ``id`` of the field it describes (line 3).

The form will work without the label, but the label helps vision-impaired
people use a screen reader and figure out what is supposed to go into
that box. This will help maximize the number of people your website
can serve.

.. code-block:: html
   :linenos:
   :caption: Simple form

    <form action="api/form_test_servlet" method="get">
        <label for="inputField1a">Input field:</label>
        <input name="fieldname" type="text" id="inputField1a" />
        <input type="submit">
    </form>

We'll dive into some more complex fields later, out main interest now
is to get data to the servlet.

Creating Forms With HTML
------------------------

Here's the HTML. Hook this up to your menu, and make sure you can navigate
around. Spend some time studying the HTML.

.. literalinclude:: form_demo.html
    :linenos:
    :language: html
    :caption: form_demo.html

Java Servlet for Non-JSON Requests
----------------------------------

We need a servlet to receive the data! Let's create a new servlet, called
``FormTestServlet``.

This servlet handles the first two non-JavaScript examples, and the next two
JavaScript examples. It not handle the JSON example.

.. literalinclude:: FormTestServlet.java
    :linenos:
    :language: java
    :caption: FormTestServlet.java

Enter the servlet. Study the code. Run it against the first form. You should get
something like:

.. code-block:: text

    Get
    fieldname='hi'

At this point, methods 1, 2, and 3 should all work. Notice the URLs on the get
methods and how they are constructed:

.. code-block:: text

    api/form_test_servlet?fieldname=hi

Try entering spaces, quotes, ampersands, and other characters to see how they
get encoded. How do we encode multiple fields?

JavaScript
----------

Modern forms process data with JavaScript instead. We can add
JavaScript to our form. The HTML above tries to load JavaScript from
``js/form_demo.py``.

JavaScript AJAX Get
^^^^^^^^^^^^^^^^^^^

Add in some JavaScript to send data via "GET" to our servlet:

.. code-block:: JavaScript
    :linenos:
    :caption: JavaScript to process Method 4. AJAX GET

    /* Method 4: Use an AJAX Get */
    function jqueryGetButtonAction() {

        // URL where our servlet is at
        let url = "api/form_test_servlet";
        // Use jQuery to grab the dataout of the field
        let myFieldValue = $("#jqueryGetField").val();
        // Create a JSON object with field names and field values
        let dataToServer = { fieldname : myFieldValue };

        // Send the request to the servlet
        $.get(url, dataToServer, function (dataFromServer) {
            // This happens when we are don
            console.log("Finished calling servlet.");
            console.log(dataFromServer);
        });
    }

    // Hook the function above to the 'submit' button for the Method 4 form
    let jqueryGetButton = $('#jqueryGetButton');
    jqueryGetButton.on("click", jqueryGetButtonAction);

Try getting this to work for Method 4. It doesn't do anything visible, you'll
need to open the console to see the output. We're keeping things simple in
this lesson, focusing only on getting the data to and from the server.

JavaScript AJAX POST
^^^^^^^^^^^^^^^^^^^^

Sending the data via POST instead of GET is super-easy. Just change ``get``
to ``post``. Remember, data sent via ``get`` is not secure, and only use
``get`` if you want it as part of a navigation link or similar.

.. code-block:: JavaScript
    :linenos:
    :caption: JavaScript to process Method 5. AJAX POST
    :emphasize-lines: 8

    /* Method 5: Use an AJAX Post */
    function jqueryPostButtonAction() {

        let url = "api/form_test_servlet";
        let myFieldValue = $("#jqueryPostField").val();
        let dataToServer = { fieldname : myFieldValue };

        $.post(url, dataToServer, function (dataFromServer) {
            console.log("Finished calling servlet.");
            console.log(dataFromServer);
        });
    }
    let jqueryPostButton = $('#jqueryPostButton');
    jqueryPostButton.on("click", jqueryPostButtonAction);


The JavaScript only handles the last three forms. The first two show how
to do classic form submission with no JavaScript.

.. literalinclude:: form_demo.js
    :linenos:
    :language: javascript
    :caption: js/form_demo.js

.. _json-requests:

Using JSON For Data
-------------------

All the methods above are common, but now considered "old school."
(Although, we might use GET to construct URL links still, as shown
in Method 2.)

Now, we normally send the data via POST in a JSON format. To do
that we'll need a different Servlet. We'll also need a new
JavaScript function.

Java for JSON Requests
^^^^^^^^^^^^^^^^^^^^^^

Here is a simple business object we'll put our JSON data into.

Business Object
~~~~~~~~~~~~~~~

.. literalinclude:: FormTestObject.java
    :linenos:
    :language: java
    :caption: FormTestObject.java

Servlet
~~~~~~~

Here's how we get the JSON data.

.. literalinclude:: FormTestJSONServlet.java
    :linenos:
    :language: java
    :caption: FormTestJSONServlet.java

JavaScript for JSON Requests
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The JavaScript is very similar to before, except we will data
out data and call ``JSON.stringify`` to turn the JSON object into
a string. We then send the whole chunk of JSON data over instead of a
set of parameters/values. We use jQuery's ``$.ajax`` command.

.. code-block:: JavaScript

    /* Method 6: AJAX Post using JSON data */
    function jqueryPostJSONButtonAction() {

        let url = "api/form_test_json_servlet";
        let myFieldValue = $("#jqueryPostJSONField").val();
        let dataToServer = { fieldname : myFieldValue };

        $.ajax({
            type: 'POST',
            url: url,
            data: JSON.stringify(dataToServer),
            success: function(dataFromServer) {
                console.log(dataFromServer);
            },
            contentType: "application/json",
            dataType: 'text' // Could be JSON or whatever too
        });
    }
    let jqueryPostJSONButton = $('#jqueryPostJSONButton');
    jqueryPostJSONButton.on("click", jqueryPostJSONButtonAction);

Go ahead and give it a try. This is the pattern you should follow most
of the time. It is just three parts: java business object, java servlet, and
front-end javascript. Copy/paste from the template and expand to manage
the fields you want.

Checkboxes
----------

Checkboxes on forms are weird. They deserve their own section. A URL with
all checkboxes checked could look like::

    http://localhost:8080/api/form_test_checkbox_servlet?vehicle=Skateboard&vehicle=Bike&vehicle=Car&vehicle=Balloon

See how "vehicle" appears multiple times? And if none of them are checked::

    http://localhost:8080/api/form_test_checkbox_servlet

Nothing appears at all. Like it wasn't even there on the form. Here's an example
how to process them:

.. literalinclude:: FormTestCheckboxServlet.java
    :linenos:
    :language: java
    :caption: FormTestCheckboxServlet.java

Files
-----

File handling requires a multi-part upload. Not only do you have to write
servlet code to handle it, you need to specify that your code can take the
file. We'll add a ``@MultipartConfig`` directive right before we declare the
servlet. It takes the following parameters:

* location: An absolute path to a directory on the file system. The location
  attribute does not support a path relative to the application context. This
  location is used to store files temporarily while the parts are processed or
  when the size of the file exceeds the specified fileSizeThreshold setting.
  The default location is "".
* file-size-threshold: The file size in bytes after which the file will be
  temporarily stored on disk. The default size is 0 bytes.
* max-file-size: The maximum size allowed for uploaded files, in bytes. If the
  size of any uploaded file is greater than this size, the web container will
  throw an exception (IllegalStateException). The default size is unlimited.
* max-request-size: The maximum size allowed for a multipart/form-data request,
  in bytes. The web container will throw an exception if the overall size of
  all uploaded files exceeds this threshold. The default size is unlimited.

Finally, it will look like:

.. code-block:: text

    @MultipartConfig(fileSizeThreshold = 1024 * 1024,
            maxFileSize = 1024 * 1024 * 5,
            maxRequestSize = 1024 * 1024 * 5 * 5)

If you don't add this to your servlet, you'll find that you can't pull the fields
and you'll get no error. It is an annoying error to chase down.

Here's the full servlet:

.. literalinclude:: FormTestFileServlet.java
    :linenos:
    :language: java
    :caption: FormTestFileServlet.java

Drag and Drop
^^^^^^^^^^^^^

If you use a library, making your website support drag/drop uploading isn't
hard. In the example I use the same servlet, but use a
`DropZone <https://www.dropzonejs.com/>`_ library I
found (and CSS) to help process the request.
