.. _bootstrap-grid-tutorial:

`Bootstrap`_ Grid Tutorial
--------------------------

By now you should have:

* Look at the
  `Bootstrap Examples <http://getbootstrap.com/getting-started/#examples-framework>`_
  to see what is possible.
* Then look at their
  `CSS Documentation <http://getbootstrap.com/css/>`_
  to know how to use it.
* Finally, look at their
  `grid system <http://getbootstrap.com/css/#grid>`_. It is a very important
  tool for layout.

However those grid examples are complex.
Here are some full, simple grid examples:

Example 1
^^^^^^^^^

Bootstrap has a 12 column layout. The div below uses 6 columns. It
always takes half the screen.

.. literalinclude:: example_01.html
    :linenos:
    :language: html

Example 2
^^^^^^^^^

Bootstrap has a 12 column layout. We now have two divs that each take
6 columns. Therefore they always take half the screen, and appear
side-by-side.

.. literalinclude:: example_02.html
    :linenos:
    :language: html


Example 3
^^^^^^^^^

When the screen is xs or sm, each div takes 12 columns. The width
of the screen. When the screen gets to md size, each div takes
6 columns. So they appear side-by-side.

.. literalinclude:: example_03.html
    :linenos:
    :language: html

Example 4
^^^^^^^^^

This example scales to between using the whole width (all 12
columns) on small screens, to using only 3/12 = 25% of the width on
large screens.


.. literalinclude:: example_04.html
    :linenos:
    :language: html

Example 5
^^^^^^^^^

This example has sidebar that goes away when the screen is extra
small.

.. literalinclude:: example_05.html
    :linenos:
    :language: html


.. _Bootstrap: http://getbootstrap.com/
