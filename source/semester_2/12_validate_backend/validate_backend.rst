.. _validate_backend:

How to Validate in Java
=======================

Validation on the front-end is done by the user's browser. Doing validation there
is fast, and we can make a nice UI to highlight input that isn't quite right.

However! Because it is on the client, the client can change anything that runs
there. The JavaScript code can be edited, variables changed while the program
is running, JS can be turned off entirely, or a completely different web page
could be written to submit data to our app. We can trust NOTHING.

Therefore our Java app must also validate. Running to different validations in
two different languages is prone to cause a mismatch, but that's the best we've
got to offer at this point in web development.

Just like the front-end, we'll do validation on the back-end with regular
expressions. See the highlighted code below:

.. code-block:: java
   :linenos:
   :emphasize-lines: 7-8, 17, 24, 45-46

    package edu.simpson.craven;

    import javax.servlet.ServletException;
    import javax.servlet.http.HttpServlet;
    import javax.servlet.http.HttpServletRequest;
    import javax.servlet.http.HttpServletResponse;
    import java.io.IOException;
    import java.io.PrintWriter;
    import java.util.regex.Matcher;
    import java.util.regex.Pattern;

    public class FormTestServlet extends HttpServlet {

        // This will hold our compiled regular expression
        // You'll need one of these for each field
        // Name it according to the actual field name. Do not use "fieldname"
        private Pattern fieldnameValidationPattern;

        /**
         * Our constructor
         */
        public FormTestServlet() {
            // --- Compile and set up all the regular expression patterns here ---
            fieldnameValidationPattern = Pattern.compile("^[A-Za-z]{1,10}$");
        }

        /*
         Handle Post requests
         */
        protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
            // You can output in any format, text/JSON, text/HTML, etc. We'll keep it simple
            response.setContentType("text/plain");
            PrintWriter out = response.getWriter();

            // Print that this is a post
            out.println("Post");

            // Grab the data we got via a parameter
            String fieldname = request.getParameter("fieldname");

            // Just print the data out to confirm we got it.
            out.println("fieldname='"+fieldname+"'");

            // Now create matcher object.
            Matcher m = fieldnameValidationPattern.matcher(fieldname);
            if (m.find( )) {
                out.println("success");
            } else {
                out.println("error");
            }
        }
    }

To begin with, we variable to hold our regular expression as a field/instance
variable in our class:

.. code-block:: text

    private Pattern fieldnameValidationPattern;

You'll need one of these for each different regular expression you have. So you
might have ones for ``namePattern`` and ``ssnPattern`` and ``phonePattern``
for example.

In your constructor, you need to create each regular expression and "compile"
it:

.. code-block:: text

    fieldnameValidationPattern = Pattern.compile("^[A-Za-z]{1,10}$");

Then in your ``doPost`` and/or ``doGet`` you can test the data, in this case
stored in ``fieldname``. (You might have this in a JSON object, and need
to do something like ``my_json_object.getPhone()`` or whatever.)

.. code-block:: text

    Matcher m = fieldnameValidationPattern.matcher(fieldname);

Finally, you can test to see if the pattern matches:

.. code-block:: text

    if (m.find()) {

If you pass validation, go ahead and perform the intended action. If you don't?
You can pass a response back to your front-end and display something to the
user.

If you are only interested in performing an action if you *didn't* pass
validation, you can use the **not operator**.
For Java (and JavaScript) this operator is the ``!``. So you can do:

.. code-block:: text

    if (!m.find()) {
        out.println("error message goes here.");
        return;
    }

You can also output the message in JSON because it's the cool thing:

.. code-block:: text

    protected void doPost( ....

    response.setContentType("application/json");

    // ...

    if (!m.find()) {
        out.println("{\"error\" : \"Error validating first name.\"}");
        return;
    }

    // ... after the other validation ...

    out.println("{\"success\": \"Successful insert.\"}");

Handling Back-End Errors
------------------------

The front-end should have already caught the before the back-end.
You can choose to fail silently, display a very generic error message,
or go ahead and spend the time/effort in printing a detailed error message.

For example, this will just pop up a JavaScript alert message:

.. code-block:: JavaScript

     $.ajax({
         type: 'POST',
         url: url,
         data: JSON.stringify(dataToServer),
         success: function(dataFromServer) {
             // Parse text to JSON
             let result = JSON.parse(dataFromServer);
             // See if result has a kee called 'error'
             if ('error' in result) {
                 // JavaScript alert the error.
                 alert(result.error);
             } else {
                 // Do whatever you'd do if successful
             }
         },
         contentType: "application/json",
         dataType: 'text'
     });

Conclusion
----------

And that's it! Now take a look at :ref:`assignment_7`.