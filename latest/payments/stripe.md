# Accepting payments with the Stripe API

***

This guide will show you how to easily get started with using Stripe with Jexactyl
in order to process credit purchases.

!> This system was implemented in `v3.2.0`. Please make sure you're running this version
or newer in order to use the Stripe system.

***

### Obtain Client Secret and Webhook Secret

In order to process payments via Stripe, you&apos;ll need to firstly
create an account and generate an API key as well as a webhook secret.

?> Register an account with Stripe at https://stripe.com to get started.

***

### 1. Log into the Stripe Dashboard

Once logged in and set up, you should be at a page which looks like this:

![image](../../public/images/stripe-dashboard.jpg)

### 2. Generate an API Key

Click the `Developers` tab on the right of the screen. Then, on the sidebar,
head to 'API keys' and generate a new API key.

![image](../../public/images/stripe-apikey.jpg)

### 3. Create Webhook

After creating the API key, you&apos;ll need to create a `webhook` which will
allow Stripe events to be processed via Jexactyl. Head to 'Webhooks' on the sidebar
and generate a new webhook.

![image](../../public/images/stripe-webhook.png)

In the `Endpoint URL` field enter this: `https://<your.panel.tld>/stripe/listen`. 

Then add the following events:

![image](../../public/images/stripe-perms.jpg)

### 4. Copy generated keys 

After you've done this, copy both your webhook secret and your API key,
so we can put them in the .env configuration file.

![image](../../public/images/stripe-webhook-secret.jpg)
![image](../../public/images/stripe-api-secret.jpg)

***

### 5. Add Client ID and Secret to Jexactyl
Next, you'll need to place these keys in your `.env` file in order to allow Jexactyl to login.

```bash
cd /var/www/jexactyl
nano .env

# Fill in the fields STRIPE_CLIENT_SECRET and STRIPE_WEBHOOK_SECRET
```

### 6. Enable the Stripe gateway in settings

?> Make sure the 'Stripe enabled' setting is set to `Enabled`.

![image](../../public/images/store_admin.png)

### 7. Test your configuration

Head over to the Jexactyl Storefront and click the 'Balance' tab. Once you're there, attempt to buy `x` credits with Stripe.
If the page redirects to a Stripe purchase portal, congrats! You've successfully set up and configured Stripe.

?> If you run into issues while getting started with PayPal, let us know in the [Jexactyl Discord](https://discord.com/invite/qttGR4Z5Pk)
