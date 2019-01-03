Example Build Process of a Modern Application
=============================================

Take a look at the Arcade Python library:

https://github.com/pvcraven/arcade

This project has a "build" file called ``setup.py``.
We can run this file to build the project. See the file below:

https://github.com/pvcraven/arcade/blob/master/setup.py

This has all this settings that might be in an IDE. But in text format. And
in version control. If you are building a Java project, Maven_ and Ant_ are the
two most popular tools.

.. _Maven: https://maven.apache.org/
.. _Ant: http://ant.apache.org/

A build file does *not*, however, have all the specifics of the machine.
As we've seen in class, that can lead to a lot of headaches. What
if there's a different version of Java, or Tomcat, or whatever? What if they are
in different directoryes?

We can still control this. We can use a service that creates a brand
new VM every time we want to build, and set it up with the software
versions we want.

AppVeyor is one such service.
There is
an AppVeyor file that contains all the files that are needed to build the app:

https://github.com/pvcraven/arcade/blob/master/appveyor.yml

Everytime GitHub builds, AppVeyor kicks off and builds the project using
Microsoft Windows.
It will send an alert if it fails:

https://ci.appveyor.com/project/pvcraven/arcade-ekjdf

You can even grab artifacts after the build. Like ``.exe`` files, ``.war`` files
``.jar`` files, or whatever your particular project creates.

Great, but what about Linux? Another company does that. Travis-CI.
This file has the Linux environment:

https://github.com/pvcraven/arcade/blob/master/.travis.yml

And the build information is here:

https://travis-ci.org/pvcraven/arcade

But just because it builds, doesn't mean that it works, right? The Travis build
will automatically run tests built into the code.

See the tests built into the doc comments:

https://github.com/pvcraven/arcade/blob/master/arcade/draw_commands.py

See the resulting report:

https://coveralls.io/builds/9880829

The automatic build and testing is called "Continuous Integration" (CI).
