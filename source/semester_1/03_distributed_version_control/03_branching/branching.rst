.. _branching-tutorial:

Branching Tutorial
------------------

Quick Summary
^^^^^^^^^^^^^

* ``git branch`` Lists all branches. The starred branch is your current branch.
* ``git checkout -b my_new_branch`` Creates a new branch, and switches to that branch.
* ``git checkout my_branch`` Switches to an already existing branch.
* ``git branch -d my_branch`` Deletes a branch.
* ``git push --set-upstream origin my_branch`` Push a new branch to the server for the first time.

Creating a Branch
^^^^^^^^^^^^^^^^^

* Make sure you have permission as a "collaborator" with the project.
* Make sure you have an up-to-date clone of the repository.
* Get started. Make a change to your files.
* Open a command prompt
* ``cd`` to your project directory
* Type ``git checkout -b my_new_branch``. Obviously, don't use ``my_new_branch`` but
  give the branch its own name.

Switching Branches
^^^^^^^^^^^^^^^^^^

* Use ``git branch`` to see all the branches, and which one you are currently on.
* Use ``git checkout`` without the ``-b`` to practice switching between branches.

Changing a Branch
^^^^^^^^^^^^^^^^^

* Switch to your personal branch. Change some files.
* Do a ``git add`` and ``git commit`` on your changes.
* Switch between the ``master`` branch and your branch. See how the file changes.
* Type ``gitk`` to graphically see both branches.

First Push Of New Branch To Remote Server
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

* If the branch has not yet been pushed to the remote server, type ``git push --new-upstream test_firstname_lastname``
* If it has been pushed already, just switch to the branch and type ``git push``.

Merge a Branch Back To Master
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: text

    git checkout test
    git pull
    git checkout master
    git pull
    git merge --no-ff --no-commit test

At this point, type:

``git status``

Then see if there are any conflicts. If so, take care of them. Once you've
done that, type:

.. code-block:: text

    git add -A
    git commit -m 'merge test branch'
    git push