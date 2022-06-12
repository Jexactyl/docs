# Setup SSL with Certbot

***

### Download Certbot package

We'll start by downloading the `certbot` package which can be used to create SSL certificates
for your website.
```bash
apt install -y certbot
```

***

### Creating a certificate

Assuming you have set your domain to point to your webserver IP, you're ready to create a certificate.
Creating an SSL cert is as simple as running one of the commands below:

```bash
# If you are using NGINX:
certbot certonly --nginx -d example.com

# If you are using Apache:
certbot certonly --apache -d example.com

# Use this if neither works. Make sure to stop your webserver first when using this method.
certbot certonly --standalone -d example.com
```