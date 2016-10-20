Command Line
============

Command Prompt
--------------

The *command prompt* is the bit of text that the computer prints out before
you type in commands. You can `customize this prompt <http://ezprompt.net/>`_, but what UNIX uses
is pretty good by default::

    ubuntu@ip-172-31-39-218:/var/www/sample-web-project/public_html$

This tells me I'm logged in under the user account ``ubuntu`` on the machine
named ``ip-172-31-39-218`` and my current directory is
``/var/www/sample-web-project/public_html``.
I am also logged in as a "normal user" because I have a ``$`` as a command
prompt. If I was an administrator, I would see a ``#``.


Directories and Files
---------------------

List files
^^^^^^^^^^
You list files in a directory with the command ``ls`` which is short for "list".
For example::


    ubuntu@ip-172-31-39-218:/etc/apache2$ ls
    apache2.conf  conf-available  conf-enabled  envvars  magic  mods-available  mods-enabled  ports.conf  sites-available  sites-enabled


This is a "short listing" of files. There are
`a lot of options <http://www.rapidtables.com/code/linux/ls.htm>`_ while listing
files. I often use ``ls -la``::

    ubuntu@ip-172-31-39-218:/etc/apache2$ ls -la
    total 88
    drwxr-xr-x  8 root root  4096 Oct 13 15:06 .
    drwxr-xr-x 92 root root  4096 Oct 17 17:44 ..
    -rw-r--r--  1 root root  7115 Jan  7  2014 apache2.conf
    drwxr-xr-x  2 root root  4096 Oct 13 15:06 conf-available
    drwxr-xr-x  2 root root  4096 Oct 13 15:06 conf-enabled
    -rw-r--r--  1 root root  1782 Jan  3  2014 envvars
    -rw-r--r--  1 root root 31063 Jan  3  2014 magic
    drwxr-xr-x  2 root root 12288 Oct 13 15:06 mods-available
    drwxr-xr-x  2 root root  4096 Oct 13 15:06 mods-enabled
    -rw-r--r--  1 root root   320 Jan  7  2014 ports.conf
    drwxr-xr-x  2 root root  4096 Oct 13 15:27 sites-available
    drwxr-xr-x  2 root root  4096 Oct 13 15:06 sites-enabled


The ``l`` gives a "long listing" format. The ``a`` shows "hidden files." You can
hide files or directories by default if the name starts with a period (``.``).

**Note:** file and directory names are case sensitive. ``Myfile.txt`` is a completely
different file than ``myfile.txt``.

Directory Navigation
^^^^^^^^^^^^^^^^^^^^

You can change directories with ``cd <directory>``. For example::

    ubuntu@ip-172-31-39-218:/etc$ cd apache2
    ubuntu@ip-172-31-39-218:/etc/apache2$

Directories are separated by a forward slash: ``/``. This is different than
windows which uses a backslash. ``\``.

When you change directories, everything is relative by default. So if you are
in the ``/home`` directory and type ``cd craven`` you will then be in the
``/home/craven`` directory. You can select more than one directory, so typing
in ``cd craven/documents`` will go into the ``craven`` folder, and inside that
look for a ``documents`` folder.

Sometimes you need to go up a directory. The shorthand for that is ``..``. So
``cd ..`` goes up one directory. Also, ``cd ../..`` goes up two directories.

Occasionally you don't care where you are now. You just want to go to
"exactly this place." If you start a path with a ``/`` you have an *absolute*
directory reference. So going to:

``cd /home/craven``

This will always go to ``/home/craven`` no matter where you are.

Typing ``cd /`` goes to the *root folder* where everything starts.

Typing ``cd ~`` or even just ``cd`` goes to your home directory.
The tilde (~) is often used as a
shortcut for your "home" directory. Usually your home directory is
``/home/my_account_name``.

You can find your current directory with ``pwd``. That is short for Print
Working Directory.

Auto-Complete
^^^^^^^^^^^^^

When working with ``cd`` and other commands, you can often type the first
few letters of a file and hit the "tab" key to auto-fill in the rest. If multiple
files match, keep hitting "tab" until the right one shows up.

Important directories
^^^^^^^^^^^^^^^^^^^^^

How are files on UNIX systems organized? See the
`Wikipedia article <https://en.wikipedia.org/wiki/Unix_filesystem>`_ for
details. The important ones:

* ``/home/<username>`` - All of your user account files are stored here. About
  the same as ``C:\Users\<username>`` on Windows.
* ``/var/www/html`` - This is where your web site files go by default. If you
  have multiple websites served from the same computer, you might instead organize
  them like ``/var/www/site1.com`` and ``/var/www/site2.com``.
* ``/var/log`` - All your log files go here
* ``/var/log/apache2`` - All your web server log files go here
* ``/etc`` - Configuration files
* ``/etc/apache2`` - All your web server configuration files go here
* ``/etc/apache2/sites-enabled`` - All your web server **site** configuration
  files go here

Making Directories
^^^^^^^^^^^^^^^^^^

You can make a directory with the ``mkdir <directory name>`` command. For example
``mkdir music`` will make a directory named ``music`` inside your current
directory.

Copying Files
^^^^^^^^^^^^^

The ``cp`` command will copy files. Here are some examples:

Copy file1.txt into a new file called file2.txt
UNLESS you have a directory named file2.txt, then it
would copy file1.txt into that directory.
(But file2.txt would be a strange directory name.)::

    cp file1.txt file2.txt

Copy file1.txt up one directory::

    cp file1.txt ..

The asterisk (*) is a "wildcard" character. We can use it to copy all files in
the current directory into another directory named 'thumbnails'::

    cp * thumbnails

Moving and Renaming Files
^^^^^^^^^^^^^^^^^^^^^^^^^

The ``mv`` command can move and/or rename files. For example:

Rename file1.txt to file2.txt::

    mv file1.txt file2.txt

Move file1 up one directory::

    mv file1.txt ..

Rename file1.txt to 'backup'
OR if a directory named 'backup' exists,
move file1 into the 'backup' directory.::

    mv file1.txt backup

Deleting Files
^^^^^^^^^^^^^^

You can delete a file with the ``rm`` command, which is short for "remove."

This will delete file1.txt::

    rm file1.txt

Deleting Directories
^^^^^^^^^^^^^^^^^^^^

You can delete a directory with ``rmdir``. But the directory must be empty
to do this. If you want to delete directories with files, you can do
``rmdir -f

Looking at Files
----------------

Editing Files
-------------

Restarting Services
-------------------

Understanding sudo
------------------

Installing Software
-------------------

Other
-----

* uptime
* who
* cat /proc/cpuinfo – CPU information
* cat /proc/meminfo – Memory information
* df -h – Show disk usage
* uname -a
* top
* ps
* ps -ef
* more

Advanced Command Line Example
-----------------------------

::

    egrep -o "GET.* 404 " access.log | sort | uniq -c | sort -nr
