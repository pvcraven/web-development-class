Managing Database Connections
=============================

Now, we need to set up the the connection. Connection information is stored in
a file called ``META-INF/context.xml``:

.. code-block:: xml

    <?xml version="1.0" encoding="UTF-8"?>
    <Context>
        <Resource name="jdbc/cis320"
                  auth="Container"
                  type="javax.sql.DataSource"
                  username="cis320"
                  password="mysecretpassword"
                  driverClassName="com.mysql.jdbc.Driver"
                  url="jdbc:mysql://cis320c.cp6n5ccfdx2q.us-west-2.rds.amazonaws.com:3306/cis320"
                  maxActive="15"
                  maxIdle="3"/>
    </Context>
