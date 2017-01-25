Assignment 3 - List Records
===========================

Complete
--------
* Create a database with a Person table as outlined in :ref:`setup-amazon-db`.
* Create a servlet called ``NameListGet``,
  as shown near the end of :ref:`manage-connections`.
  For now, just print a "Hello world" to make sure you have it working.
* Test the servlet
* Create a ``DBHelper.java`` file from the tutorial.
* Create a business object called ``Person`` with fields for id, first, last,
  email, phone, and birthday. Also create getters and setters for those
  fields.
* Create a ``PersonDAO.java`` file.
* Add a method to the PersonDAO object called ``getPeople()``.
  Use the database code and have it return
  a list of the people and all the fields.
* Update the servlet, and attempt call the DAO. Take things one
  step at a time trying to pull from the database.
* Have the servlet print out JSON for the fields in the database. Something
  like::

    [{"id":1,"first":"Paul","last":"Craven"},{"id":2,"first":"Sam","last":"Simpson"}]

Turn in
-------

* GitHub URL for your project.
* URL for the Amazon web services that links to your working servlet that spits
  out JSON.
