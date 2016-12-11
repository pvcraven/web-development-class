Stacks
======

A lot of development you may have done so far was simple when it came time to
select tools. When you started a project, the biggest consideration was, "What
language will I use?"
That is, if you even got to pick the language. (Evil professors might choose for
you.)

With mature technologies, there are commonly accepted ways of doing things. This
is not case when developing for the web.
What we have is a seven-course buffet of
items to choose from. Some of these items go together well. Some don't.

With a buffet, if you find a bad pairing of food, you just get over it
and go on to your next meal. If you make a bad pick of web development
tools you may be stuck for
years with that setup. In fact, the only way to get away from those tool choices
could be to take a job elsewhere. Or more likely, you'll get a new job and be stuck with
someone else's buffet selections. And some of your tools will no longer
be supported. So you have millions of dollars of development and a business
that relies on tools that aren't being updated.
Ok, no pressure when selecting tools, right?

We call these tool choices **stacks**. Here are some of the things that go into
a stack, along with examples of what choices you might have:

* Operating System - Linux, Windows, Mac
* Web server - Apache, Internet Information Server (IIS)
* Application server / programming language
* Database - MySQL, MS SQL Server, Oracle DB, IBM DB2
* Language frameworks - Hibernate
* Front-end frameworks - AngularJS, jQuery, React, D3
* Build environment - Maven, Git, SourceTree, GitHub

Some stacks have fancy names. Like **LAMP** stands for Linux, Apache, MySQL,
and PHP.

Operating System
----------------

Plain Operating Systems
^^^^^^^^^^^^^^^^^^^^^^^

If you are lucky, your stack might be operating system independent. It is not
unusual for developers to write using MS Windows, then deploy onto a Linux
machine.

Linux is a popular choice for serving files. There is no need to pay Microsoft
for Windows licenses, which reduces server cost. The operating system doesn't
have run a Window environment (although it can) which reduces memory, CPU, and
disk requirements for the server. Linux servers can be rather easy to administer
remotely. They are also easy to script, allowing fast setup of new servers.
For example, just using one ``apt-get`` command can install all the needed
software on a new server. That's not easy to do with Windows!

Mac is based on the UNIX operating system, so it is similar to Linux
servers in administration. But rarely do people use Macs as servers. It is
expensive and the company is focused on creating a great user experience, not a
great server experience. However their laptops are so popular many developers
like to use Macs, particularly if they deploy onto Linux operating systems.

Windows is popular. So using it as a server is also popular. If you
are using Microsoft tools for development, then having your whole stack controlled
by Microsoft can be great when you need support. There is no other company for
Microsoft to point its finger at when something goes wrong with the stack.


Cloud
^^^^^

Docker
^^^^^^

Web Application Servers by Language
-----------------------------------

`application server`_
Popular types of application servers:

* Java-based servers such as Tomcat_, JBoss, Glassfish, Geronimo, WebLogic, WebSphere
* .NET based servers from Microsoft, or Mono
* PHP
* Python such as Django_
* JavaScript - Node.js

.. _application server: https://en.wikipedia.org/wiki/Application_server
.. _Tomcat: http://tomcat.apache.org/
.. _Django: https://www.djangoproject.com/

