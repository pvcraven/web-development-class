Assignment 7 - PHP Include
==========================

Take the project you have on your own web server, and modify it to use the PHP
include statement.

1. Get your own copy of the project, from the last assignment, working on your
   computer under XAMPP. You should be able to get to it from ``http://localhost``.
   Work off a recent branch that looks decent, not an early one with no styling.
2. Put the navigation in a common file as shown in
   :ref:`include_statement`. Reference the navigation file from all the
   main pages that need it. You'll need to change files like ``index.html`` to
   ``index.php`` for the PHP ``include`` to work. Also, pull the navigation out
   of your project. Don't use the example navigation from the class example, because
   you'll lose all your styles.
3. Update the navigation code to link to ``.php`` and not ``.html``. When testing
   your pages, force a refresh the page by holding down the shift key while
   hitting refresh on your browser. Otherwise you may just get a cached copy
   and not go to the server for a fresh copy.
4. Put the footer in a common file. Reference the footer file from all the
   main pages that need it.
5. Use CSE Validator to check your entire website. Do *not* check your individual
   files as they exist on the disk. Check your actual web site.
6. Commit and push your code.
7. Make sure your Amazon web server is updated with the new code. If you can
   click through your navigation and see that the files end in ``.php`` then
   you are probably ok. If you didn't get the webhook installed, you might need
   to manually go to ``deploy_script.php`` to update the server.


Turn in:

* A link to your web site's AWS server where this is working. Don't give me
  a "localhost" or "file" link, obviously.
* A link to the GitHub project on the web, showing the index.php file.
  (A link to the web page,
  not a link to clone it.) Make sure it is a link to YOUR GitHub, not
  someone else's. Make sure you link the branch that you updated.
