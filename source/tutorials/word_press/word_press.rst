.. _InstallWordpress:

WordPress Installation
======================

Install
-------

While there is a apt-get package called "wordpress", the way Ubuntu installs
WordPress is terrible. I lost a lot of time trying to debug all the issues with
their install. So we'll just install WordPress manually. But we some of the
supporting software we'll use apt-get to install.

First, use MobaXTerm to "shell" out to our Amazon server.

Next, we need to install WordPress and a database. The database will help
keep track of everything for us. Enter these commands one-by-one.

::

    # Update the list of software we can get
    sudo apt-get update

    # Update to the most current versions of the software
    sudo apt-get -y upgrade

If you are using Ubuntu 16, you'll need to do this for the last line::

    sudo apt-get -y install mysql-server

Next, when it installs the database server, you'll get a screen that looks like the
image below. Write down the password that you choose. Don't leave it blank.

.. image:: my_sql_password.png
    :width: 640px
    :align: center

Next, install these software packages::

    sudo apt-get -y install php7.0 libapache2-mod-php7.0 php-mcrypt php-mysql


This next part creates the database and user for WordPress. Instead of
``yourdbpassword`` please use the password you entered above for your
database.

::

    # Create a database for WordPress.

    # Set the database so we can enter commands to it.
    mysql -u root -p

    # Ok, at this point it should ask you to enter the database password, so
    # do that.
    yourdbserverpassword

    # Create a new user for your database called "wordpress-db"
    # You need to create a password for the wordpress user that will manage your
    # wordpress database. This is different than the 'root' user/password that was
    # the admin user for the whole database server.
    CREATE USER 'wordpress-db'@'localhost' IDENTIFIED BY 'yourdbpassword';

    # Create a new database, also called "wordpress-db"
    # IMPORTANT IMPORTANT IMPORTANT
    # This command and the next one contain back-ticks. Carefully note when
    # the tutorial calls for you to use ` or '. Also watch what prints out
    # and see if it prints an error.
    CREATE DATABASE `wordpress-db`;

    # Say that the wordpress user can do everything with the wordpress database
    GRANT ALL PRIVILEGES ON `wordpress-db`.* TO "wordpress-db"@"localhost";

    # Commit our changes
    FLUSH PRIVILEGES;

    # Leave
    exit

Now we need to download and unzip WordPress.

::

    # --- Get WordPress
    # Switch to the home directory
    cd ~

    # Download WordPress from the Internet
    wget https://wordpress.org/latest.tar.gz

    # Unzip the file
    tar -xzf latest.tar.gz

Copy the sample configuration file and get it ready for editing::

    # Change to the WordPress folder we just unzipped
    cd wordpress/
    # Copy sample config file as a template for our real config file
    cp wp-config-sample.php wp-config.php


Next, we need to edit the configuration file::

    vim wp-config.php

Replace the default with the database name ``wordpress-db`` and the database
user, also ``wordpress-db``. Next, fill in the password. Then save the file.

.. image:: wp-config.png
    :width: 640px
    :align: center

::

    # Go up a directory

    cd ..

    # Move the WordPress directory to a directory that the web server sees.
    sudo mv wordpress /var/www/my_sample_project/public_html

    # Change ownership to the apache process and group (www-data)
    sudo chown -R www-data:www-data /var/www


Now, go to your webserver. Because we created a "wordpress" subdirectory, you'll
need to add that to your URL. It will look something like::

    http://XXXPUT_YOUR_SERVER_NAME_HEREXXX/wordpress/

Then you should end up with a WordPress installation screen, which should be
rather straight-forward.

Make sure your password is a good password. There are automatic scripts that
run by hackers that will attempt to log into your WordPress site every single
hour it is up.

.. image:: setup.png
    :width: 640px
    :align: center

After that, you'll be taken to the WordPress dashboard that lets you administer,
add, and delete content.

.. image:: dashboard.png
    :width: 640px
    :align: center

Updating
--------

The WordPress software needs to be updated on a regular basis. Also, WordPress
has software plug-ins that need to be updated. You can update both rather easily
from the update screen:

.. image:: updating.png
    :width: 500px
    :align: center

.. _WordPress: https://en.wikipedia.org/wiki/WordPress
.. _Content Management System: https://en.wikipedia.org/wiki/Content_management_system
