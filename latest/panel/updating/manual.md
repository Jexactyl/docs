# Updating Jexactyl

***

Updating Jexactyl keeps your system stable, secure and allows
your users/admins to experience new features quicker. Use
the following guide below as a reference for updating Jexactyl.

?>
Take a backup of your installation before continuing.

***

### Maintenance mode

Start by shutting down the Panel while we perform upgrades.

```bash
cd /var/www/jexactyl # Replace 'jexactyl' with 'pterodactyl' if you have migrated
php artisan down
```

### Download new version

Next, we'll use cURL to download the release archive from GitHub
and extract it.

```bash
curl -L https://github.com/jexactyl/jexactyl/releases/latest/download/panel.tar.gz | tar -xzv
chmod -R 755 storage/* bootstrap/cache # Set server permissions properly
```

### Update Composer packages

Due to Jexactyl staying up-to-date using the latest packages, you
will need to update the Composer dependencies which allow Jexactyl
to run properly on your machine.

```bash
composer install --no-dev --optimize-autoloader
```

### Sync database changes

You will need to migrate new database information into your
database in order to use the latest Jexactyl features.

```bash
php artisan migrate --seed --force
```

### Set webserver permissions

After changing the files, we must re-allow permissions for our
webserver so that Jexactyl can be hosted and accessed properly.

```bash
cd /var/www/jexactyl

# ONLY RUN ONE OF THE FOLLOWING COMMANDS!

# If using NGINX or Apache (not on CentOS):
chown -R www-data:www-data *

# If using NGINX on CentOS:
chown -R nginx:nginx *

# If using Apache on CentOS
chown -R apache:apache *
```

### Finalize update

As a final step, restart the queue worker and bring the Panel
back online so that users can experience the very latest.

```bash
sudo systemctl restart panel.service # Replace 'panel' with 'pteroq' if you have migrated
php artisan up
```

?> Any issues? Please reach out to us on [Discord](https://discord.gg/qttGR4Z5Pk).

