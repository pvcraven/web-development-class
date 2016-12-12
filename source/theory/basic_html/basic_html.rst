Introduction to HTML
--------------------

.. image:: mosaic.jpg
    :width: 500px
    :align: center
    :alt: Mosaic Web Browser

HTML stands for Hyper-Text Markup Language. It was initially created
during the years 1989-1992 by `Tim Berners-Lee`_ while he worked at
CERN, the European Laboratory for Particle Physics in Geneva, Switzerland. He
wrote the first web client, `Mosaic`_, which initially came out on the `NeXT`_
computer. NeXT was a Steve Jobs creation during the time he was fired from Apple.

Later Berners-Lee worked with others to create Netscape. For several years,
Netscape was the most popular web browser. Unfortunately, Netscape made one of the
classic blunders in software development.
`They decided to throw everything away and start over`_.
After that, Internet Explorer became the most popular web browser. It helped
that Microsoft included IE with Microsoft Windows. A fact that was the subject
of many long-running `anti-trust lawsuits`_. During that time, Microsoft let IE
languish for many years while Netscape became bankrupt.


Out of the ashes of the Netscape code, Dave Hyatt and Blake Ross created Firefox.
Once IE had some competition, the browser race was back on. Soon both Google's Chrome
and Apple's Safari web browsers joined the race.

An interactive time-line that describes the evolution of the web is available
here with this gorgeous interactive website:
http://evolutionofweb.appspot.com/

A great video to watch is Robert X. Cringely's Nerds 2.0.1.
It is a three part video, but it takes a bit of work to find a copy of it.
The first of the three-video series is the most interesting to watch. Watching
and understanding the history of the web is worthwhile. It can make you seem
older, wiser, and more experienced than you actually are. Which can translate
into better pay. Or the feeling that you are superior to your coworkers,
which is also fun. HTML has changed over the years. The current version of HTML
is HTML5_. Thankfully HTML has gotten easier to work with, not harder. One of
the reasons is that the specifications for the *style* of a document are
separate from the *content* of the document. Originally they were mixed
together. That was more difficult to manage. The look and feel of a web page is
specified by a different language called CSS, which we will cover in a later chapter.

Proper HTML Coding
^^^^^^^^^^^^^^^^^^

Web clients (browsers) are designed to try and show the HTML
even if there are mistakes in the HTML code. From the user's standpoint
this is nice, because they don't see the errors. But it also means
there are many web developers out there creating code filled with
errors, and they think that is OK. It is not.

There are several issues with bad HTML code:

* Web standards state what happens with well-formed HTML documents.
  But not with documents that are not formed correctly. That is left
  up to the web browser developers to figure out. So a poorly formed document might
  not look the same on all the different browsers.
* Languages like JavaScript and code that automatically parses out
  an HTML document are more sensitive to poorly constructed HTML
  documents. So if a web developer needs to add JavaScript or wants
  to create a custom app that works with the web site, it will
  make development more time consuming and bug-prone.
* You can get an idea if a developer is careless by seeing if the
  HTML he/she codes is filled with mistakes. For example, on my
  resume I say how I'm responsible for developing
  ProgramArcadeGames.com. Any prospective employer can
  see if I'm worth bringing
  in for an interview by running an automated HTML checker.
* And most importantly: other developers will make fun of you
  if you write bad HTML code.

Parts of a URL
^^^^^^^^^^^^^^

Web addresses are called Uniform Resource Locators (URLs).
The name of the HTML file that you create will be the last part
of the URL. For example, in the URL below the filename
would be ``test.html``, located in a ``chapter01``
directory:

http://webdev.training/chapter01/test.html


There are many parts to a URL:

.. image:: url.png
    :width: 800px
    :align: center
    :alt: Parts of a URL

Let's break it down. The first part is the *protocol*. In this case, the
protocol for moving the data is HyperText Transfer Protocol (HTTP). (HTTP and HTML
are related, but different. HTTP is the "car" that moves the data, and HTML is one type
of data the car can move.) Other common protocols are ``https`` for encrypted data
and ``ftp`` for old-school file transfer.

``http://``


Next is either the `domain name`_,
or the IP address. Because this is covered in detail in our Networking class,
I won't cover it here. If you haven't taken a Networking class, you might want to read
more about it.

``http://webdev.training``


Next *might* come the port. To tell web traffic from e-mail traffic, networks use
port numbers. Web traffic usually goes over port 80 for unencrypted traffic, or port 443
for encrypted traffic. However a web address can specify something different. In this
case, port 8080 is specified.

``http://webdev.training:8080``


Next might come the path. If web files are in subdirectories on the host
computer, you may see path names. Path names are separated by forward slashes,
even though on windows path names are separated by back slashes. In this example
we have two subdirectories, ``directory`` and ``d2``.

``http://webdev.training:8080/directory/d2/``


Next up might come the file name. This usually corresponds to a file name
on the server computer. In this case, the server will look for ``file.php``
in the ``directory/d2/`` path.


The default HTML file extension is ``.html``.

Because long ago, Microsoft Windows could not handle extensions
with four characters, you sometimes see the extension ``.htm``
for backwards compatibility.

The ``.html`` extension is only good for static web pages. That
is, web pages that you know won't be customized or show current data. When
we talk about PHP later this will be explained in detail. You may see
extensions like ``.php``, ``.jsp``, ``.asp``, and
others. In our case, we can get used to using the ``.php`` extension.


The directory and filename part of a URL are case sensitive.
here are some exceptions in regards to Windows servers not
being case-sensitive, but developers
should treat everything as case sensitive. To
make it easier for development and for people using the URLs, it is
good practice to make the URLs all lower case, and without spaces.

Not all URLs have paths. By default, most servers will look for files like
``index.html`` and ``index.php`` if no file is specified.

``http://webdev.training:8080/directory/d2/file.php``


Next up, *parameters*. These are variables that are passed to the
file. A question mark separates the beginning part of the URL with
the parameters. Each parameter is separated by an ampersand. In this case
the parameter ``name`` has the value ``paul`` and the
parameter ``time`` has the value ``afternoon``.

``http://webdev.training:8080/directory/d2/file.php?name=paul&amp;time=afternoon``


Last, there is the *anchor*. This will "auto-scroll" to a spot
in the web page rather that start the user at the top. The
anchor is separated from the rest of the URL by a pound symbol. In this
case the anchor is ``article1``.

``http://webdev.training:8080/directory/d2/file.php?name=paul&amp;time=afternoon#article1``




.. _Tim Berners-Lee: http://en.wikipedia.org/wiki/Tim_Berners-Lee
.. _Mosaic: http://en.wikipedia.org/wiki/Mosaic_%28web_browser%29
.. _NeXT: http://en.wikipedia.org/wiki/NeXT_Computer
.. _They decided to throw everything away and start over: http://www.joelonsoftware.com/articles/fog0000000069.html
.. _anti-trust lawsuits: http://en.wikipedia.org/wiki/United_States_v._Microsoft_Corp.
.. _Nerds 2.0.1: http://youtu.be/oMvASPzXE-M?list=PL947A51E74B682C2C
.. _HTML5: http://en.wikipedia.org/wiki/HTML5
.. _domain name: http://en.wikipedia.org/wiki/Domain_Name_System
