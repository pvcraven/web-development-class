Web Servers
-----------

So far, we have only developed web sites that can be browsed if the other person
has access to the HTML files we created.

How do they get those file?
We don't want to copy our website to a flash drive and pass it around that way!

We need to put our web pages on the Internet. To do this, we need three things:

1. A server computer. This could be a small computer, or a big server in a
   server room. There does not have to be anything "special" about the computer
   to make it a server.
2. The web pages we created stored in a folder on the server computer.
3. Web server software. This software interfaces between the network, and the
   stored files that make up our website.

Here is a diagram:

.. image:: drawing1.svg
    :width: 500px
    :align: center

The web server will:

* Open a "port" on the network and listen for other computers to hook up to it.
  (All ports are numbered. By default, unencrypted web requests are on port 80,
  and encrypted ones are on 443.)
* Listen for what page the person wants. For example:
  ``http://web-development-class.readthedocs.io/en/latest/about.html``
* Figure what base directory the files are stored in. For example:
  ``C:\Web Server\Web Development``
* Combine the base directory and the requested file to pull the proper
  file. For example:
  ``C:\Web Server\Web Development\en\latest\about.html``
* Use the `Hyper Text Transfer Protocol`_ to send the content of the file over the
  network.

A web server can do a lot more than this. But for now, let's stick to
understanding this basic functionality. **The web server is a program that makes
the HTML, CSS, and image files you've saved on your computer available on the
network.**

From here, set up your own web server using the :ref:`web_server_setup`

.. _Hyper Text Transfer Protocol: https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol
