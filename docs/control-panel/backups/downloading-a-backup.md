---
title: Downloading a backup
keywords: ['download backup', 'download backups', 'download server backup', 'download game server backup', 'backup archive', 'tar.gz', 'extract backup', 'restore single file']
---

You can download any finished backup to keep a copy on your own computer or to get back a single file.

1. Open the [Fragnet dashboard](VAR::PANEL_URL), go to **My servers** and select your server.
2. Open the **Backups** tab.
3. Open the ⋯ menu next to the backup and select **Download**.

Your browser starts the download. If it doesn't start, select **Download** again.

<!-- screenshot: backup-menu-download.png | Backups tab: the ⋯ menu of a finished backup open, showing Restore, Download, Protect from deletion and Delete, with Download highlighted -->

**Download** only appears once a backup has finished. Backups tagged **In progress** or **Failed** can't be downloaded.

## Opening the archive

The download is a compressed `.tar.gz` archive of your server's files.

- **Windows**: open it with an archive manager such as [7-Zip](https://www.7-zip.org/).
- **macOS and Linux**: double-click it, or run `tar -xzf` followed by the file name in a terminal.

## Getting back a single file

To recover only some files instead of [restoring the whole backup](./restoring-a-backup.md):

1. Download the backup and extract it on your computer.
2. Find the files you need.
3. Upload them to your server on the **Files** tab, or with an SFTP client for large files.
