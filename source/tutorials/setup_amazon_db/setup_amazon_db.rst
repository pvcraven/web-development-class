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

Set Up MyPHPAdmin to Point to RDS
---------------------------------

Ok. Now we have a database. But no way to administer the database. You know,
create tables, see what's in it, run ad-hoc SQL.

Connect via `MySQL Workbench`_.

.. _MySQL Workbench: https://www.mysql.com/products/workbench/

Once you've connected, let's create our table plus a couple records:

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
    INSERT INTO `cis320`.`person` (`first`, `last`, `email`, `phone`, `birthday`) VALUES (Sam', 'Simpson', 'sam@simpson.edu', '5159611212', '1/1/1903');



