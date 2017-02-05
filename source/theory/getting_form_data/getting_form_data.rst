Getting Data From a Form
========================

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

web.xml Mapping
---------------

Mappings for URLs to Servlets

.. code-block:: xml

    <servlet>
        <servlet-name>FormTestServlet</servlet-name>
        <servlet-class>edu.simpson.craven.FormTestServlet</servlet-class>
    </servlet>

    <servlet-mapping>
        <servlet-name>FormTestServlet</servlet-name>
        <url-pattern>/api/form_test_servlet</url-pattern>
    </servlet-mapping>

    <servlet>
        <servlet-name>FormTestJSONServlet</servlet-name>
        <servlet-class>edu.simpson.craven.FormTestJSONServlet</servlet-class>
    </servlet>

    <servlet-mapping>
        <servlet-name>FormTestJSONServlet</servlet-name>
        <url-pattern>/api/form_test_json_servlet</url-pattern>
    </servlet-mapping>

Java for Classic Requests
-------------------------

This servlet handles the first two non-JavaScript examples, and the next two
JavaScript examples. It not handle the JSON example.

.. literalinclude:: FormTestServlet.java
    :linenos:
    :language: java
    :caption: FormTestServlet.java

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

Checkboxes on forms are weird. They deserve their own section. (TBD)

Files
-----

File handling requires a multi-part upload. (TBD)
