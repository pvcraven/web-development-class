.. _css_tutorial:

CSS Example
------------

Assuming you've already read about :ref:`cascading_style_sheets_about`, this is an
example that shows how use CSS to style a document.

Starting  HTML
^^^^^^^^^^^^^^

Let's start with a basic HTML document that has no CSS and no style information.
We'll include a line to an :ref:`external-css` that we will eventually fill in with
style information. Note that the filename we specified is ``css-test.css``. You might
want a different file name for your project.

.. literalinclude:: css_test.html
    :linenos:
    :language: html
    :emphasize-lines: 9

If you open this document in a web browser, before we add the CSS,  it looks like this:

.. image:: no_css_webpage.png
    :width: 500px
    :align: center
    :alt: Mosaic Web Browser

.. _example-css:

Example CSS
^^^^^^^^^^^

First, let's just make sure our external style sheet is working. Create a new file called ``css_test.css`` in  the
same directory as the HTML document. We'll select the ``<body>`` tag and make the background color red. That should
make it very obvious if it works or not.

.. code-block:: css

   body {
       background-color: red;
   }

If it doesn't work, make sure the ``<link>`` tag in your html is correct, the file name matches, and they are in
the same directory. Ask the instructor for help if needed.

A red background looks terrible, so let's just update it to an off-white color:

.. code-block:: css

   body {
       background-color: #ece3d7;
   }

We can change fonts as well. This changes the font of every paragraph.
See `W3Schools section on specifying fonts <https://www.w3schools.com/css/css_font.asp>`_.

.. code-block:: css

    p {
        font-family: arial, sans-serif;
    }

A bit more work and we can specify font size, color, and alignment of our ``<h1>`` and ``<h2>`` headings:

.. code-block:: css

    h1 {
      font-size: 24px;
      font-family: arial,sans-serif;
      color: rgb(147, 26, 42);
      text-align: center;
    }

    h2 {
      font-size: 20px;
      font-family: arial,sans-serif;
      color: rgb(147, 26, 42);
    }

You can specify the ``width``, or the ``max-width`` of an element to keep the text from getting too long.

You can enforce spacing by specifying **padding** and **margin**. See
`W3Schools article on the box model <https://www.w3schools.com/css/css_boxmodel.asp>`_.
In addition to specifying ``padding`` you can also specify ``top-padding`` or ``left-padding`` for example.

.. image:: box_model.png

.. code-block:: css

    section {
      background: #FFFFFF;
      max-width: 800px;
      padding: 5px;
    }

You can put borders around things:

.. code-block:: css

    article {
      border-style: solid;
      border-width: 5px;
      border-radius: 5px;
      margin: 5px;
      padding: 5px;
    }

Here's the full example. Don't forget you can use
`W3Schools CSS Reference <https://www.w3schools.com/css/>`_ to look up additional info on any of these attributes.

.. literalinclude:: css_test.css
    :linenos:
    :language: css

Here's the result:

.. image:: rendered_webpage.png
    :width: 500px
    :align: center
    :alt: Rendered Web Page

We will go through this example in class.
Outside of class, go through this tutorial:

http://www.w3schools.com/css/default.asp

Don't check in any updates to your website with CSS, we'll do that later.
