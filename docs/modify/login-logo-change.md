---
sidebar_position: 2
--- 

# Change login page logo

Changing the logo on the login page is dead simple, 
as it's only one file that is edited - the image you'd
rather use over the default Pterodactyl logo. Download the SVG
you want to use instead, and save it as `new_logo.svg` to your server - 
any directory works for now as we'll just have it as a placeholder.

## Find logo directory

The `logo.svg` file which is used for that image on the login screen is 
located in the `/var/www/jexactyl` directory. Once you're there, you need
to navigate to `resources/scripts/assets/images`, where the `logo.svg` is
located:
```bash
cd /var/www/jexactyl/resources/scripts/assets/images
ls # Lists the files in that folder, should all end with .svg
```
After you're in this directory, we'll need to move the SVG you wanted to use
to this folder. As an example, we're using the `/home/jex` directory where
the new logo is saved.

## Move new logo

Moving the new SVG over is a simple process with Linux, as it's one command
which tells your new logo file to move to the panel directory:
```bash
mv /home/jex/new_logo.svg /var/www/jexactyl/resources/scripts/assets/images
```
You can then use the `ls` command again to make sure the `new_logo` is in the 
correct directory.

## Swap old logo with new logo

Finally, we need to swap the logos out - which is again a simple process of moving
files around to give them different names.
```bash
mv logo.svg old_logo.svg # Moving the Pterodactyl logo
mv new_logo.svg logo.svg # Moving our new logo to where it needs to be
```

## Build

After this is complete, all you need to do is build the Panel with the 
`yarn run build:production` command - and after that, you're done! 

