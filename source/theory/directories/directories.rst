Directories
-----------

Absolute and Relative Directories
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Only the smallest websites will put all of the files required into one folder.
It is best to organize files into different folders.
If files are in different folders, we able to link between the
folders.

The simplest links are between HTML files in the same directory. Here is an
example of linking between two files in the same directory:

.. literalinclude:: ../../_static/directories/v1/page1.html
   :language: html
   :linenos:
   :caption: page1.html

.. literalinclude:: v1/page2.html
   :language: html
   :linenos:
   :caption: page2.html

Try it out: `here <../../_static/directories/v1/page1.html>`_

This next example adds a new page, named `page3.html`
in a new subdirectory, named `subdir`. Note that the links in
`page1.html` go down into the subdir, and `page3.html`
has a link that goes up one directory. This is done by using `../`
in front of the file name. The two dots tell the comptuer to go "up" one
directory.

.. literalinclude:: ../../_static/directories/v2/page1.html
   :language: html
   :linenos:
   :caption: page1.html

.. literalinclude:: ../../_static/directories/v2/page2.html
   :language: html
   :linenos:
   :caption: page2.html

.. literalinclude:: ../../_static/directories/v2/subdir/page3.html
   :language: html
   :linenos:
   :caption: subdir/page3.html

Try it out: `here <../../_static/directories/v2/page1.html>`_

The next example shows how to extend the same concept to link into
nested directories:

.. literalinclude:: ../../_static/directories/v3/page1.html
   :language: html
   :linenos:
   :caption: page1.html

.. literalinclude:: ../../_static/directories/v3/subdir/page3.html
   :language: html
   :linenos:
   :caption: subdir/page3.html

.. literalinclude:: ../../_static/directories/v3/subdir/supersub/page4.html
   :language: html
   :linenos:
   :caption: subdir/supersub/page4.html

Try it out: `here <../../_static/directories/v3/page1.html>`_

URLs may be *absolute* or *relative*.
The URLs shown so far have all been relative URLs.
Relative URLs give directions from where the user is at, to where the user would
like to go.
If possible, it is best to use relative URLs.
The main advantage of relative URLs it is
possible to move the files into a different directory, or even a different
website and still have the links work.
Absolute URLs will not take into account where the user is at currently, and
always link to the same place. This is the right thing to do when linking to
other websites, or other major sections of a website. It is a bad idea when
creating links between pages of a website, because any moving of directories
will cause every link in the website to need updating.

The next example shows two kinds of absolute URLs. The first gives an absolute
path. Any path that begins with a `/` is an absolute path. It is possible to take
an absolute path, and change the name of the website and still have the path work.
The second also specifies the website name. It is not possible to update the website
name and not have to also update the link.

.. literalinclude:: ../../_static/directories/v4/page1.html
   :language: html
   :linenos:
   :caption: page1.html

Try it out: `here <../../_static/directories/v4/page1.html>`_

Remember, if a website links to a directory but not a file, the web server will look for an index file, such as
`index.html` or `index.php`. If an index file does not exist, the web
server will look to see if it can create a directory listing of all the files in the directory.
It is usually a bad idea for security reasons to allow this to happen on a production web server.
Apache stores its configuration in a text file named `httpd.conf`.
In this file there is a <a href="https://wiki.apache.org/httpd/DirectoryListings">configuration setting</a> to turn this directory listing
feature off.

Sample Structure
^^^^^^^^^^^^^^^^

.. image:: images/sample_directory_structure.png
    :width: 350px


* `docs`: This directory contains documents about your website
	for other developers. It isn't seen by the public.</li>
* `public_html`: This directory is where you'll point your
	production webserver to serve files from. This is typically done with a
	<a href="http://httpd.apache.org/docs/2.4/vhosts/examples.html">VirtualHost</a>
	in the `httpd.conf` file.</li>
* `css`: All your custom style sheets go here.</li>
* `img`: Images go here. It is nice to separate images that are
	part of the look/feel of your website vs. images that are part of the
	content.</li>
* `js`: All your custom JavaScript files go here.</li>
* `resources`: These are "parts" of a web page that you'll include
	from the `public_html` pages, that you don't want users directly
	accessing. Often they are divided up into a Model-View-Controller (MVC) framework. We'll talk about
	that more in a later chapter.


Security
^^^^^^^^

In terms of security, directories and files pose two main challenges:
First: Don't put any file in the publicly accessible directories that
is not OK for users to access. Do not assume a user won't "guess" the filename
or type it in directly.
Second: <a href="http://en.wikipedia.org/wiki/Directory_traversal_attack">Directory traversal</a> is
a common attack vector for hackers. When you write code, make sure that users can't
specify their own directories. Particularly, don't let them traverse up the
directory tree. Since we haven't done any PHP coding yet, we won't discuss this
in detail yet.