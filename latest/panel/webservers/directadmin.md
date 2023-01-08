# DirectAdmin & OpenLiteSpeed

***

!> This is not recommended for production usage, whatsoever, it is possible to do if you have access to the DirectAdmin directory via SSH. It also requires some basic understanding of Linux commands.

### Edit the docRoot

In order to change the document root from, for example `/home/panel/domains/panel.jexactyl.com/public_html` to `/home/panel/domains/panel.jexactyl.com/public_html/public` and make the change permanent, we'll need to go to the User tab (if you're a reseller), next, go to Account Manager, click the dropdown, then go into Subdomain Management. On this page, you should look for a row named `Docroot` with a Default check if you haven't edited it, and a pencil. Now, you'll need to click the pencil which should bring you to another page. In this page, you're going to click `Custom` inside 'Public HTML Root', which should bring the directory of your root domain. It should have this format: `/domains/<YOUR_MAIN_DOMAIN>`. 
If this is correct, then you should add the following to the current directory. Do note, <SUBDOMAIN> means the first letters of your domain before the dot, so if your domain is `panel.jexactyl.com`, then you'll only need to input `panel`. In here, you can also change the PHP version.

`/public_html/<SUBDOMAIN>/public`
  
Afterwards, you can click Save and it should be good to go.

### Restart the webserver

Afterwards, restart OpenLiteSpeed or your webserver with:
```bash
systemctl restart <YOUR_WEBSERVER>
```

and you should be ready-to-go. This fixes the 404 issues after installing it correctly.

?>
Congrats! Jexactyl is installed and should be functioning normally.
If you encounter any issues, please let us know on our [Discord](https://discord.com/invite/qttGR4Z5Pk).
