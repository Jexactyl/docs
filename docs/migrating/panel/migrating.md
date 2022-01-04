---
sidebar_position: 1
---

# Migrating to Jexactyl
***
This guide covers the process of migrating from a Pterodactyl panel to Jexactyl.
The process of migrating is nice and simple, only requiring you to download new
files and copy your important data over.

## Fetch updated files

You'll want to put your Panel into maintenance mode by running the down command below before starting. This will prevent users from accessing the Panel during a period where things will be broken or not working correctly. Make sure that you're in the /var/www/pterodactyl directory when executing the command.

:::danger Check the directory!
Please make sure you're in the `/var/www/pterodactyl` directory before running ANY of these commands.
:::
```bash
# Put the Panel into maintenance mode and deny user access
php artisan down
```

Let's then make sure your settings are safe
 by backing up your `.env` settings file to a safe place while we 
migrate your Pterodactyl panel over to Jexactyl.
```bash
cp -R /var/www/pterodactyl/.env /root/.env
```

After we've done this, we need to remove the existing files and replace them with Jexactyl's code.
```bash
rm -rf *
curl -L -o panel.tar.gz https://github.com/jexactyl/panel/releases/latest/download/panel.tar.gz

# Download the updated files and delete the archive file.
tar -xzvf panel.tar.gz && rm -f panel.tar.gz
```

Once all of the files are downloaded we need to set the correct permissions 
on the cache and storage directories to avoid any webserver related errors.
```bash
chmod -R 755 storage/* bootstrap/cache
```

## Add .env file to directory
Now, we need to add our `.env` file back to the /var/www/pterodactyl directory.
```bash
mv /root/.env /var/www/pterodactyl/.env
```

## Update dependencies
After you've downloaded all of the new files you will need to 
upgrade the core components of the panel. To do this, simply 
run the commands below and follow any prompts.
```bash
composer install --no-dev --optimize-autoloader
```

## Clear compiled cache
You'll also want to clear the compiled template cache to 
ensure that new and modified templates show up correctly for users.
```bash
php artisan optimize:clear
```

## Update database eggs
You'll also need to update your database schema for the newest 
version of Jexactyl. Running the two commands below will update 
the schema and ensure the default eggs we ship are up to date 
(and add any new ones we might have).
```bash
php artisan migrate:rollback
php artisan migrate --seed --force
```

## Set Webserver Permissions
The last step is to set the proper owner of the files to be the 
user that runs your webserver. In most cases this is `www-data`, but 
can vary from system to system — sometimes being `nginx`, `apache`, or even `nobody`.
```bash
# If using NGINX or Apache (not on CentOS):
chown -R www-data:www-data *

# If using NGINX on CentOS:
chown -R nginx:nginx *

# If using Apache on CentOS
chown -R apache:apache *
```

## Restart queue worker
After every update you should restart the queue worker, to
ensure that the new code is loaded in and used.
```bash
php artisan queue:restart
```

## Exit maintainence mode
Now that the upgrade is complete, exit maintenance mode and Jexactyl will now be available!
```bash
# Bring the Panel back up to receive connections.
php artisan up
```


