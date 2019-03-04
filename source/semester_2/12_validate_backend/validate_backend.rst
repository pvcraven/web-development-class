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
   :emphasize-lines: 17, 24, 45-46

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
                out.println("Passed validation");
            } else {
                out.println("Did not pass validation");
            }
        }
    }

If you pass validation, go ahead and perform the intended action. If you don't?
You can pass a response back to your front-end and display something to the
user. The front-end should have already caught the error, however. Sometimes I
just silently fail, or display a very generic error message.

