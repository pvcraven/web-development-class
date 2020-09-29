.. _cascading_style_sheets_about:

Cascading Style Sheets
----------------------

Introduction to CSS
^^^^^^^^^^^^^^^^^^^

CSS stands for *Cascading Style Sheets*. The "look and feel" of a website
is specified by the CSS language. CSS takes the HTML and transforms it to
look the way the designer would like.

Originally the "look" of a website was mixed in with the HTML. For small pages, this
was easier to code. But for large websites it quickly became unmanageable.

For example, imagine you wanted to center a title. You used the old ``<center>``
tag. If your web page had 100 titles, how many times would you have to use the
``<center>`` tag? How could you make sure you did it consistently? And what if
the Tim Gun of website design came, and said, "Centered titles are ugly. Today
we make all titles left-aligned!" Now the poor developer has to change all 100
files.

But wait, what if there was just **one** file that said "center titles"? Then
to update the entire website, you just changed that one file to say "left-align
titles"? That's what we do with CSS.

Separating the style into a CSS gives a developer the following advantages:

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
* Speeds website loading times, because we load a website's style information once
  and then remember it for each page.

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
          font-size: 18px;
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

Most of the time, CSS should only be used externally. A web's style
should be consistent across multiple pages. It only makes sense to separate
this out into one file.

But we will show you the other two ways as well.

.. _in-line-styles:

In-line CSS
^^^^^^^^^^^

You can use the ``style`` attribute in a tag. Then your can list all the
styles for the tag, separated by semi-colons. See below:

.. code:: html

  <h1 style="text-align:center;font-size: 14px;">This is a heading.</h1>

.. _internal-css:

Internal CSS
^^^^^^^^^^^^

You can also specify the style in the ``<head>`` portion of a document:

.. code:: html

    <head>
      <style>
      h1 {
          text-align: center;
          font-size: 14px;
      }
      </style>
    </head>

.. _external-css:

External CSS
^^^^^^^^^^^^

The best way is to link to a separate style sheet. The example below links
will load a style sheet named ``stylesheet.css`` that is in the ``css`` directory.

.. code:: html

    <head>
      <link rel="stylesheet" type="text/css" href="css/stylesheet.css">
    </head>

Then your ``stylesheet.css`` file would look like this:

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

.. _tag-selector:

CSS Tag Selector
^^^^^^^^^^^^^^^^

Simple tag selectors start with the tag name. In the example below,
all paragraph ``p`` tags will be set to have a font size of 14 pixels.

.. code:: css

    p {
        font-size: 14px;
    }

.. _id_selector:

CSS ID Selector
^^^^^^^^^^^^^^^

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

.. _class-selector:

CSS Class Selector
^^^^^^^^^^^^^^^^^^

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

Check out this excellent on advanced selectors from W3Schools:

http://www.w3schools.com/cssref/css_selectors.asp

CSS Properties and Values
^^^^^^^^^^^^^^^^^^^^^^^^^

What kind of properties can you control with CSS? See this handy reference:

http://www.w3schools.com/cssref/default.asp

Color Theory
------------

* `Color Theory: Overview <http://www.worqx.com/color/index.htm>`_
* `Hue <http://en.wikipedia.org/wiki/Hue>`_
* `Chroma/Colorfulness <http://en.wikipedia.org/wiki/Colorfulness>`_
* `Color Theory for Designers, Part 1: The Meaning of Color <http://www.smashingmagazine.com/2010/01/28/color-theory-for-designers-part-1-the-meaning-of-color/>`_
* See it in action: `http://colorschemedesigner.com/ <http://colorschemedesigner.com/>`_
* Browse schemes: `http://kuler.adobe.com/ <http://kuler.adobe.com/>`_

.. _CSS Zen Garden: http://csszengarden.com/
.. _Bootstrap: http://getbootstrap.com/
