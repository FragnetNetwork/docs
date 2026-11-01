---
title: Restoring a backup
keywords: ['restore backup', 'restore backups', 'restore server backup', 'roll back server', 'rollback', 'restore game server backup', 'delete all files before restoring']
---

Restoring a backup puts your server's files back the way they were when the backup was made.

:::danger
The server stops while the backup is restored, and its files are replaced with the ones in the backup. Any changes made since the backup was created are lost. If you might want the current state later, [create a backup](./creating-a-backup.md) of it first.
:::

1. Open the [Fragnet dashboard](VAR::PANEL_URL), go to **My servers** and select your server.
2. Open the **Backups** tab.
3. Open the ⋯ menu next to the backup and select **Restore**.
4. In **Restore this backup?**, choose whether to tick **Delete all files before restoring**:
   - **Ticked**: every file on the server is deleted first, so the server matches the backup exactly. Files that aren't in the backup are removed.
   - **Not ticked**: the files in the backup replace the current ones, and files that aren't in the backup stay on the server.
5. Select **Restore**.

<!-- screenshot: backup-restore-dialog.png | Backups tab > Restore on a backup: the "Restore this backup?" dialog with its warning text, the "Delete all files before restoring" checkbox and hint, and the Cancel and Restore buttons -->

When the restore has finished, start the server again with the power button at the top of the page if it isn't running. The **Activity** tab shows "Started restoring a backup", then "Finished restoring a backup", or "A backup restore failed" if something went wrong.

:::tip
To get back only some files, [download the backup](./downloading-a-backup.md#getting-back-a-single-file) and upload just the files you need.
:::

Restoring only changes files. Settings you change in the dashboard rather than in a file, such as the startup settings under **Configuration** → **General**, stay as they are.
