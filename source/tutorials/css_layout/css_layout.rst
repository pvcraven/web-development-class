CSS Layout Tutorial
-------------------

Inline vs. Block
^^^^^^^^^^^^^^^^

Default is ``block`` for a ``<div>`` tag. This is what a bunch of blocks
look like. Note that they take the whole width, and work their way down the
page.

.. image:: demo_01.png
    :width: 550px
    :align: center
    :alt: Alt

.. literalinclude:: demo_01.html
    :linenos:
    :language: html
    :emphasize-lines: 14

With ``inline``, which is the default for a ``<span>`` tag, everything flows
like text on a line. Try resizing the window so you get a line-wrap.

.. image:: demo_02.png
    :width: 270px
    :align: center
    :alt: Alt

.. literalinclude:: demo_02.html
    :linenos:
    :language: html
    :emphasize-lines: 10, 15

Position
^^^^^^^^

Looking to center or right align a block? It isn't intuitive. Here it is:

.. image:: demo_06.png
    :width: 550px
    :align: center
    :alt: Alt

.. literalinclude:: demo_06.html
    :linenos:
    :language: html
    :emphasize-lines: 34, 38, 39

You can also "float" items. Resize the window and see some odd things. Note
that floating objects are not contained in the ``section`` tag, but float outside
of it.

.. image:: demo_07.png
    :width: 640px
    :align: center
    :alt: Alt

.. literalinclude:: demo_07.html
    :linenos:
    :language: html


By default positions are ``static`` and ignore top, bottom, left, right directives.
If instead you select ``relative``, then you can set ``top`` and ``left``
values to specify how many pixels *relative* to the last element should this
new element be.

**Important:** You can also specify negative numbers. Try it!

.. image:: demo_03.png
    :width: 320px
    :align: center
    :alt: Alt

.. literalinclude:: demo_03.html
    :linenos:
    :language: html
    :emphasize-lines: 17, 18, 19

If you select ``absolute``, then the element is **not** relative to the last\prior
element. From the name, it would be reasonable to think that "absolute" positioning
means "absolutely place this here." And that it would not be relative to anything.

Not so. Absolute positioning is relative to the element that *contains* it. Rather
than relative to the prior element. In the example below, the special element
is relative to the ``<section>`` tag. Which you can't see.

.. image:: demo_04.png
    :width: 270px
    :align: center
    :alt: Alt

.. literalinclude:: demo_04.html
    :linenos:
    :language: html


Here, we style the ``<section>`` tag. This makes it a little easier to see
how the document is relative to the position of the ``<section>`` tag.

.. image:: demo_05.png
    :width: 400px
    :align: center
    :alt: Alt

.. literalinclude:: demo_05.html
    :linenos:
    :language: html

