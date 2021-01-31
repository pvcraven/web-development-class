Technical Writing 1: Annotated Bibliography
===========================================

In this class we will only scratch the surface of a few web technologies.
This assignment looks to:

* Have you practice learning a new technology on your own.
* Learn to document that knowledge, so you can contribute that knowledge to
  your team and even larger computing community.

For this assignment, we'll create an annotated bibliography. Rather than pick up
the first tech documentation that we can find, we want to survey what's out there
and pull from the best choices.

Step 1: Pick a Topic
--------------------

* Pick a JavaScript library from this
  `list of rising stars <https://risingstars.js.org/2020/en>`_ to learn and
  document.

* Paper on web security. This could go a lot of ways. Some ideas:

  * Hacking techniques, how to practice, such as https://www.openbugbounty.org/

  * Vulnerability scanners
  * Exploit databases

      * OWasp https://owasp.org/www-community/vulnerabilities/
      * Open Bug Bounty https://www.openbugbounty.org/

  * The hacking community, from "2600" to 2021. Talk to, interview some current
    people.

* Back-end systems

  * Python Django
  * Microsoft C# .Net

Step 2: Set Up GitHub
---------------------

See class video for a step-through on how to do this.

* Fork this template repository: https://github.com/pvcraven/sphinx-template
* Clone the repository onto your computer
* Open in PyCharm
* Set up the virtual environment
* Make sure you can build the project ``make html``

Step 3: Find Resources
----------------------

Find five sources. At least one from these:

* On-line
* A book. If the library doesn't have a book you need, let me know. We've got
  library budget money we need to spend.
* On-line database like EBSCO https://simpson.edu/internal/dunn-library/students/databases-z
  (There are a lot of way-cool sets of articles, like stuff from ACM, IEEE, but are
  pay-for.)
* One video from a conference.

If you can't find a source from all four, let me know.

Step 4: Write the Annotated Bibliography
----------------------------------------

Your bibliography should look like:

The Web application security topic from Wikipedia [#f1]_ would be a good place
to start. This covers [summary]. I could pull from this [specific info].

.. [#f1] Wikipedia contributors. (2021, January 21).
   "`Web application security <https://en.wikipedia.org/wiki/Web_application_security>`_".
   In Wikipedia, The Free Encyclopedia. Retrieved 17:32, January 31, 2021,
   from https://en.wikipedia.org/w/index.php?title=Web_application_security&oldid=1001721387

The code would look like:

.. code-block:: text

    The Web application security topic from Wikipedia [#f1]_ would be a good place
    to start. This covers [summary]. I could pull from this [specific info].

    .. [#f1] Wikipedia contributors. (2021, January 21).
       "`Web application security <https://en.wikipedia.org/wiki/Web_application_security>`_".
       In Wikipedia, The Free Encyclopedia. Retrieved 17:32, January 31, 2021,
       from https://en.wikipedia.org/w/index.php?title=Web_application_security&oldid=1001721387

Use
`APA style <https://pitt.libguides.com/c.php?g=12108&p=64730>`_.

Cite the *original* source. If you cite something like Google, Amazon, Wikipedia,
you might have issues. These companies rarely create content. You might find the
image or information with their tools, but then use some detective work to find the
original source. For example, above I used Wikipedia. I might want to site that
37% of vulnerabilities are cross-site-scripting. That info did not come from
Wikipedia, but security vendor Cenzic, in a March 2012 article.

You might find yourself wanting to list a website as a source. Remember that
the source isn't "wsj.com", the source is "Wall Street Journal." Sometimes the
"about" page has this information. If you can't figure out who the publisher is,
it probably isn't a good source.

If using an auto-citation formatter, beware of "n.p." for no publisher and "n.d." for
no date. If I see a publisher immediately followed by "n.p.", it indicates that not
much thought was put into the citation. If you can't figure out the entire date,
at least try to narrow it down to the month or year.

I don't want to see the text of a URL, but please do use a link to reference the original source
as shown in the example above.

Remember: A list of URLs is never ok for a bibliography.