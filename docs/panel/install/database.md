# Database Setup
***
In order for the Panel to get and set data, we'll need a database.
This is where all the information about the Panel is stored.
In this case, we're using MySQL - although Amazon Lambda and other
database services are also viable options. 

?>
One thing you could do to further secure and scale the Panel is to have a 
separate VPS or server for databasing. This could be beneficial down the 
line for things like multi-cluster deployments and load balancing databases.

***
### Create database
```sql
mysql -u root -p

# Remember to change 'yourPassword' below to be a unique password
CREATE USER 'jexactyl'@'127.0.0.1' IDENTIFIED BY 'yourPassword';
CREATE DATABASE panel;
GRANT ALL PRIVILEGES ON panel.* TO 'jexactyl'@'127.0.0.1' WITH GRANT OPTION;
exit
```