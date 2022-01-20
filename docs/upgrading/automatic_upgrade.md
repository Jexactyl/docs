---
sidebar_position: 1
---

# Introduction
***

:::warning CHECK YOUR JEXACTYL VERSION!
If you're running a version before v2.x, these steps won't work as intended.
Please refer to the support Discord if you need any assistance, or you can also try the [manual upgrade](../manual_upgrade.md) instead.
:::

You may have chosen to do the automatic upgrade, if so, we again, tell you to check your panel version. The automatic upgrade command on a Jexactyl version below v2.x **will not** work as intented. If you have checked, and your panel version is v2.x or higher, please proceed.

Before upgrading, we recommend checking the following:
- You have PHP 8.0
- There is a new update available
- You have a backup of your data, including database, before beginning the update process.

## Upgrading to the latest version automatically

You may have thinked it wasn't easy, but it really is! With only one command, you'll be able to update your panel! (Pstt... Remember, only if your panel version is 2.x or higher)

The command you'll need to run is:

```bash
cd /var/www/jexactyl && php artisan p:upgrade
```

That's all for now! Just let the command run and your panel should be updated.

## If you've migrated from Pterodactyl

If you've migrated from Pterodactyl, the update command is fairly different. Instead of `cd`'ing into `/var/www/jexactyl`, you'll need to cd into `/var/www/pterodactyl` instead.

```bash
cd /var/www/pterodactyl && php artisan p:upgrade
```