.. _java-environment-tutorial:

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

Get a Sample Tomcat Application Working
---------------------------------------

We will create and run our application from inside an IDE which will make
development a lot easier that what we are about to go through below.

**But** you should run through this tutorial and be aware of the
nuts and bolts on how deploying and application works.
Otherwise, when things break, you don't have the skills to fix it.

Get the server running
^^^^^^^^^^^^^^^^^^^^^^

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

Serving static files
^^^^^^^^^^^^^^^^^^^^

* Ok, if it is running, let's create an app. Create a new directory under the
  ``webapps`` folder in Tomcat. Keep it lower case and don't use spaces. Like
  ``test-app``.
* Create a test html file in that folder. I created ``webapps\test-app\test.html``
* Restart Tomcat
* Go to ``http://localhost:8080/test-app/test.html`` and you should be able to
  see the static file you created. This is where your static images, css, and
  other files that don't change go.

Creating a servlet
^^^^^^^^^^^^^^^^^^

* Create a ``WEB-INF`` folder in the ``test-app`` folder.
* Create a ``classess`` folder in the ``WEB-INF`` folder.
* Inside the ``WEB-INF`` folder make your Servlet. Here's a sample:

.. literalinclude:: TestServlet.java
    :linenos:
    :language: java

* Inside the ``WEB-INF`` folder create a file named ``web.xml``. Inside of
  ``web.xml`` put the following::

    <web-app>
      <servlet>
        <servlet-name>TestServlet</servlet-name>
        <servlet-class>TestServlet</servlet-class>
      </servlet>

      <servlet-mapping>
        <servlet-name>TestServlet</servlet-name>
        <url-pattern>/test</url-pattern>
      </servlet-mapping>
    </web-app>

* Compile the code. You'll probably need something like ``javac TestServlet.java``
* Wait! You need to include a library to compile it. You'll need something like
  ``javac -classpath ..\..\..\..\lib\servlet-api.jar TestServlet.java``
* Restart Tomcat
* Try your servlet: ``http://localhost:8080/test-app/test``

Install IntelliJ
----------------

Ok! That was too much work. Let's deploy our web applications using an IDE.

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