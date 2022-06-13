# Nginx without SSL Configuration

***

> Jexactyl strongly recommends you use SSL in order to secure your site.
Please consider enabling SSL by following the [Setting up SSL](docs/webservers/ssl-setup.md) guide.

***

### Remove default configuration

Firstly, let's remove the default NGINX configuration from your server.
```bash
rm /etc/nginx/sites-available/default; rm /etc/nginx/sites-enabled/default
```

After we've done that, we can make our configuration for Jexactyl to run.

***

### Create configuration file

!> Make sure to replace `<domain>` with your own domain in this config file.
Please also note that this configuration is for NGINX with SSL enabled.
If you want to use Apache as a webserver, or do not want to use SSL, please refer
to the other webserver instructions.

Make a file called `panel.conf` in `/etc/nginx/sites-available` and insert the following:

```nginx
server {
    # Replace the example <domain> with your domain name or IP address
    listen 80;
    server_name <domain>;


    root /var/www/jexactyl/public;
    index index.html index.htm index.php;
    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    access_log off;
    error_log  /var/log/nginx/jexactyl.app-error.log error;

    # allow larger file uploads and longer script runtimes
    client_max_body_size 100m;
    client_body_timeout 120s;

    sendfile off;

    location ~ \.php$ {
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass unix:/run/php/php8.1-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \n post_max_size=100M";
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param HTTP_PROXY "";
        fastcgi_intercept_errors off;
        fastcgi_buffer_size 16k;
        fastcgi_buffers 4 16k;
        fastcgi_connect_timeout 300;
        fastcgi_send_timeout 300;
        fastcgi_read_timeout 300;
    }

    location ~ /\.ht {
        deny all;
    }
}

```

***

### Enabling Configuration

Firstly, let's link the file we've made to the directory which NGINX uses for configs.
```bash
ln -s /etc/nginx/sites-available/panel.conf /etc/nginx/sites-enabled/panel.conf
```

Then, we can test our nginx configuration to make sure it's working and valid:
```bash
nginx -t
```

Finally, we can restart the NGINX server process to make our Panel available on the domain.
```bash
systemctl restart nginx
```

?>
Congrats! Jexactyl is installed and should be functioning normally.
If you encounter any issues, please let us know on our [Discord](https://discord.com/invite/qttGR4Z5Pk).
