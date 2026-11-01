---
title: Protecting a backup
keywords: ['protect backup', 'protected backup', 'remove protection', 'lock backup', 'unlock backup', 'locked backup', 'keep backup', 'prevent backup deletion']
---

Protecting a backup stops it from being deleted, by you or by a schedule. This used to be called locking a backup.

Protect backups you want to keep for good, such as a backup from before a big update. When you're at your plan's backup limit, scheduled and [automatic backups](./index.md#scheduled-backups) replace the oldest backup that isn't protected, so protected backups are never replaced.

Protected backups still count toward your plan's backup limit.

## Protect a backup

1. Open the [Fragnet dashboard](VAR::PANEL_URL), go to **My servers** and select your server.
2. Open the **Backups** tab.
3. Open the ⋯ menu next to the backup and select **Protect from deletion**.

The backup now shows the **Protected** tag, and **Delete** disappears from its menu.

You can also protect a backup as you make it: tick **Protect this backup from deletion** in the **Create backup** dialog.

<!-- screenshot: backup-menu-protect.png | Backups tab: a backup row tagged Protected with its ⋯ menu open, showing Restore, Download and Remove protection (no Delete) -->

## Remove the protection

1. On the **Backups** tab, open the ⋯ menu next to the protected backup.
2. Select **Remove protection**.

The **Protected** tag goes away. The backup can now be deleted, and a scheduled backup can replace it when you're at the limit.

:::tip
If every one of your backups is protected and you're at the limit, a scheduled backup has nothing to replace. Its run fails with "Backup limit reached". Remove the protection from a backup you no longer need, or delete one.
:::
