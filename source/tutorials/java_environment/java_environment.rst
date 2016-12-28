Java Servlet Development Environment Setup
==========================================

Install Java
------------

Download and install Java_. You want to download the "Standard Edition" (SE).
There is also a "Java Runtime Environment" (JRE). This doesn't let you compile
``.java`` files to ``.class``. So don't download that one.

.. _Java: http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html

Install Tomcat
--------------

* To begin with,
  `download Tomcat <http://tomcat.apache.org/download-90.cgi>`_.
  There are a lot of versions, but I chose
  Tomcat 9, the Windows "64-bit Windows zip" .zip file.
* Expand the Tomcat zip file somewhere to work with.
* Make sure you have Java installed. Use your file browser to find it. You are
  looking for a folder that starts with ``jdk`` and **not** ``jre``. The
  JDK allows you to compile, the JRE just allows you to run Java. For me it was
  in ``C:\Program Files\Java\jdk1.8.0_31``. Create an environment variable called
  ``JAVA_HOME`` and set it to this path. If you don't know how to set an environment
  variable, then ask.
* Make sure you have the ``bin`` directory in your path. For me it looks like
  ``C:\Program Files\Java\jdk1.8.0_31\bin``. If you don't know how to add something
  to your path, or what it does, please ask.
* Next, to start Tomcat, open up a command prompt and change to the Tomcat
  ``bin`` directory. Type ``catalina start``. This will open up a new window
  with the running Tomcat. You can then direct your web browser to
  ``http:\\localhost:8080`` and check to make sure it is running.

Install IntelliJ
----------------

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

.. image:: deploy1.png
    :width: 600px
    :align: center

Notice that while you can "Apply" the changes, you can't "Run" your application.
We need to build it, and point it to the page we want to load.

.. image:: build.png
    :width: 400px
    :align: center

.. image:: run3.png
    :width: 600px
    :align: center