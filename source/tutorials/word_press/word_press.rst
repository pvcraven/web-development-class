WordPress Installation
======================

Not all websites are created from scratch. In fact, many websites use a
`Content Management System`_ (CMS). A CMS provides a friendly interface for
adding, editing, and deleting content. It also provides a way to manage a
website's style.

There are many CMS out there. One of the more popular ones is WordPress_.
(Drupal and Joomla are similar, and very popular as well.)
This tutorial will take you through installing WordPress on our Amazon server.

First, use MobaXTerm to "shell" out to our Amazon server.

Next, we need to install WordPress and a database. The database will help
keep track of everything for us. Enter these commands one-by-one.

::

    # Update the list of software we can get
    sudo apt-get update

    # Update to the most current versions of the software
    sudo apt-get upgrade

    # Get wordpress, and a database for it to run on
    sudo apt-get install wordpress mysql-server

The last step will ask you y/n if you want to continue and install all those
packages. Hit 'y' and enter.

Next, when it installs the database server, you'll get a screen that looks like the
image below. Write down the password that you choose. Don't leave it blank.

.. image:: my_sql_password.png
    :width: 640px
    :align: center

::

    # NOTE: Change "sample-web-project" to the name of your project
    sudo ln -s /usr/share/wordpress /var/www/sample-web-project/public_html/wordpress

    # Unzip the setup script that comes with wordpress
    sudo gzip -d /usr/share/doc/wordpress/examples/setup-mysql.gz

    # Run the setup script. Replace XXXPUT_YOUR_SERVER_NAME_HEREXXX with your server
    # name. Something like "ec2-35-161-159-182.us-west-2.compute.amazonaws.com"
    sudo bash /usr/share/doc/wordpress/examples/setup-mysql -n wordpress XXXPUT_YOUR_SERVER_NAME_HEREXXX

Now, go to your webserver. Because we created a "wordpress" subdirectory, you'll
need to add that to your URL. It will look something like::

    http://XXXPUT_YOUR_SERVER_NAME_HEREXXX/wordpress/

Then you should end up with a WordPress installation screen, which should be
rather straight-forward.

.. image:: setup.png
    :width: 640px
    :align: center

After that, you'll be taken to the WordPress dashboard that lets you administer,
add, and delete content.

.. image:: dashboard.png
    :width: 640px
    :align: center

.. _WordPress: https://en.wikipedia.org/wiki/WordPress
.. _Content Management System: https://en.wikipedia.org/wiki/Content_management_system

