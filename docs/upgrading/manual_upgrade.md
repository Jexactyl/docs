---
sidebar_position: 2
---

# Manual update
***

:::warning CHECK YOUR JEXACTYL VERSION!
If you're running a version before v2.x, these steps won't work as intended.
Please refer to the support Discord if you need any assistance.
:::

Upgrading Jexactyl is a relatively simple and painless process when done correctly.
Before you start, make sure you:
- Update PHP to `>= 8.x`
- There is a new version available
- You have a backup of your data before beginning the update process

## Upgrading to the latest Jexactyl version
Firstly, let's put the Panel into a state where users
cannot access it while we're updating.

```bash
php artisan down
```

Then, we can download the latest files for Jexactyl and extract them.
```bash
# Download the updated files and delete the archive file.
curl -L -o panel.tar.gz https://github.com/jexactyl/panel/releases/latest/download/panel.tar.gz
tar -xzvf panel.tar.gz && rm -f panel.tar.gz
```

Next, we need to assign permission to the cache directory.
```bash
chmod -R 755 storage/* bootstrap/cache
```

## Update dependencies
Make sure to update the Jexactyl dependencies whenever you update the Panel.
You can do so by running the following command:
```bash
composer install --no-dev --optimize-autoloader
```

##Set Webserver Permissions

The last step is to set the proper owner of the files to be the user that
runs your webserver. In most cases this is www-data, but can vary from system
to system — sometimes being nginx, apache, or even nobody.

```bash
# If using NGINX or Apache (not on CentOS):
chown -R www-data:www-data *

# If using NGINX on CentOS:
chown -R nginx:nginx *

# If using Apache on CentOS
chown -R apache:apache *
```

## Exit maintainence mode
Now that the upgrade is complete, exit maintenance mode and Jexactyl will now be available!
```bash
systemctl restart panel
# Bring the Panel back up to receive connections.
php artisan up
```
