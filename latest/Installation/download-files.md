---
sidebar_position: 2
---

# Download Files
***
The first step in this process is to create the folder where the 
panel will live and then move ourselves into that newly created folder. 
Below is an example of how to perform this operation.

```bash
mkdir -p /var/www/jexactyl
cd /var/www/jexactyl
```

Once you have created a new directory for the Panel and moved into it you'll need to download the Panel files. This is as simple as using `curl` to download our pre-packaged content. Once it is downloaded you'll need to unpack the archive and then set the correct permissions on the `storage/` and `bootstrap/cache/` directories. These directories allow us to store files as well as keep a speedy cache available to reduce load times.

```bash
curl -Lo panel.tar.gz https://github.com/jexactyl/panel/releases/latest/download/panel.tar.gz
tar -xzvf panel.tar.gz
chmod -R 755 storage/* bootstrap/cache/
```