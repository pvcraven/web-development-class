.. _make-json-calls:

Making JSON Calls Over AJAX
===========================

Great! We have as servlet that makes JSON-formatted text. How do we get that
and put it in a web page?

We are going to make an AJAX call. Kind of.
AJAX means Asynchronous JavaScript And XML. Except we aren't using XML, because
that's out of style. We are using JSON. But we still call it AJAX anyway.

In simple terms, our JavaScript is going to make a web request. Usually we
make a web request by typing a URL into the browser, right? Then we get a
new page. Here, the JavaScript will make the request and just get JSON. Then
the JavaScript updates the page.

What is Asynchronous?
---------------------

So what is "Asynchronous" thing? How does that change the equation?
The opposite of "asynchronous" is "synchronous." That's what we are used to
with old-school synchronous coding:

1. Make a request
2. Wait for the response
3. Process the result

But that's **not** how we program now for the web.
Who wants to wait? Not me! This isn't the doctor's office. Instead we'll make the
call like this:

1. Make a request, and tell the computer what to do when it is done.
2. Carry on without waiting.

Make an Asynchronous Call
-------------------------

How do we make an asynchronous call? We can do it two ways.
Method one looks like this:

.. code-block:: javascript

    // Define a function that will automatically be called when
    // our request is done.
    function my_callback(json_result) {
        console.log("Done");
    }

    // Define a URL
    var url = "api/name_list_get";

    // Start a web call. Specify:
    // URL
    // Data to pass (nothing in this case)
    // Function to call when we are done
    $.getJSON(url, null, my_callback);

What happens above? We use the function ``getJSON`` that is built into
jQuery. You can read about the command by looking at teh getJSON_ API
documentation.

.. _getJSON: http://api.jquery.com/jquery.getjson/

There's another way you can do it. You can use an *anonymous function* instead.

.. code-block:: javascript

    // Define a function that will automatically be called when
    // our request is done.
    def my_callback(json_result) {
        console.log("Done");
    }

    // Define a URL
    var url = "api/name_list_get";

    // Start a web call. Specify:
    // URL
    // Data to pass (nothing in this case)
    // Function to call when we are done
    $.getJSON(url, null, function {
        console.log("Done");
        }
    );

Great! How do we do something with the result?

.. code-block:: javascript

    var url = "api/name_list_get";

    $.getJSON(url, null, function(json_result) {
            // json_result is an object. You can set a breakpoint, or print
            // it to see the fields. Specifically, it is an array of objects.
            // Here we loop the array and print the first name.
            for (var i = 0; i < json_result.length; i++) {
                console.log(json_result[i].first);
            }
            console.log("Done");
        }
    );
