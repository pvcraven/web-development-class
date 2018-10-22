<?php date_default_timezone_set('America/Chicago'); ?>
<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Example Document</title>
  </head>

  <body>

    <h1>Test PHP File</h1>

    <p>The current month is:
        <?php echo date("M"); ?>
    </p>
    <p>The current day of the week is:
        <?php echo date("l"); ?>
    </p>
    <p>The current time is:
        <?php echo date("h:i:s a"); ?>
    </p>
    <p>The current date is:
        <?php echo date("m/d/Y"); ?>
    </p>

  </body>
</html>