<p>Deploy script</p>
<pre>
<?php
$output = shell_exec("cd ..;git pull 2>&1");
echo $output;
?>
</pre>