WordPress Tutorial
==================



Installation
------------

First, use MobaXTerm to "shell" out to our Amazon server.

Next, we need to install WordPress and a database. The database will help
keep track of everything for us. Enter these commands one-by-one.

::

    # Update the list of software we can get
    sudo apt-get update

    # Update to the most current versions of the software
    sudo apt-get -y upgrade

    # Get wordpress, and a database for it to run on
    sudo apt-get -y install wordpress mysql-server

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


You can copy/paste all of these lines together:

::

    # Change permissions on the WordPress folders so they are "owned" by the
    # web server:
    sudo chown -R www-data:www-data /srv/www/wp-content/
    sudo chown -R www-data:www-data /usr/share/wordpress/
    sudo chown -R www-data:www-data /var/lib/wordpress/

    sudo chmod -R 0755 /usr/share/wordpress/wp-content/
    sudo chmod -R 0755 /var/lib/wordpress/

    sudo find /srv/www/wp-content/ -type d -exec chmod 755 {} \;
    sudo find /usr/share/wordpress/ -type d -exec chmod 755 {} \;
    sudo find /var/lib/wordpress/ -type d -exec chmod 755 {} \;

    sudo find /srv/www/wp-content/ -type f -exec chmod 644 {} \;
    sudo find /usr/share/wordpress/ -type f -exec chmod 644 {} \;
    sudo find /var/lib/wordpress/ -type f -exec chmod 644 {} \;


Next, we need to edit the configuration file to tell WordPress that it is ok
to update and install new software directly from our dashboard. (Otherwise
we have to jump through a lot of hoops.)

::

    sudo vim /usr/share/wordpress/wp-config.php

Add the following line on the second to last line in the file::

    define('FS_METHOD','direct');



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

Go ahead and update WordPress and any plug-ins, if needed.

While updating, if you get the following error:

.. image:: update_error.png
    :width: 500px
    :align: center

This means your file permissions are not set correctly. Don't do anything on
this screen. You need to go to MobaXTerm and reset the file permissions. See
above.

