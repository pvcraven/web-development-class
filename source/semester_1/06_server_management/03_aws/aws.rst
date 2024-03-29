.. _aws_setup:

Amazon Web Services EC2 Tutorial
================================

We are going to get a virtual server up and going using Amazon Web Services.
But why is AWS so popular? What is it? And what is a virtual server?

Data Centers
------------
Creating a web server is easy. Keeping it up all the time isn't.
If you want to have a server on the web, it needs to be up 24/7.
What are the risks in doing that?

* Power outage
* ISP outage
* Someone accidentally bumping the machine
* Fire / Flood / Tornado / Hurricane / Earthquake
* Data line gets cut
* Physical theft of server
* Physical access can leave data vulnerable
* Need ability to monitor computer, so you get alerted when down
* AC goes out, things get too hot
* Computer fails (bad drive, components)

To protect against this, you need a **data center**. Ideally, data centers are:

* Located in a place not prone to natural disaster
* Reliable power provider
* Back up battery power
* Back up generator
* Multiple data lines, from different providers, coming in from different directions
* Physical security. Locked doors. Logged access. Guards. Fences.
* Fire suppression system.
* Support systems for monitoring
* Climate control that can handle server heat
* A completely different data center in a different location
* Ability to run server on multiple computers
* Equipment that can "fail over" from one machine/location to another

This is expensive! What if you are a small company just starting out?
How do you get all of this?

There are multiple options, one of which is to *rent* a server with a
company that specializes in doing this. There are many companies  that
do this. Amazon, Microsoft, and smaller providers too.

Virtual Machines
----------------

How do you remotely control a machine that is in a data center? How
do we install a new operating system on a machine we normally would
need physical access to? How do you reboot it? And machines are all
different, with different drivers and things we need to install, right?

A computer can host multiple **virtual machines** using specialized software
that runs a "virtual" computer on another computer. For all the
virtual computer knows, it is its own machine:

.. image:: containers-vs-virtual-machines.jpg

This chapter covers how to get a public web server up and running using
Amazon Web Services (AWS).

.. warning:: Mac Users

   If you are on the Mac, please do these steps using the "Chrome" web
   browser rather than Safari. Safari does not download the "key" file
   correctly. (Aside from that one step, it works fine.)

Create a Server Instance
------------------------

.. raw:: html

    <iframe width="560" height="315" src="https://www.youtube.com/embed/pqiDL0lxU0s" frameborder="0" allowfullscreen></iframe>

If you are being provide a server instance by your instructor, skip to the
`Setting Up The Server`_ section.

Sign up for a Amazon Web Services account, and access the AWS console at:

https://console.aws.amazon.com

Select EC2:

.. image:: select_ec2.png
    :width: 640px
    :align: center

Launch a new instance.

.. attention::

    If you are restarting this tutorial, you probably want
    to shut down any other instances you are running. If you run more than one
    instance you will get charged money from Amazon.

.. image:: launch_instance_1.png
    :width: 550px
    :align: center

We are going to create our own server. But the server will not be running Microsoft Windows
or MacOS. We are going to use a version of the Linux Operating System called Ubuntu.

Ubuntu is free. You can run it without a graphical user interface, which is great
for a small cheap server. And it isn't hard to administer remotely.

Select Ubuntu:

.. image:: select_ubuntu.png
    :width: 550px
    :align: center

Use a small, free machine:

.. image:: select_free_tier.png
    :width: 550px
    :align: center

The instance details defaults are ok, so click "Review and Launch":

.. image:: instance_details.png
    :width: 640px
    :align: center

We need security. Hit "Edit Security Groups":

.. image:: edit_security_groups.png
    :width: 550px
    :align: center

Computers use numbered "ports" to sort web traffic. That way they can keep
web traffic separate from e-mail, file sharing, etc.

We want everyone to connect to our web server to get web pages. "HTTP"
controls normal un-encrypted web page requests. It runs on port 80.

HTTPS controls encrypted web traffic. It runs on port 443.

SSH allows us to "shell" over to the machine and type in commands. That runs on
port 22.

For proper security, we want anyone to connect to our server via HTTP and HTTPS.
We only want our own computer to connect via SSH, because that's what we use
to administrate our accounts.

Set up the security groups as shown. Your "My IP" will fill in automatically
with your IP address when the drop-down box is selected. You'll need to add a
SSH row for each computer IP you want to shell in from.

(If you've been through this step before, you can "Select an existing security group" and
not do this again.)

.. image:: setup_security.png
    :width: 600px
    :align: center

Hit "Launch" again:

.. image:: launch_instance_2.png
    :width: 600px
    :align: center

Still isn't launching. We need a private/public key pair. We'll use this
instead of a password. It is more secure. Name your key pair. Download it.
Save it somewhere safe. You can't download it again, so if you lose that
file you lose access to your servers. You can use the same key/pair for
many servers if you want.

If you are using a Mac, you need to download this with Chrome, not Safari.

.. attention::

    Do not save your PEM key into the HTML folder or allow it to be
    checked into version control.

Seriously. Make sure you didn't save this in the same folder as all your web stuff.
Do not risk it being checked into version control. Go make sure. I'll wait.

Did you make sure?

.. danger::

    **Really, DO NOT ALLOW THIS FILE INTO VERSION CONTROL.**

If you do this, you are giving everyone access to all your stuff. Also,
version control keeps old versions. Deleting it won't remove the file.
And once it hits GitHub every evil person will have it. Seriously. People
have programs that scan all of GitHub for people that check in keys.
If you ever check in a key, you'll need to recreate your key and assume
everything accessible by that key has been compromised.

*Do* save the key somewhere safe. On a flash drive or network drive. If you
lose the key file, you can't access your machine and you'll have to start over.

.. image:: download_keypair.png
    :width: 600px
    :align: center

Now will it launch? Because this will be the third time we've hit "Launch."

.. image:: launch_instance_3.png
    :width: 600px
    :align: center

Yay! We've launched our server. Click the link shown (you'll have a different
id) to see your server's status.

.. image:: view_instance.png
    :width: 600px
    :align: center

The server is starting up. if you look under "Status Checks" column, you'll
see it start with "Initializing" and eventually say something like
"2/2 checks passed."

Setting Up The Server
---------------------

Getting to the Server
^^^^^^^^^^^^^^^^^^^^^

We are going to open a "shell" to our new Amazon server using an encrypted network protocol called
"ssh". (Short for Secure Socket Shell.)

You will see people talk about typing in commands to a "command prompt",
"terminal window", "terminal", "shell", "ssh", "bash", and "telnet". There are some
slight differences in the meanings of these words, but for our purposes
they all mean we are typing in commands to a computer.

Get The Server Address
~~~~~~~~~~~~~~~~~~~~~~

Copy the Public DNS address we get from Amazon, or that you got from your
instructor if he set up the server for you.

.. image:: copy_address.png
    :width: 600px
    :align: center

Use that address and the key to get a command shell on the new server.

Connecting With a Mac or Windows
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To use the Terminal on the Mac, search for and run the "Terminal" program.
Copy your key to the Mac's desktop. For Windows, use the "Command Prompt"
program instead.

If you are on the Mac,
we need to set 'permissions' on the key before it can be used.
Windows users do not need to do this.
Changing permissions is
done with the ``chmod`` command, like this:

.. code-block:: text

    cd Desktop
    chmod 600 my_key.pem

Replace `my_key.pem` with the file name of the key that you downloaded from Amazon.

If you are on Windows and not using MobaXTerm, you *may* need to do this to set
permissions.

.. code-block:: text

    Set Key="my_key.pem"
    Cmd /c Icacls %Key% /c /t /Inheritance:d
    Cmd /c Icacls %Key% /c /t /Grant %UserName%:F
    Cmd /c Icacls %Key% /c /t /Remove Administrator "Authenticated Users" BUILTIN\Administrators BUILTIN Everyone System Users
    Cmd /c Icacls %Key%

After that, you can shell to your machine with the following:

.. code-block:: text

    cd Desktop
    ssh -i my_key.pem ubuntu@myservername.com


Replace `myservername.com` with the really long public DNS name of the server you copied from the
Amazon console. Don't forget the ``ubuntu@`` that needs to appear
right before the server name.

You may get a question about the "authenticity" of the host. If so, just
type "yes". You'll only get that question once.

If you get an error about permissions, you might need to make the key so that
only you can read it on the Mac. The command for this is:

.. code-block:: text

    chmod 600 my_key.pem


Connecting With MobaXTerm
~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

    <iframe width="560" height="315" src="https://www.youtube.com/embed/suWI9jIXDMQ" frameborder="0" allowfullscreen></iframe>


Download and run the free version of `MobaXTerm <https://mobaxterm.mobatek.net/download.html>`_.

.. image:: moba_1.png
    :width: 600px
    :align: center

Enter in the info needed to get access. The user name will always be
"ubuntu", but your address and where you stored the key/pair will be different.

.. image:: moba_2.png
    :width: 600px
    :align: center
