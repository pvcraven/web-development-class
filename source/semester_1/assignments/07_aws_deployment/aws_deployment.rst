.. _assignment_aws_deploy:

Assignment 7 - AWS Deployment
=============================

Goal: Deploy your project onto your own server.

By this time, you should have:

* Understood what a web server does: :ref:`web-servers`
* Set up an AWS server via this tutorial: :ref:`aws_setup`
* Spent some time getting used to the command line: :ref:`command_line_tutorial`

Now, we are going to get a web server working and on-line via the tutorial below.

You will turn in:

* A link to your web site. It should be on an AWS server and probably starts
  with ``http://ec2-``

.. attention::

    This assignment is needed as a base for other assignments. Don't take a zero on this assignment.

Sometimes this assignment goes smoothly, and sometimes it doesn't. Plan to spend time working with the professor
outside of class to get the deployment working. Usually we can get this working from scratch in about twenty
minutes. Less, if you have part of it done. But you have to make the effort to do this.

Tutorial
--------

First, we want to get all the software updates available for our computer before we start
installing anything new.

The program that does these updates is called ``apt-get``. Installing updates is a two step process:

* Check what updates exist: ``apt-get update``
* Install the updates: ``apt-get upgrade``

...but if you try that out, it doesn't work. You don't have permission to install the updates.
Have you ever tried to install software on Windows or a Mac and it asks for permission?
This is to keep malicious software (or users) from installing programs on your computer
we don't want. We have to give it permission to do so.

We do this with the "substitute user do" command. Basically, we are saying run this command as
administrator:

.. code-block:: text

    # Check for updates
    sudo apt-get update

    # Install updates
    sudo apt-get upgrade

Next, let's install a webserver. Specifically, Apache 2.
You can also do this using ``apt-get`` from the command-line.
In fact, this is one of the things I *love* about the command line. If you need 12 programs installed for
your server, you can just list out all 12 on this command line and it will install them for you. Super-easy.

.. code-block:: text

    # Install web server
    sudo apt-get install apache2

Now, try accessing web server. Paste your server's address in the web browser.
It should look something like:

http://ec2-52-39-56-197.us-west-2.compute.amazonaws.com/

...but not exactly that.

Now, let's change the web pages. First, go to the directory that has the html files
and list them:

.. code-block:: text

    cd /
    ls
    cd var
    ls
    cd www
    ls
    cd html
    ls

Next, let's try editing the index page with pico:

.. code-block:: text

    pico index.html

Notice it says the file is 'unwritable'. You have no permission. So sudo

.. code-block:: text

    sudo pico index.html

* Lots of lines there. You can delete a line with ctrl-k
* Try typing something
* Hit ^o - Enter to save
* Create a base HTML page with your name
* Download with command line ON YOUR COMPUTER

.. code-block:: text

    scp -i index.html ubuntu@ec2-52-39-56-197.us-west-2.compute.amazonaws.com:/var/www/html/index.html .

Upload

.. code-block:: text

    scp -i CravenAmazonKeyPair.pem index.html ubuntu@ec2-52-39-56-197.us-west-2.compute.amazonaws.com:/var/www/html/

See who owns the files:

.. code-block:: text

    ls -la

Change to ubuntu:

.. code-block:: text

    sudo chown ubuntu:ubuntu index.html

You can upload the file, but not add new ones. Because the directory is owned by root still.

.. code-block:: text

    cd ..
    sudo chown ubuntu:ubuntu root

* Talk about 'application servers'
* Talk about php

Edit the file, add a link to test.php

Create a test.php file:

.. code-block:: html

    <h1>Web Page for (my name here)</h1>
    <p>Start</p>
    <p>
    <?php
    echo "Today is ";
    echo date("Y/m/d");
    echo ". ";
    echo "The time is ";
    echo date("h:i:sa");
    ?>
    <p>End</p>

Run in browser. Use 'view source'

.. code-block:: text

    sudo apt-get install php

* Make sure everything works.
* Make sure your name is on the index.
* Copy the URL to your main page.
* Turn in for assignment 7