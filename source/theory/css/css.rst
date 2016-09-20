Cascading Style Sheets
----------------------

Introduction to CSS
^^^^^^^^^^^^^^^^^^^

CSS stands for *Cascading Style Sheets*. The "look and feel" of a website
is specified by the CSS language. CSS takes the HTML and transforms it to
look the way the designer would like.

Originally the "look" of a website was mixed in with the HTML. For small pages, this
was easier to code. But for large websites it quickly became unmanageable.
Even for small websites, developers eventually realized it was the wrong way
Separating the style gives a developer the following advantages:


* Separating the content from the style allows developers to update the theme of
  a 100 page website with just one style sheet.
* It allows a developer to add additional content without having worry about
  adding style code.
* It allows a website to easily change its look if it is being viewed on a smart-phone,
  or if it is being printed.
* A graphic artist can work with the CSS file and change the look of the website
  while keeping their work completely separate from the content portion of the
  website.
* It allows a website to use a pre-built style library like `Bootstrap`_.

For an example of CSS, take a look at `CSS Zen Garden`_.
This is an old website, but it takes the *exact same HTML* and
completely transforms the look by switching the CSS. Try it out.
When looking at the website use the "view source" and "inspect element"
options in your browser to view both the HTML and CSS.

I'll wait.

Many web browsers even let you modify the CSS live, and see the results.
In Chrome, or a similar web browser, right click on something that on a web
page. Select "Inspect". In the lower right, will be all the style info.
You can edit that info and the results show up on the main web page.

CSS Language Syntax
^^^^^^^^^^^^^^^^^^^

The CSS Syntax has the following format:

.. code:: css

    selector {
      property: value;
      property: value;
    }
    selector {
      property: value;
      property: value;
    }


An example:

.. code:: css

    h1 {
          text-align: center;
          font-size: 24px;
    }
    h2 {
          text-align: center;
          font-size: 10px;
    }

The *selector* allows us to select which tags we want to apply
the style to. The *property* specifies the style property we are
changing. The *value* is what we are changing the value to.

Including CSS
^^^^^^^^^^^^^

CSS can be included in a document one of three ways.

1. In-line: Right in the tag you want styled.
2. Internal: In the ``head`` portion of the document.
3. External: In a separate file.

Most of the time, CSS should only be used externally. A web page style
should be consistent. Also, the code for the content and the style should
be separate. This makes it easier to program. It also makes the website
faster if we don't have to reload the style for every document.

In-line CSS
^^^^^^^^^^^

.. code:: html

  <h1 style="text-align:center;font-size: 14px;">This is a heading.</h1>

Internal CSS
^^^^^^^^^^^^

.. code:: html

    <head>
      <style>
      h1 {
          text-align: center;
          font-size: 14px;
      }
      </style>
    </head>


External CSS
^^^^^^^^^^^^

.. code:: html

    <head>
      <link rel="stylesheet" type="text/css" href="stylesheet.css">
    </head>

.. code:: css

    h1 {
        text-align: center;
        font-size: 14px;
    }

CSS Selectors
^^^^^^^^^^^^^

Selectors are a way to "select" parts of the document that meet a certain
criteria. Some examples:

* Select all paragraphs
* Select all first-level headings
* Select all parts classified as "question"
* Select the footer
* Select the first paragraph in the first article


We use these selectors to "select" what elements get a new
style.

Tags
^^^^

Simple tag selectors start with the tag name. In the example below,
all paragraph ``p`` tags will be set to have a font size of 14 pixels.

.. code:: css

    p {
        font-size: 14px;
    }


IDs
^^^

You can create tags with an ID. All IDs *must be unique*.
For example:

.. code:: html

    <p>Generic paragraph</p>
    <p id="summary">Specific summary paragraph.</p>
    <p>Generic paragraph</p>


You can select a specific ID using the pound sign (#):

.. code:: css

    #summary {
        font-size: 14px;
    }

Classes
^^^^^^^

Classes are used when you might have *multiple* tags
that need the same style. That is, the tag may not be unique.

.. code:: html

    <p class="odd">Generic paragraph</p>
    <p class="even">Generic paragraph.</p>
    <p class="odd">Generic paragraph</p>
    <p class="even">Generic paragraph.</p>

.. code:: css
    .even {
        background-color: white;
    }
    .odd {
        background-color: green;
    }

Advanced Selectors
^^^^^^^^^^^^^^^^^^

There are many other selectors. Here are some examples:

.. code:: css

    /* Select all div and p elements */
    div, p {
        /* Properties */
    }

    /* Select all p elements that are in div elements */
    div p {
        /* Properties */
    }

    /* Select all p elements have a div parent */
    div > p {
        /* Properties */
    }

    /* Select a new style when the user hovers the mouse over the element */
    :hover {
        /* Properties */
    }

Check out this excellent reference from w3schools:

http://www.w3schools.com/cssref/css_selectors.asp

CSS Properties and Values
^^^^^^^^^^^^^^^^^^^^^^^^^

http://www.w3schools.com/cssref/default.asp

Generators:

* `CSS3 Generator <http://css3generator.com/>`_
* `Box Shadow <http://www.cssmatic.com/box-shadow>`_
* `Button Examples <http://www.hongkiat.com/blog/css3-button-tutorials/>`_
* `Button Maker <http://css-tricks.com/examples/ButtonMaker/>`_
* `Downloadable Themes <http://html5up.net/>`_
* `Layout Generator <http://www.cssportal.com/layout-generator/>`_

Color Theory
^^^^^^^^^^^^

* Introduce common color theory terms

  * `http://www.worqx.com/color/index.htm <http://www.worqx.com/color/index.htm>`_
  * `Hue <http://en.wikipedia.org/wiki/Hue>`_
  * `Chroma/Colorfulness <http://en.wikipedia.org/wiki/Colorfulness>`_
  * Read: `http://www.smashingmagazine.com/2010/01/28/color-theory-for-designers-part-1-the-meaning-of-color/ <http://www.smashingmagazine.com/2010/01/28/color-theory-for-designers-part-1-the-meaning-of-color>`_

* See it in action: `http://colorschemedesigner.com/ <http://colorschemedesigner.com/>`_

* Browse schemes `http://kuler.adobe.com <http://kuler.adobe.com>`_

.. _CSS Zen Garden: http://csszengarden.com/
.. _Bootstrap: http://getbootstrap.com/