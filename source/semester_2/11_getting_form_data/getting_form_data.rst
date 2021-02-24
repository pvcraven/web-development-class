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

We will show two ways of moving the data without JavaScript. This is the classic
way of doing a form. You can send the data with a **GET** and a **POST** method.
Data sent via GET is insecure, and will even be part of bookmarks. Only
send data this way if the parameter specifies something that should be part of
the navigation, like a menu selection. If in doubt, use POST.

.. code-block:: html

	<form action="api/form_test_servlet" method="get">

The next two form examples, use JavaScript and send the data via AJAX.
There is a separate ``js/form_demo.js`` file that will attach JavaScript
to the button.
You
can view the output on the JavaScript console. Note how we have to disable
the default action on the form to prevent it from doing anything:

.. code-block:: html

	<form action="javascript:void(0);">

Neither of those methods shows sending the data with JSON. So that is the last
example. We get the form info, create a JSON object, send it to the servlet, and
then parse it there. Newer apps typically use this method.

HTML
----

Here's the HTML. Skip down a bit, see the forms are rather simple.

.. literalinclude:: form_demo.html
    :linenos:
    :language: html
    :caption: form_demo.html

JavaScript
----------

The JavaScript only handles the last three forms. The first two show how
to do classic form submission with no JavaScript.

.. literalinclude:: form_demo.js
    :linenos:
    :language: javascript
    :caption: js/form_demo.js

Java for Non-JSON Requests
--------------------------

This servlet handles the first two non-JavaScript examples, and the next two
JavaScript examples. It not handle the JSON example.

.. literalinclude:: FormTestServlet.java
    :linenos:
    :language: java
    :caption: FormTestServlet.java

.. _json-requests:

Java for JSON Requests
----------------------

Here is a simple business object we'll put our JSON data into.

Business Object
^^^^^^^^^^^^^^^

.. literalinclude:: TestBusinessObject.java
    :linenos:
    :language: java
    :caption: TestBusinessObject.java

Here's how we get the JSON data.

Servlet
^^^^^^^

.. literalinclude:: FormTestJSONServlet.java
    :linenos:
    :language: java
    :caption: FormTestJSONServlet.java

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
servlet code to handle it, you need to specify this in your ``web.xml`` servlet
mapping.

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

.. code-block:: xml

    <servlet>
        <servlet-name>FormTestFileServlet</servlet-name>
        <servlet-class>edu.simpson.craven.FormTestFileServlet</servlet-class>
        <multipart-config>
            <max-file-size>50000</max-file-size>
            <max-request-size>50000</max-request-size>
            <file-size-threshold>0</file-size-threshold>
        </multipart-config>
    </servlet>

If you don't add this to your servlet, you'll find that you can't pull the fields
and you'll get no error. It is an annoying error to chase down. Here's how to
get the file:

.. literalinclude:: FormTestFileServlet.java
    :linenos:
    :language: java
    :caption: FormTestFileServlet.java\

Drag and Drop
^^^^^^^^^^^^^

If you use a library, making your website support drag/drop uploading isn't
hard. In the example I use the same servlet, but use a "DropZone" library I
found (and CSS) to help process the request.
