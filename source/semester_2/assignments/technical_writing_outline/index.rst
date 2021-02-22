.. include:: <isonum.txt>

Technical Writing 2: Outline
============================

.. image:: outline.svg
    :width: 25%
    :class: right-image

Next up, outlining the technical writing.

Back in high school I *hated* outlining. If an outline was required, I'd write
the outline after I wrote the paper. I always saw it as adding to the time it
took me to write the paper. I hated it, I hated it, I hated it.
(Teenage hormones are great for extra drama.)

In college, the light bulb finally went on for me. Outlining *saves* time.
One of my original mistakes was to create a separate document. Then, to spend
too much time in a word processor with formatting.
Now, I don't
create a separate document, I start with an outline and gradually expand it into
my full writing assignment. I write it out in a text editor and spend zero time
formatting.

Now I outline *everything*. See the section headings on this assignment? I outlined
them getting started on this assignment. I create a broad sketch of where I'm
going, and slowly fill in the details. If needed, I toss it into a word processor
when it is far enough along. (Really, I don't like writing with a word processor
at all.)

The best experience is when you get a chance to review other people's papers
or writing. Ever follow a tutorial and get completely lost? A tutorial skips
a step? They use a command and don't explain it? You follow a tutorial and feel
like you've learned nothing? Ever read an article where the author contradicts
himself and just wanders around? You can be better than that, but it takes
effort.

Setting up the restructured text
--------------------------------

Before we begin writing, we need to set up a page for us to write into.
Start by:

* Create a new directory in your project for this assignment, or repurpose one
  that's already there, like ``chapter1``.
* Create a new ``.rst`` document in your restructured text project in that directory.
* Create a title, clearly labeling it as the outline. Double underline it
  like normal.

    .. code-block:: rst
      :caption: source/outline/index.rst

      Basket Weaving Tutorial Outline
      ===============================

* Update the main ``index.rst`` file to link the outline rst in your main table
  of contents. Update the title and intro if you haven't already.

    .. code-block:: rst
      :caption: source/index.rst

        Basket Weaving Tutorial
        =======================

        How to weave baskets.

        .. toctree::
           :maxdepth: 1
           :caption: Contents:

           annotated_bibliography/index
           outline/index

* Build and make sure it works.
* Copy over your bibliography. Not the annotations, just the references. We'll
  use these in the outline.

Creating the thesis statement
-----------------------------

* Create a thesis statement

  * Everything should support this thesis. Even a tutorial
    needs a thesis, such as "How to program a card game in
    Python." This is what your writing is going to center on.
  * Under the title, label and define your thesis:

    .. code-block:: rst

      **Thesis:** How to weave baskets.

  * Revise the thesis. Start broadly, then iterate on it until it gets better.
    For example:

    * Basket weaving tutorial.
    * Tutorial on weaving baskets with bamboo.
    * Tutorial on weaving round baskets with bamboo.
    * Tutorial on weaving round baskets with a diagonal pattern using bamboo.
    * Tutorial on weaving round baskets with a diagonal pattern using bamboo reed
      wicker.

  * Email your thesis to paul.craven@simpson.edu. Talk it over with the professor
    and get feedback. Remember it is WAY easier to course-correct at this point.

Create an outline
-----------------

* Create a broad outline:

    .. code-block:: rst

        **Thesis:** Tutorial on weaving round baskets with a diagonal pattern using
        bamboo.

        * Step 1 - Prep your workspace
        * Step 2 - Purchase supplies
        * Step 3 - Soak the bamboo
        * Step 4 - Create a form

* Expand the outline

  * Include where you will have code samples
  * Include where you will have screen shots
  * Include where you will use references

    .. code-block:: rst

        **Thesis:** Tutorial on weaving round baskets with a diagonal pattern using
        bamboo.

        * Step 1 - Prep your workspace

          * Order bamboo (reference on sources [#f1]_)
          * Get containers to soak bamboo (photo of stuff needed)
          * How much room do you need (Show diagram)
          * Get a form to weave around

        * Step 2 - Purchase supplies

          * Types of bamboo

            * Cane
            * Reed
            * Seagrass

          * Suppliers

        * Step 3 - Soak the bamboo

          * Only reed or cane should be soaked. Not seagrass.  (Reference [#f2]_)
          * How long to soak? Size vs. time (Reference [#f3]_)
          * Tip: Use eaves (like on a house) to soak long straight strips of bamboo
          * Water, or 3% NaOH or 10% Na2CO3 solution?

            * What is NaOH? - Sodium hydroxide
            * What is 10% Na2CO3? - Sodium carbonate

        * etc...

Revise the outline
------------------

Do some reading and research! Get your main ideas, then
start to break it down.

Content
^^^^^^^

* Does each main point directly support the thesis? Double-check
* Does each second-level point, directly support the point it belongs to?
* Do you have six to ten main points?
* Do you have at least four to ten points to support each major point?
* Are you using every bibliography reference you have? (Feel free to add more
  as needed.)
* Do you identify where you'll need figures, screenshots, or diagrams?
* Do you identify where you'll need program listings, commands, and/or output samples?
* Don't full write-out things yet. Outline only.
* Flag down the professor and go over things. If you are willing to do this,
  odds are it will drastically improve your grade. In the "real world", this
  is where you bounce ideas off someone else if you can find someone.

Technical
^^^^^^^^^

* Holding down alt-shift allows you to shift a line, or a selection up and down.
* Don't write past 80 characters. Turn on the ruler by File |rarr| Settings/Preferences
  |rarr| Editor |rarr| Code Style |rarr| Visual Guides
* Make sure spell-check is turned on. It should be by default, but can be configured
  on these two screens:

  * Settings/Preferences |rarr| Editor |rarr| Proofreading |rarr| Spelling
  * Settings/Preferences |rarr| Editor |rarr| Inspections |rarr| Proofreading |rarr| Typo

* Remember that if you need to have a two-line bullet list you need to *indent* the
  second line:

   .. code-block:: rst

      * Remember that if you need to have a two-line bullet list you need to
        indent the second line:

* Ctrl-Shift-J will join your current line with the next one.
* Build with the command-prompt and proof the output in your web browser. Ignore
  the 'preview pane' in PyCharm.

Grading
-------

* Grading will be on:

  * Have you articulated an idea and formed a thesis appropriate to Computer
    Science?
  * Have you organized your thoughts in a logical fashion?
  * Have you provided credible evidence to support your points? For a tutorial,
    'evidence' would be concrete examples someone else in this class can follow.
    Also, use your references to back up your writing.
  * Length: You likely need at least six major steps, and each major step should have
    five or more detailed items supporting it. This is a bit flexible, more major
    steps, less supporting steps, etc.

Turn in
-------

  * Direct Git-Hub link to the page
  * Direct link to ReadTheDocs with your outline.

