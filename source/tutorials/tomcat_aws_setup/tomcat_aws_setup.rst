Setup AWS for Tomcat Deployment
===============================

Setup Server
------------

* Launch new instance of "Ubuntu Server 16.04 LTS" or newer.
* Make it a t2.micro sized instance.
* Select a security group for the web.
* Get your key pair
* Use Moba XTerm to shell over to the machine
* ``sudo apt-get update`` Check for updates
* ``sudo apt-get upgrade`` Update
* ``sudo apt-get install default-jdk tomcat7 libmysql-java`` Install Java and Tomcat.
* ``sudo vim /etc/tomcat7/server.xml`` By default Tomcat serves out on port 8080. Let's change that. Use the command and then the editor to change the "8080" to "80" instead. Should be about line 73. Remember how to use vim. Or use nano if you can't be bothered.
* ``sudo vim tomcat7`` By default, applications can't listen on ports below 1023. So we need to authorize it. Change the last line, uncomment, and have it read ``AUTHBIND=yes``
* Go to your machine in your web browser. You should get a plain "It works!" page.
* ``sudo chmod -R 777 /var/lib/tomcat7/webapps`` Set permissions
* cd /usr/share/tomcat7/lib
* sudo wget https://dev.mysql.com/get/Downloads/Connector-J/mysql-connector-java-5.1.40.tar.gz
* sudo tar -xzf mysql-connector-java-5.1.40.tar.gz
* sudo mv mysql-connector-java-5.1.40/mysql-connector-java-5.1.40-bin.jar .
* sudo  rm -rf mysql-connector-java-5.1.40
* ``sudo /etc/init.d/tomcat7 start`` Strart Tomcat.

Deploy
------

* Build WAR file
* Copy to ``/var/lib/tomcat7/webapps``
* Go to ``http://yourserver.compute.amazonaws.com/test2_war/index.html``
