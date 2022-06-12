# Apache with SSL Configuration

***

### Disabling default configuration

Firstly, let's remove the default Apache configuration from your server.
```bash
a2dissite 000-default.conf
```

After we've done that, we can make our configuration for Jexactyl to run.

***

### Create configuration file

!> Make sure to replace `<domain>` with your own domain in this config file.
Please also note that this configuration is for Apache with SSL enabled.
If you want to use NGINX as a webserver, or do not want to use SSL, please refer
to the other webserver instructions.

Note: When using Apache, make sure you have the `libapache2-mod-php` package installed or else PHP will not display on your webserver.

Make a file called `panel.conf` in `/etc/apache2/sites-available` and insert the following:

```apache
<VirtualHost *:80>
  ServerName <domain>
  DocumentRoot "/var/www/jexactyl/public"
  
  AllowEncodedSlashes On
  
  php_value upload_max_filesize 100M
  php_value post_max_size 100M
  
  <Directory "/var/www/jexactyl/public">
    AllowOverride all
    Require all granted
  </Directory>
</VirtualHost>
```

***

### Enabling configuration

Firstly, let's link the file we've made to the directory which Apache uses for configs.
```bash
ln -s /etc/apache2/sites-available/panel.conf /etc/apache2/sites-enabled/panel.conf
```

Then, we'll apply the settings Apache needs to host Jexactyl.
```bash
sudo a2enmod rewrite
sudo a2enmod ssl
```

Finally, we'll restart Apache in order to bring Jexactyl online.
```bash
systemctl restart apache2
```

?>
Congrats! Jexactyl is installed and should be functioning normally.
If you encounter any issues, please let us know on our [Discord](https://discord.com/invite/qttGR4Z5Pk).
