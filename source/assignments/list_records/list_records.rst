Assignment 3 - List Records
===========================

Complete
--------
* Create a database with a Person table as outlined in :ref:`setup-amazon-db`.
* Create a servlet called ``NameListGet``,
  as shown near the end of :ref:`manage-connections`.
  For now, just print a "Hello world" to make sure you have it working.
* Test the servlet. At the very least, get this turned in.
* Creat a package for your Java files.
* Create a ``DBHelper.java`` file from the tutorial.
* Create a business object called ``Person`` with fields for id, first, last,
  email, phone, and birthday. Also create getters and setters for those
  fields. Here's something to get you started::

    public class Person {

        private int id;
        private String first;
        private String last;
        private String phone;

        public int getId() {return id; }
        public void setId(int id) { this.id = id; }

        public String getFirst() {return first; }
        public void setFirst(String first) {this.first = first; }
    }

* Create a ``PersonDAO.java`` file.
* Add a static method to the PersonDAO object called ``getPeople()``.
  Use the database code and have it return
  a list of the people and all the fields.
* Update the servlet, and attempt call the DAO. Take things one
  step at a time trying to pull from the database.
* Have the servlet print out JSON for the fields in the database. Something
  like::

    [{"id":1,"first":"Paul","last":"Craven"},{"id":2,"first":"Sam","last":"Simpson"}]

* Validate your JSON file with `JSON Lint`_.
* If you can't make a successful completion, keep an eye out for what you can
  partially complete so you get partial points.

.. _JSON Lint: http://jsonlint.com/

Turn in
-------

* GitHub URL for your project.
* URL for the Amazon web services that links to your working servlet that spits
  out JSON.
* If you aren't able to get everything working, explain what you do have working
  so I don't have to search for it.
