Setup Amazon Database
=====================

Ok, here's a set of screen shots on how to set up a database to use.

Create the Amazon Database Instance
-----------------------------------

Go into the RDS section of AWS.

.. figure:: rds.png

    Go into the RDS section of AWS

Launch a DB instance. NOT aurora.

.. figure:: launch_instance.png

    Launch a DB instance. NOT aurora.

Select your engine.

.. figure:: select_engine.png

    Select your engine.

Make it a test instance. Because those are free.

.. figure:: dev_test.png

    Make it a test instance. Because those are free.

Set the instance specifications.

.. figure:: instance_specifications.png

    Set the instance specifications.

Set the username and password.

.. figure:: advanced_settings.png

    Set the username and password.

.. important:: Use a Strong Password!

    There will people trying to guess the password of your database. Create a
    long random password and make it secure!!! Also, don't re-use a password
    you've got somewhere else. Because we'll be putting the password in an
    insecure location.

Administer Database
-------------------

Ok. Now we have a database. But no way to administer the database. You know,
create tables, see what's in it, run ad-hoc SQL.

Originally I was going to use MyPHPAdmin. Which is a great tool and built
into XAMPP. It worked for me the first time I tried it, but not the second time.

So instead we are going to
connect via `MySQL Workbench`_. If you are working on a lab computer, you'll
need to have me install it because of the whole permissions thing.
There is also a copy on our class web page for
faster download.

.. _MySQL Workbench: https://www.mysql.com/products/workbench/

Open up a new connection.
You may need to create a database called "cis320".

After that, run some SQL to
create our table plus a couple records:

.. code-block:: sql

    CREATE TABLE `cis320`.`person` (
      `id` INT NOT NULL AUTO_INCREMENT,
      `first` VARCHAR(45) NULL,
      `last` VARCHAR(45) NULL,
      `email` VARCHAR(255) NULL,
      `phone` VARCHAR(15) NULL,
      `birthday` DATE NULL,
      PRIMARY KEY (`id`));

    INSERT INTO `cis320`.`person` (`first`, `last`, `email`, `phone`, `birthday`) VALUES ('Paul', 'Craven', 'paul@simpson.edu', '5159611834', '1/1/1954');
    INSERT INTO `cis320`.`person` (`first`, `last`, `email`, `phone`, `birthday`) VALUES ('Sam', 'Simpson', 'sam@simpson.edu', '5159611212', '1/1/1903');


Yay! We are done with that setup. Next, time to learn how to do DB
connections in Java.
