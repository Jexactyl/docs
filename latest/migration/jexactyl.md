# Migrate from Jexactyl v2.x

***

Using this guide, you'll be able to upgrade to Jexactyl v3.x from v2.x.

***

### Backup your Panel!

While this migration is designed to be as simple as possible, we strongly advise you take a backup
of all data, just to make sure nothing goes wrong during migration.
You can do this by running the following commands:

```bash
# Backs up the file structure and .env key.
cp -R /var/www/jexactyl /var/www/jexactyl-backup

# Dump the MySQL database and save it in the backup dir.
mysqldump -u root -p panel > /var/www/jexactyl-backup/panel.sql
```

***

### Mark Panel as unavailable

?> Make sure you're in the `/var/www/jexactyl` directory before continuing.

While the migration takes place, we'll put the Panel into an 'unavailable' state so users cannot
access the UI or API. We can do this by running the following:

```bash
php artisan down
```

***

### Download Jexactyl

After your backup is complete and the Panel is offline, we'll download the Jexactyl files
and overwrite the existing ones.

```bash
# Download the latest Jexactyl release using CURL.
curl -L -o panel.tar.gz https://github.com/jexactyl/jexactyl/releases/latest/download/panel.tar.gz

# Download the updated files and delete the archive file.
tar -xzvf panel.tar.gz && rm -f panel.tar.gz
```

Then, set permissions so that the Panel's files can be accessed.

```bash
chmod -R 755 storage/* bootstrap/cache
```

***

### Update Composer dependencies

After the new files have been downloaded, you'll need to update the PHP Composer dependencies
that run this Panel. To do so, use `composer` to update the packages:

```bash
# Temporary fix for errors.
composer require asbiin/laravel-webauthn

composer install --no-dev --optimize-autoloader
```

***

### Clear compiled UI cache

You'll also want to clear the Panel's cache so that the new site will appear correctly.

```bash
php artisan optimize:clear
```

***

### Update database migrations

Jexactyl includes new features and functions that require you to migrate to your database.
Luckily, this is a simple process which only involves running one command:

```bash
php artisan migrate --seed --force
```

***

### Reassign webserver permissions

Due to the change in files on the machine, we'll need to allow Apache/NGINX to read these
new files. You can do so by running the command specific to your webserver:

```bash
# If using NGINX or Apache (not on CentOS):
chown -R www-data:www-data /var/www/jexactyl/*

# If using NGINX on CentOS:
chown -R nginx:nginx /var/www/jexactyl/*

# If using Apache on CentOS
chown -R apache:apache /var/www/jexactyl/*
```

### Restart Queue Workers

After every update you should restart the queue worker, to ensure that the new code is loaded and used.

```bash
php artisan queue:restart
```

***

### Mark Panel as online

Now that the migration is complete, you can bring the Panel back online and make it available to users.

```bash
php artisan up
```

?>
Congrats! You have migrated to Jexactyl and everything should be functioning normally.
If you encounter any issues, please let us know on our [Discord](https://discord.com/invite/qttGR4Z5Pk).
