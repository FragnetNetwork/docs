---
title: Deleting a backup
keywords: ['delete backup', 'delete backups', 'remove backup', 'delete server backup', 'free backup slot', 'backup limit', 'delete protected backup']
---

Delete backups you no longer need to make room for new ones within your plan's backup limit.

:::danger
Deleting a backup is permanent. A deleted backup can't be recovered.
:::

1. Open the [Fragnet dashboard](VAR::PANEL_URL), go to **My servers** and select your server.
2. Open the **Backups** tab.
3. Open the ⋯ menu next to the backup and select **Delete**.
4. In **Delete backup?**, select **Delete**.

<!-- screenshot: backup-delete-dialog.png | Backups tab > Delete on an unprotected backup: the "Delete backup?" dialog showing the backup name in the warning text and the Cancel and Delete buttons -->

The backup disappears from the list and the **Backup storage** card shows one fewer backup.

## Deleting a protected backup

Backups tagged **Protected** have no **Delete** option. To delete one:

1. Open its ⋯ menu and select **Remove protection**.
2. Open the menu again and select **Delete**, then confirm.

See [Protecting a backup](./locking-a-backup.md).
