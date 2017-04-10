Encryption and Hashing
======================

Encryption
----------

If you store a person's SSN or credit card number, always encrypt it first.
Personally, I think storing information like this in clear-text on a
database should be criminal. Regardless, realize that you are endangering the
information of hundreds or even thousands of people if you don't do this.

If the information is encrypted, then if a hacker gets a dump of the
database, he/she will not be able to use the information without a
key.

(However, even just names and e-mail addresses will open up targeted
phishing attacks.)

There have been a lot of encryption algorithms written for computers. The algorithms
that are considered "secure" have changed so many times over the years that
most modern implementations let you pick the standard by a text field so you
can easily update it.

Here is a program that uses the `Advanced Encryption Standard`_ (AES)
to encrypt information. AES is the current U.S. standard that was adopted
after a lengthy process in 2002.

Many current encryption algorithms are `block ciphers`_. Encryption of data
will be done in chunks. For example, if the block is 128 bits, the data must
be a multiple of 128 bits. If there isn't enough data to fill out a 128 bit
block, it must be padded.

.. _block ciphers: https://en.wikipedia.org/wiki/Block_cipher

.. _Advanced Encryption Standard: https://en.wikipedia.org/wiki/Advanced_Encryption_Standard

Symmetric Ciphers
^^^^^^^^^^^^^^^^^

.. literalinclude:: AES.java
    :linenos:
    :language: java
    :caption: AES.java

Here's the output of that program:

.. code-block:: text

    My Text: Hello World
    AES Key: 0640677476B7696B175DCD65EB0B1353
    Encrypted Text: 943E08A2CE5AC392F1E3722580C61776
    DecryptedText: Hello World

Asymmetric Ciphers
^^^^^^^^^^^^^^^^^^

We'll talk about symmetric vs asymmetric ciphers in class.

Signing
^^^^^^^

We'll talk about how signing works in class.

Hashing
-------

Hashing is a one-way function. It does not encrypt. It takes an input and
makes a pre-defined length number out of it.

It is often used with files. You can take a 10 meg file, and then generate a
256-bit hash out of it. If you change the 10 meg file at all, it will be nearly
impossible to make t he file have that same 256-bit hash (or whatever) as the original.

You can also do it with passwords. Take a password and generate a hash out
of it. Then you don't have to worry about someone decrypting it. Kind of.

Hashing a password isn't enough, because someone could simply hash a dictionary
and reverse-engineer matching hashes. It is a good idea to salt_ a hash by adding
additional random data to it.

SHA-1 is the most common hashing algorithm used right now. MD5 used to be used
a lot, but a lot of vulnerabilities have been discovered with it. MD5 is
considered insecure and should not be used.

.. _salt: https://en.wikipedia.org/wiki/Salt_(cryptography)

.. literalinclude:: Hash.java
    :linenos:
    :language: java
    :caption: Hash.java

Sample output of the program above:

.. code-block:: text

    Original: Hello World
    Hash: 0A4D55A8D778E5022FAB701977C5D840BBC486D0
