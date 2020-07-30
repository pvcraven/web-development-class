.. _list_records:

Assignment 3 - List Records
===========================

Complete
--------
* Create a database with a Person table as outlined in :ref:`setup-amazon-db`.
* Create a package for your Java files. For example, I used ``edu.simpson.craven``.
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
* Create a servlet called ``NameListGet``,
  as shown near the end of :ref:`manage-connections`. Make it in the package
  you created.

.. image:: new_servlet.png

* Update the servlet mapping in ``web.xml`` as shown in the tutorial.
* Look at the "Hello World" servlet example code in the tutorial.
  Use that code to test.
* Start the servlet engine. Take a look at the common errors at the end
  of this document. You'll probably need to copy over some libraries to fix
  common problems.
* Test the servlet. You'll have to manually replace ``index.jsp`` with your
  servlet URL which is ``/api/name_list_get`` if you followed the tutorial.
* Add a static method to the PersonDAO object called ``getPeople()``.
  Use the database code and have it return
  a list of the people and all the fields.
* Update the servlet to the example JSON code where we call the DAO and then
  use GSON to convert it to JSON format for us.
* Have the servlet print out JSON for the **all** fields in the database. Something
  like this, but with more fields::

    [{"id":1,"first":"Paul","last":"Craven"},{"id":2,"first":"Sam","last":"Simpson"}]

* Validate your JSON file with `JSON Lint`_.
* If you can't make a successful completion, keep an eye out for what you can
  partially complete so you get partial points.

.. _JSON Lint: http://jsonlint.com/

Make sure you list out for each record:

* id
* First name
* Last name
* E-mail address
* Phone number
* Birthday

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
* IntelliJ can't import servlet classes and gives you an error like
  ``Error:(5, 52) java: package javax.servlet.http does not exist``
  To fix, go to file...project structure...libraries,
  add the library ``/whereever_you_installed_tomcat/lib/servlet-api.jar``
* Can't import mysql, because I get an error like ``Caused by: java.lang.ClassNotFoundException: com.mysql.jdbc.Driver``
  in the Tomcat console. Fix: Download the
  ``mysql-connector-java-5.1.47-bin`` file. I've got it on Scholar, but you
  can Google it too. Put in
  ``WEB-INF/lib`` directory. Also add it to ``/wherever_tomcat_is/tomcat/lib`` as well.
* If you get a "File not found" when trying to go to your ``http://localhost:8080/CIS_320_First_Project_war_exploded/api/name_list_get``
  or whatever, make sure your servlet mapping in ``web.xml`` is updated from the default.
* Can't import gson classes - Download the ``gson-2.8.5.jar`` file from the class
  website. Put in
  ``WEB-INF/lib`` directory. Add it to project structure.
* I just get ``[]`` - Look at your server log. The first error your server
  generates you can ignore. The second error is probably your issue. Errors you care about
  will have a long stack trace. Practice reading the stack trace to figure out
  the error.
* Doesn't work on AWS. - You can download the last 100 lines of your log to get
  a clue what is wrong. Search for the option.
* AWS says something about a mis-match in class version. If you compile your project
  with Java 10 and AWS expects Java 8, you'll get an error. You can select "Project Structure"
  from IntelliJ and set your SDK to compile to an earlier version:

.. image:: sdk_version.png

* AWS says something about the connection pool - Copy ``tomcat-dbcp.jar`` from
  ``/wherever_tomcat_is/tomcat/lib`` to your ``WEB-INF/lib`` folder. Redeploy. That jar file
  has the connection pool code, which for some reason isn't included on Amazon.
* Huge long pause when connecting - Can't get through your firewall. Just change
  your security to accept connections from anywhere. That's totally the wrong
  way to do it, but I haven't figured out the proper way yet.
* Doesn't like the log function - Don't forget to create the logger::

    private final static Logger log = Logger.getLogger(MyClassHere.class.getName());
