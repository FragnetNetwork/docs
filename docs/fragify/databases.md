---
sidebar_position: 7
---

# MySQL Databases

Databased are commonly used by plugins or mods to store large amounts of data efficiently.

## Limits

- The number of databases you can create depends on the server plan you have purchased (1 by default for free).
- The size of your database does not count towards your server's disk usage.

## Creating a database

To create a database, head over to your server's **Databases** tab and click the **New Database** button.

In the modal that appears, you can enter:

- **Database Name:** This should only contain alphanumeric characters, underscores, dashes, and/or periods.
- **Connections From:** This is the IP address that the database should allow connections from. You can use the percentage `%` symbol to allow connections from anywhere.

---

## Managing your databases

Once your database is created, you should see the following:

![Database Overview](images/databases-overview.png)

#### View
The view button will reveal more information about your database, including the username and password you can use to connect to it.

You can then use the **PHPMyAdmin** button to manage your database using the corresponding username/password.

---

## Database backups

You can create database backups by heading over to your server's **Backups** tab and clicking the **Create Backup** button. You can also restore or download backups from this page.

---

## Deleting a database

To delete a database, head over to your server's **Databases** tab and click the **Trash** icon next to the database you want to delete.

:::warning
Deleting a database is ireversible. All data will be lost.
If you accidently deleted your database and you have a backup, you can restore it from the **Backups** tab.
:::