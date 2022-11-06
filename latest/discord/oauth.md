# Configure Discord for Jexactyl

***

This guide will show you how to link a Discord auth application to Jexactyl, which allows
users to authenticate with Jexactyl via their Discord account.

***

### Configure a Discord application

Firstly, you'll need to make a Discord App in order to obtain a Client ID and Client Secret.
You can do this by heading to the [Discord Developer Portal](https://discord.com/developers)
and clicking the 'New Application' button. Give it a name of your choice (this WILL be visible to
clients), and hit 'Create'.

### Obtain the Client ID and Secret

Next, we'll need to grab two things: our app's ID and also its Secret in order to keep the app secure.
![Discord ID image](../../public/images/discord_id.png)
![Discord ID image 2](../../public/images/discord_id_2.png)

### Configure Redirect URLs

You will now need to configure Redirects so Discord knows where to point your users after authentication.
You can do this by clicking the 'Add Redirect' button and adding these two URLs.
![Discord Redirect image](../../public/images/discord_redirect.png)

### Add Client ID and Secret to Jexactyl

Finally, head over to Jexactyl's 'User Registration' settings page and fill in your Client ID and Secret
for Discord. Make sure to enable the registration module, otherwise users will not be able to authenticate!
![Enable Jexactyl image](../../public/images/discord_jexactyl.png)

### Test your Application

Give it a whirl and try to log in via Discord. If you encounter an error like `invalid_redirect_uri`, go over
step 3 again and make sure your settings are 100% correct and valid.

?>
Congrats! Jexactyl Discord Oauth should be functioning normally.
If you encounter any issues, please let us know on our [Discord](https://discord.com/invite/qttGR4Z5Pk).
