---
sidebar_position: 1
---

# SSL Setup
***
## What is SSL and why do I need it?
SSL (Secure Socket Layer) is a system which allows network traffic to pass
through a secure, encrypted layer. SSL is used on most if not all of the 
sites you typically visit - and should be on yours, too! It allows the Panel
to communicate with the Daemons and your users securely and faster, without
any security errors.

## How do I set up SSL?
For most users, it's a simple process involving only a few commands.

We'll start by installing the necessary package in order to get an SSL certificate, `certbot`.
```bash
sudo apt update
sudo apt install -y certbot
```
:::info Verify your A name!
Make sure that you have configured your domain DNS system to point to your server's IP.
It should be configured as an A name, and if you're using Cloudflare, **DO NOT** proxy
it just yet. You can proxy it after the SSL certificate creation is complete!
:::

After all of this is complete, it's time to verify our A name and get our SSL cert.
We need to start by stopping the NGINX process as it will otherwise interrupt certbot
and cause the process to fail.
```bash
systemctl stop nginx
```
After you've done this, you can get an SSL certificate for your domain by running this
command, replacing `example.com` with your domain:
```bash
certbot certonly -d example.com --standalone
```
If you get any errors from running this, check that your DNS configuration is correct.

After this is complete, you can go ahead and start the NGINX process again:
```bash
systemctl start nginx
```