---
sidebar_position: 3
---

# MySQL Setup
***
In order for the Panel to store and send data, we'll need a database.
This is where all the information about servers, users and functions go.
In this case, we're using MySQL - although Amazon Lambda and other
database services are also viable options. 
:::info Recommendations for your database
One thing you could do to further secure and scale the Panel is to have a 
separate VPS or server for databasing. This could be beneficial down the 
line for things like multi-cluster deployments and load balancing databases.
:::
```sql
mysql -u root -p

# Remember to change '$up3rs3cur3p4$$w0rd!' below to be a unique password
CREATE USER 'jexactyl'@'127.0.0.1' IDENTIFIED BY '$up3rs3cur3p4$$w0rd!';
CREATE DATABASE panel;
GRANT ALL PRIVILEGES ON panel.* TO 'jexactyl'@'127.0.0.1' WITH GRANT OPTION;
exit
```