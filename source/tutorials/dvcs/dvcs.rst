Distributed Version Control System Tutorial
-------------------------------------------

Installing SourceTree
^^^^^^^^^^^^^^^^^^^^^

Changes that you and other developers make to the code are stored in "code
repositories."

Just like the web can be browsed with different web browsers, code repositories
can be browsed with different clients. We'll use a client called SourceTree.

Download SourceTree from:

http://www.sourcetreeapp.com

SourceTree is a nice GUI application that helps work with our repositories.
It actually works on top of tools like *Git* and *Mercurial* to make them easier
to use. These tools are "command-line" tools that operate only by typing in
commands. They have no menus.
You can do a lot more by manually typing in commands on the command line,
but that is beyond the scope of this tutorial. And so we use SourceTree.

You will need to `create an account with Atlassian`_. Accounts ending in ``.edu``
can get extra features, so I recommend signing up with your school e-mail.

Installation of SourceTree should be straight-forward. However, when your first
run SourceTree it wants to do *more* setup. You'll see a screen like this:

.. image:: source_tree_setup_1.png
    :width: 400px

Then you will need to log in with that Atlassian account you created:

.. image:: source_tree_setup_2.png
    :width: 400px

You could hook up GitHub here. But don't. Just skip this step:

.. image:: source_tree_setup_3.png
    :width: 400px

You probably don't have an SSH key. So skip this step. (I like how the text says
click "no" but there is not a button named "no.")

.. image:: source_tree_setup_4.png
    :width: 350px

SourceTree is a pretty GUI on top of Git. So we need a copy of Git. Go ahead
and install it:

.. image:: source_tree_setup_5.png
    :width: 350px

Then do the same thing with Mercurial:

.. image:: source_tree_setup_6.png
    :width: 350px


GitHub
^^^^^^

After installing SourceTree, `create an account with GitHub`_. GitHub is where
we will store the code that we write. It is a very popular web site for code
management. Particularly open-source software.

Creating Your Project
^^^^^^^^^^^^^^^^^^^^^

Cloning
=======
* Create accounts on GitHub
* One person, create a project. Include a 'readme'. Others can be left as default.
* Clone the project onto your computer.

Initial Project Setup
^^^^^^^^^^^^^^^^^^^^^

To start with, one person on your team should have created your project on GitHub.
That person should have "cloned" a copy of the project on your computer.

For the person on your team that created your GitHub repository:

* Log into GitHub website.
* For the person that created the project, find it on GitHub.
* Click "Settings" tab
* Click "Collabrators"
* You'll likely have to re-enter your password
* Find your other team member(s) and add them as a collaborator. Also add my
  account 'pvcraven'.

For the other team members:

* Log into GitHub website.
* Find the project
* Clone your own copy of the project

Committing
^^^^^^^^^^

* Create the directory structure as shown in the assignment
* Add YOUR files, and your files only, to the project
* Commit those files
* Push them to the server

Merging Changes
^^^^^^^^^^^^^^^

* If you push to the server, and someone else has already done so, your push
  will error out.
* Select "pull"
* Select "merge"
* Select "push"

How to resolve conflicts
^^^^^^^^^^^^^^^^^^^^^^^^

* We'll cover this in class

Turn in Assignment 1
^^^^^^^^^^^^^^^^^^^^

To turn in assignment 1, copy the GitHub address for your project into the submission
form on Scholar for assignment 1.

* Make sure you submit your files, and your files only.
* Make sure you submit any images that go with your files.
* Make sure to add descriptive comments when submitting. (You can't edit them
  later, so make sure you get them right the first time.)
* Make sure your files have a comment with your name in them at the top.
* Make sure HTML Validator returns all the files as free from errors or warnings.


.. _create an account with Atlassian: https://id.atlassian.com/signup?application=mac&continue=https%3A%2F%2Fmy.atlassian.com%2Fproducts%2Findex

.. _create an account with GitHub: https://github.com/
=======
>>>>>>> 37748a86f6f69975fbc14e53e418d4d0783f95dd
