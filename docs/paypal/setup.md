---
sidebar_position: 1
---

# Using Paypal with Jexactyl
***
Using PayPal with Jexactyl is easy and quick to get set-up with. Here's a guide on how to 
start accepting payments with Jexactyl.

## Create Rest API Credentials
To generate REST API credentials for and live environments:

* Log in to the Developer Dashboard with your PayPal account.
* Under the DASHBOARD menu, select My Apps & Credentials.
* Make sure you're on the 'Live' tab so you're not using development credentials.
* Under the App Name column, select Default Application, which PayPal creates with a new Developer Dashboard account. Select Create App if you don't see the default app.

## Set callback URL
Before you do anything else, you'll need to set your callback URL for your Rest API in PayPal.
If your panel was hosted on the domain `panel.example.com`, your callback URL would be:
```
https://panel.example.com/api/client/callback/success
```

## Add credentials to Jexactyl

Navigate to Admin > Credits System > Payments.
Once you're there, there'll be fields for the Client ID and Client Secret.
Fill in BOTH of these fields, as well as customizing the pricing for credits.

## Summary

After you've added the credentials, users should be able to buy credits via the Store page.
We hope this guide has been short but helpful for you - if you have any issues setting PayPal up, please join our [Discord](https://discord.gg/qttGR4Z5Pk)