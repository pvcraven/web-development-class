Google Analytics
================

Google makes a "free" service to help you analyze traffic on your site.
If you include code that downloads a Google tracker on all your websites,
they'll give you stats on who comes to your website.

First, sign up for Google Analytics:

https://analytics.google.com/analytics/web

Next, you ad a tracker like this to every HTML page you have.
It goes just before the close ``</body>`` tag.

.. code-block:: html

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-C7W6VSD1H5"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-C7W6XXD1H5');
    </script>

Because you load this script every time you pull a page on your website,
Google can keep and track analytics. You get this "free".

What does Google get out of this? They know the users that went to your
websites. And because almost every website uses their analytics, they
can track that user from one website to another. This allows for more
targeted ads. And a scary amount of profiling.

Overview Page
-------------
.. image:: ex1.png

Most Popular Pages
------------------

.. image:: ex6.png

Geographic Region
-----------------

This isn't exact, but based on your connection, websites can get
a rough idea of where you are.

.. image:: ex2.png

Type of Device
--------------

.. image:: ex3.png

Type of Browser
---------------
.. image:: ex7.png


Demographics
------------

Based on your browsing history, Google guesses how old you are and your gender.

.. image:: ex4.png


New / Returning visitors
------------------------

.. image:: ex5.png

Google Ads
----------
.. image:: ads1.png
