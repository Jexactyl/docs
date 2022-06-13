# Download Files

***

### Create Directory

The first step in this process is to create the folder where the 
panel will run and then move ourselves into that newly created folder. 
Below is an example of how to perform this operation.

```bash
mkdir -p /var/www/jexactyl
cd /var/www/jexactyl
```

***

### Download Panel

Once you have entered this directory, you can `curl` (download) the latest release to your machine.
Then, you can extract it using the `tar` command and assign permissions using `chmod`. We assign permissions
to the `storage/*` and `bootstrap/cache` directories in order to allow the site to cache objects and load faster.

```bash
curl -Lo panel.tar.gz https://github.com/jexactyl/jexactyl/releases/latest/download/panel.tar.gz
tar -xzvf panel.tar.gz
chmod -R 755 storage/* bootstrap/cache/
```