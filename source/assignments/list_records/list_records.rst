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

Common Issues
-------------

* I don't know how to test my servlet - Run ``/index.jsp``. Change ``index.jsp`` on
  your web browser to ``/api/name_list_get``. Test that link. Works on your
  local server, or the AWS server.
* IntelliJ can't import servlet classes - Go to file...project structure...libraries,
  add the library ``/xamp/tomcat/lib/servlet-api.jar``
* Can't import gson classes - Download the ``gson-2.8.0.jar`` file from the class
  website. Put in
  ``WEB-INF/lib`` directory. Add it to project structure.
* I just get ``[]`` - Look at your server log. The first error your server
  generates you can ignore. The second error is probably your issue. Errors you care about
  will have a long stack trace. Practice reading the stack trace to figure out
  the error.
* Can't import mysql - Download the
  ``mysql-connector-java-5.1.40-bin`` file. Put in
  ``WEB-INF/lib`` directory. Add it to project structure.
* Doesn't work on AWS. - You can download the last 100 lines of your log to get
  a clue what is wrong. Search for the option.
* AWS says something about the connection pool - Copy ``tomcat-dbcp.jar`` from
  ``/xamp/tomcat/lib`` to your ``WEB-INF/lib`` folder. Redeploy. That jar file
  has the connection pool code, which for some reason isn't included on Amazon.
* Huge long pause when connecting - Can't get through your firewall. Just change
  your security to accept connections from anywhere. That's totally the wrong
  way to do it, but I haven't figured out the proper way yet.