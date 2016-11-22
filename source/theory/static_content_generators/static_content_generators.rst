Static Content Generators
=========================

Static Content Generators - A Middle Ground
-------------------------------------------

So far we've talked about two ways of building websites:

* Coding them from scratch using HTML and CSS
* Using a Content Management System like WordPress

Coding a website from scratch makes it difficult to focus on the content,
rather than the code. It is also repetitive. A person can get tired of typing
``<p>`` all the time.

A CMS is a "heavy" solution. You've got a huge application written in PHP
with tons of plug-ins. The text editor makes weird HTML when you copy/paste
from MS Word. It is hard to deploy it across servers spread across the globe.
You have to worry about backing up a database. For many websites, WordPress
is overkill. Like commuting to work in a semi when you could just drive there
on a scooter.

Behold! There is a middle-ground. You can use a **static content generator**.
In fact, that is what I do for this website.

What is a Static Content Generator?
-----------------------------------

A static content generator uses simple plain-text source files to generate
a web-site's HTML and CSS for you. The generators usually use either the
**markdown** format or the **restructured text** format.

You might already be familiar with these formats. Web sites like Reddit
allow users to use markdown to format their posts.

Static Content Generators usually work the following way:

1. You edit text files in markdown (md) or restructured text (rst) format
2. You run the content generator
3. You now have HTML/CSS files you can upload to your server

Version Control
---------------

Typically a developer will take the **source** files written in markdown
or restructured text and save them in a version control system like we have
already done using SourceTree and GitHub.

Using version control allows everyone to trace the history of the website, and
who made each change. There are also tools around how to request changes, and
how to approve changes.

When you run the static content tool, you **should not** include the result
files in your version control system. Only include the **source** files, not
the **result** files. As always though, there are some exceptions.

What Static Content Generators Are There?
-----------------------------------------

This website has a great listing of the top static content generators that
are available:

https://www.staticgen.com/

Unfortunately all of them have a bit of learning curve.

* `Jekyll <http://jekyllrb.com/>`_ is one of the most popular, but it is
  difficult to set up on Windows. It is easier to use on a Mac or Linux machine.
  GitHub has a way to integrate and automatically generate documentation with
  Jekyll, which is handy once it is set up.
* If you want to write a book, `GitBook <https://www.gitbook.com/>`_ is
  supposed to be a great tool.
* For this class, we will use `Sphinx <http://www.sphinx-doc.org/>`_.

Sphinx is the tool used to create documentation for the Python computer language,
and it is also the tool used to create the documentation for this class.

You can see what I typed in to generate any of the pages here by clicking on the
"Edit on GitHub" link at the top right. Then click on the "Raw" button which
will show you the raw text file.

Markup Languages
----------------

Markdown
^^^^^^^^

https://en.support.wordpress.com/markdown-quick-reference/

Markdown Syntax

Restructured Text
^^^^^^^^^^^^^^^^^

http://www.sphinx-doc.org/en/stable/rest.html

Supporting Websites
-------------------

* GitHub
* ReadTheDocs
