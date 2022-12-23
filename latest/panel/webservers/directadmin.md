# DirectAdmin & OpenLiteSpeed

***

!> This is not recommended for production usage, whatsoever, it is possible to do if you have access to the DirectAdmin directory via SSH. It also requires some basic understanding of Linux commands.

?> Do note, it'll reset the file once you add something, such as a subdomain, etc.

### Getting everything ready

You'll need to fire up a SSH session to your node, then navigate to the DirectAdmin's folder where the users OpenLiteSpeed configuration files are located:
```bash
cd /usr/local/directadmin/data/users/
```

Now, you'll need to go into the directory where you have the user with the panel installed as per the documentation. You can do this using the command `cd`, for example:
```bash
cd jex
```

### Edit the file

Afterwards, you'll find several files. We're interested in `openlitesped.conf`. Open it with your favourite editor. In this file, you have all the VirtualHosts for your created domains and subdomains for that user. You're now going to find for the (sub)domain where you installed Jexactyl, for example: `virtualHost jexactyl.com-80` & `virtualHost jexactyl.com-443`

You'll need to find `docRoot` on each of the HTTP ports. It should look something like this:
```
  #VirtualHost config settings
  docRoot                   /home/panel/domains/jexactyl.com/public_html
```

After you found this string, you'll need to edit it and add /public at the end of the directory, for example:
```
  #VirtualHost config settings
  docRoot                   /home/panel/domains/jexactyl.com/public_html/public
```

### Restart the webserver

Afterwards, restart OpenLiteSpeed with:
```bash
systemctl restart openlitespeed
```
and you should be ready-to-go. This fixes the 404 issues after installing it correctly.

?>
Congrats! Jexactyl is installed and should be functioning normally.
If you encounter any issues, please let us know on our [Discord](https://discord.com/invite/qttGR4Z5Pk).
