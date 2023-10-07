# Troubleshooting Procon layer

If you cannot conenct to Procon layer, you have to check the following:

**1.** Check Battlefield 4 server's details input in Configure option on the Fragify panel. The IP address and RCON port should be correct.

**2.** Make sure you connect to the Procon port and not Battlefield 4 server's RCON port. 

**NOTE: The configurations made while connected to RCON port of your Battlefield 4 server can be lost after closing your Procon client or restart of the server. We recommend to make changes while you are connected to Procon Layer.**

**3.** Check permissions of account that you are attempting to connect with. The permissions can be found in `Configs/yourServersIP_yourServersRCONPort/yourserversIP_yourServersRCONPort.cfg`. Full permissions to account can be given by inputting **4185975** next to username of the account. It should look like this:
```
procon.protected.layer.setPrivileges "admin" 4185975
```