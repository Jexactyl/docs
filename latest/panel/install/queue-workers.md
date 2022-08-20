# Queue Workers

***

### Crontab
The first thing we need to do is create a new cronjob that runs every minute to process specific Jexactyl tasks, such as session cleanup and sending scheduled tasks to daemons. 

You'll want to open your crontab using `sudo crontab -e` and then paste the line below. **Nano is the easiest text editor to use, so press `1` when prompted to pick an editor.**

```bash
* * * * * php /var/www/jexactyl/artisan schedule:run >> /dev/null 2>&1
```

***

### Systemd Queue Worker
Next you need to create a new systemd worker to keep our queue process running in the background. This queue is responsible for sending emails and handling many other background tasks for Jexactyl.

Create a file called `panel.service` in `/etc/systemd/system` with the contents below.

```bash
# Jexactyl Queue Worker File
# ----------------------------------

[Unit]
Description=Jexactyl Queue Worker

[Service]
User=www-data
Group=www-data
Restart=always
ExecStart=/usr/bin/php /var/www/jexactyl/artisan queue:work --queue=high,standard,low --sleep=3 --tries=3
StartLimitInterval=180
StartLimitBurst=30
RestartSec=5s

[Install]
WantedBy=multi-user.target
```

### Enable Queue Workers
Finally, enable the jexactyl panel service we just made as well as the redis service to start and run on boot.
```bash
sudo systemctl enable --now panel.service
sudo systemctl enable --now redis-server
```
