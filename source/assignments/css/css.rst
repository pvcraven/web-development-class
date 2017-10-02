Assignment 3 - CSS
==================

In this assignment, each individual person will "style" one of the project websites.
Most projects will have two people independently styling the project.
To keep the work separate, everyone will have their own "branch" of the project.

Eventually, each website will have about four different branches with independently
created styles. We will select the best one hunger-games style.

To complete this project:

* Find the project that you have been assigned.
* Find the owner, get yourself added as a contributer.
* Clone it.
* Look at it.
* Create a branch of the project in SourceTree. Follow the :ref:`branching-tutorial`.
* You will be changing the files that are already there. Do NOT create your own folder with your
  own set of files. You can correct mistakenly named files. You can reorganize poorly organized
  files. But don't let there be two copies of the website in the project.
* Double-check the project for HTML and link errors using HTML Validator.
  Fix any issues. This is like real life, where you get stuck cleaning up other
  people's messes.
* Make sure no one checked in those temp files that CSE Validator creates. They
  start with a tilde and look like ``~cse_wb_index.html``. Delete them if they
  exist. Perhaps create a ``.ignore`` file so you don't accidentally add more.
* Make sure all the file names are lower case, and have no spaces. Underscores
  are ok. Go back and fix links to match the case.
* Add a little bit more content to the site of your own creation. Seriously.
  You'll be graded on this. Add 10 or more items of new content. An item might
  be a new paragraph, a new image, or something similar.
* Delete those comments saying who owns the file. You own all the files now.
* Select a color scheme for your website.

  * Use color theory and tools we talked about in class.
  * Perhaps search through Adobe's Kuler_.

* For index.html:

  * Apply one or more in-line styles
  * Apply one or more styles in the <head>

* For all pages:

  * Apply a stylesheet that you've created
  * Make sure the stylesheet is a subdirectory named "css"
  * Most of your styles should be in this page
  * Only create one stylesheet. Don't create a stylesheet for each html page. The idea
    of a stylesheet is to apply the same style across multiple pages.

* Create styles with a tag selector
* Create styles with an id selector (feel free to update HTML with ids and classes as needed)
* Create styles with a class selector
* Create borders
* Create a menu
* Find the table in the website and style it

* Common problems to avoid:

  * Blocks of text should black on white, or near-black and near-white.
    Maybe white on black. When reading text give your reader as much contrast as
    possible.
    Use color for highlights or titles.
  * Do not center blocks of text. That's very hard to read.

* Spend some time doing detail work. Make it look good.
* Revalidate with HTML Validator. Don't forget to validate your css file. I'll likely look at the main index
  and the css file when I grade.
* Commit
* Push
* Submit the assignment in Scholar. Paste in the link to the GitHub web site for the project.

.. image:: rubric.png
    :width: 500px
    :align: center
    :alt: Rubric

.. _Kuler: https://color.adobe.com/explore/most-popular/?time=all
