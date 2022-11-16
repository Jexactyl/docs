# Renewal System Configuration

***

Add this line to your system's crontab in order to run the renewal script daily.

```bash
crontab -e # Pick '1' if prompted
```
Then, paste this line and exit after:

```bash
0 0 * * * php /var/www/jexactyl/artisan p:schedule:renewal >> /dev/null 2>&1
```

?>
Congrats! Renewals have been configured and should be functioning normally.
If you encounter any issues, please let us know on our [Discord](https://discord.com/invite/qttGR4Z5Pk).
