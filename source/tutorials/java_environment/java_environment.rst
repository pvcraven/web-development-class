.. _java-environment-tutorial:

Java Servlet Development Environment Setup
==========================================

Install Java
------------

Download and install Java_. You want to download the "Standard Edition" (SE).
There is also a "Java Runtime Environment" (JRE). This doesn't let you compile
``.java`` files to ``.class``. So don't download that one.

.. note::
    If you are using a lab computer, Java is already installed in
    ``C:\Program Files\Java\jdk1.8.0_101``

.. _Java: http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html

Install XAMPP
-------------

Download and install XAMPP_ for Windows, Mac, or Linux.
XAMPP includes several programs, along with an easy to use control panel.
XAMPP has our MySQL database and Tomcat program. We probably won't use Apache
like we did last semester.

.. note::
    If you are using a lab computer, XAMPP is already installed in
    ``C:\xampp``

.. _XAMPP: https://www.apachefriends.org/index.html

Get a Sample Tomcat Application Working
---------------------------------------

We will create and run our application from inside an IDE which will make
development a lot easier that what we are about to go through below.

**But** you should run through this tutorial and be aware of the
nuts and bolts on how deploying and application works.
Otherwise, when things break, you don't have the skills to fix it.

Get the server running
^^^^^^^^^^^^^^^^^^^^^^

Open up the XAMPP control panel and start Tomcat.

.. image:: xampp.png
    :width: 500px

Then go to the following
address to see if it works::

    http://localhost:8080

Note that Tomcat serves from port 8080 instead of the default web port of 80.
This keeps it from getting confused with Apache. There's a lot more I could
say about  this, but for now, just remember to go to ``http://localhost:8080``
instead of ``http://localhost``.

You should see something like this:

.. image:: tomcat_running.png
    :width: 400px

Serving static files
^^^^^^^^^^^^^^^^^^^^

* Ok, if it is running, let's create an app. Create a new directory under the
  ``webapps`` folder in Tomcat. Depending on where you installed XAMPP, you might
  find it in ``C:\xampp\tomcat\webapps``.
  Keep the directory name lower case and don't use spaces. Like
  ``test-app``.
* Create a test html file in that folder. I created ``webapps\test-app\test.html``
* Go to ``http://localhost:8080/test-app/test.html`` and you should be able to
  see the static file you created. This is where your static images, css, and
  other files that don't change go.

Creating a "Hello World" servlet
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

* Create a ``WEB-INF`` folder in the ``test-app`` folder. Case matters.
* Create a ``classes`` folder in the ``WEB-INF`` folder.
* Inside the ``WEB-INF`` folder make your Servlet.
  Call the file ``TestServlet.java``.
  Don't put it in  the
  ``classes`` folder, but in the ``WEB-INF`` folder. Here's a sample:

.. literalinclude:: TestServlet.java
    :linenos:
    :language: java

* Great. We've put in the code for the servlet, but we haven't told the computer
  what URL maps to what Java Servlet class. To do this,
  inside the ``WEB-INF`` folder create a file named ``web.xml``. Inside of
  ``web.xml`` put the following:

.. literalinclude:: web.xml
    :linenos:
    :language: xml

* Compile the code. You'll probably need something like ``javac TestServlet.java``

.. image:: compile_javac_error.png
    :width: 600px

* Wait! It can't compile because the computer doesn't know the command ``javac``.
  You have Java installed. Why can't it find it? Because it isn't in the "path."
  The "path" is a list of directories that Windows (or Linux or Mac)
  checks when you type in a command.

* #1 Open up a file browser, and right-click on "Computer" and select
  "Properties".
* #2 Select "Advanced System Settings".
* #3 Select "Environment Variables".
* #4 Select "Path".
* #5 Select "Edit".
* #6 The path is a huge long line, separated with semicolons ``;`` stuffed
  into a little box. Unless you are on the current version of Windows, which
  has a better editor. Add a ``;`` to the end of the line, taking care not
  to destroy anything in the line. Then paste the path to your ``javac.exe``.
  For lab computers, this is ``C:\Program Files\Java\jdk1.8.0_101\bin``.
  Make sure not to use a path with ``jre`` in it, and only use one with
  ``jdk``.

.. image:: edit_path.png
    :width: 640px

* Open a **new** command prompt. The old one still has the old settings.
  Try ``javac TestServlet.java`` again:

.. image:: compile_javac_error2.png
    :width: 600px

* Wait! You need to include a library to compile it. You'll need something like
  ``javac -classpath ..\..\..\lib\servlet-api.jar TestServlet.java``
* Well, darn. It created ``TestServlet.class`` in the current folder. Not the
  ``classes`` subfolder. That won't work. Move the file into that folder.
* Restart Tomcat
* Try your servlet: ``http://localhost:8080/test-app/test``

.. image:: hello_world.png
    :width: 500px

Install IntelliJ
----------------

Ok! That was *too much work*. Let's deploy our web applications using an IDE.

Download and install IntelliJ_. You can get a student license for free. It is
also possible to use Eclipse, but IntelliJ seems to be the better choice now.

Go ahead and enable these options while installing:

.. image:: intellij_plugins.png
    :width: 600px
    :align: center

.. _IntelliJ: https://www.jetbrains.com/idea/#chooseYourEdition

Make a Tomcat Project
=====================

Now you have Java, and an Integrated Development Environment (IDE) installed.
Let's use the IDE to set up our first web project.

.. image:: new_project.png
    :width: 600px
    :align: center

This opens to a confusingly blank window. Hit Alt-1 to open the project view
and explore the project template. You can hit Alt-1 again to hide the window.
Useful when you want more screen real-estate.

.. image:: project_view.png
    :width: 600px
    :align: center

Great, we have a project. How do we see the result? We need to set up Tomcat
to run when we hit the 'run' button. Go ahead and select run:

.. image:: run1.png
    :width: 300px
    :align: center

See that we need to set up a configuration first:

.. image:: run2.png
    :width: 150px
    :align: center

Then go ahead and create a "Tomcat" configuration and point it to the Tomcat
directory you just installed.

.. image:: tomcat_configuration.png
    :width: 600px
    :align: center

Wait! We're not done. One more tab. This should tell us to deploy an "artifact."
An artifact is something created by the build process. It isn't as fun as
artifacts in Indiana Jones. The "WAR" file is a zipped up file (you can unzip
it using a zip program) that has all the static files, images, and classes for
your web application. This one zipped file is easier to manage than all those
different files.

.. note::

	Ok, ``.java``  files compile from Java source code to ``.class`` files that
	can be run. One file per class. To make management easier, we zip this
	``.class`` files into ``.jar`` files. A compiled code library is in a ``.jar``.
	Because web sites can have web pages, multiple libraries, images, and other
	fun stuff, we take all those and zip them into a Web Application Archive, a
	``.war`` file. Oh hey! What
	if we want a collection of web apps together? We take those ``.war`` files and
	zip/package them into an "Enterprise Archive." We call that a ``.ear`` file.

.. image:: deploy1.png
    :width: 600px
    :align: center

Notice that while you can "Apply" the changes, you can't "Run" your application.
We need to build it, and point it to the page we want to load.

So, build the application:

.. image:: build.png
    :width: 350px
    :align: center

Then select our ``index.jsp`` page and run the application:

.. image:: run3.png
    :width: 600px
    :align: center

Great! Now we see our super-exciting web page:

.. image:: run4.png
    :width: 400px
    :align: center

Ok, maybe not that exciting. I don't know why their default page is so
boring. Let's edit the ``index.jsp`` code:

.. literalinclude:: sample.jsp
    :linenos:
    :language: jsp
