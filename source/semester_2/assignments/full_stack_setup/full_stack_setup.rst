Assignment 1 - Programming Environment Setup
============================================

Our goal with this assignment is to:

* Set up both a local and a production application server.
* Create a process for version control and deployment.

Complete
--------

* Follow the :ref:`java-environment-tutorial`. Make sure you can run Java
  servlets on your development computer.
* Create a new project in GitHub
* Add your project. Create a ``.gitignore`` file to \iIgnore all project files
  in the ``.idea`` folder. Don't check
  those into git. Don't check in anything in the ``out`` folder. Your ``.gitignore``
  should look like:

.. code-block:: text

    .idea/
    target/

* Follow the :ref:`java-remote-environment-tutorial`. Deploy your project to
  AWS.
* Update your project so that ``index.jsp`` says something like "Paul C Project Page."
  Obviously, put your name in there, not mine. (Don't forget this part, it is
  the most frequent way people lose points.)
* Make sure you can deploy the update, and push the changes to GitHub.

Turn in
-------

 * GitHub URL of your project
 * URL of your production server (If you send me a URL with ``localhost`` in
   it, you aren't sending me the production server and you'll get no points.)
