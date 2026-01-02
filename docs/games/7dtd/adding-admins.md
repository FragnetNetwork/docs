---
title: Adding admins
keywords: ['adding admins to 7dtd', 'adding admins to 7 days to die', 'adding admins to 7 days to die server', 'adding admins to 7dtd server', '7dtd admin', '7 days to die admin', '7 days to die server admin', '7dtd server admin']
---

This will be a guide on how you can add admin to your [7 Days To Die](https://fragnet.net/games/7d2d) server.

## Adding admin through the config file

**Step 1:** Log in to your account on our [Fragify panel](VAR::PANEL_URL) and find your 7 Days To Die server.

**Step 2:** Before making any changes, you will first need to stop your server.  

**Step 3:** Click on a section named **File Manager** on the left-side menu.

![File Manager](../images/file-manager.png)  

**Step 4:** Navigate to the following directory: `.local/share/7DaysToDie/Saves` and open **serveradmin.xml** file. 

**Step 5:** You will need a third-party tool, so you can find Steam64 ID. One of the most famous sites is [https://steamid.xyz/](https://steamid.xyz/). Enter the Steam Profile URL of the person you want to add as admin and copy the Steam64 ID.  

**Step 6:** Go back to the config file and search for the section:
```
<adminTools>
  <users>
  </users>
```
Insert the following line:
```
<user platform="Steam" userid="76561198021925107" name="yourNickname" permission_level="0" />
``` 
between `<users>` and `</users>` and paste your Steam64 ID in `userID=`.
Example:
```
<adminTools>
  <users>
    <user platform="Steam" userid="76561198021925107" name="yourNickname" permission_level="0" />
  </users>
```
**Step 7:** Start the server.
