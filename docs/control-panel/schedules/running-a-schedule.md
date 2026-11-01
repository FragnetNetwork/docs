---
title: Running a schedule
keywords: ['run schedule', 'run now', 'run scheduled task', 'test schedule', 'schedule failed', 'schedule skipped', 'last run', 'schedule alerts', 'run scheduled backups', 'run scheduled restarts']
---

A schedule that's turned on runs by itself at the time shown under **Next run**. You can also run any schedule straight away, for example to test it.

## Run a schedule now

1. Open the [Fragnet dashboard](VAR::PANEL_URL), go to **My servers** and select your server.
2. On the **Overview** tab, find the schedule in the **Schedules** card, or select **View all** to see the full list.
3. Select **Run now** on the schedule's row. In the full list, **Run now** is also in the ⋯ menu.

The dashboard confirms that the schedule is running, and the button shows **Running…** until the run finishes. Its tasks run in order, with the waits you set.

**Run now** works on paused schedules too.

<!-- screenshot: schedule-run-now.png | Overview > Schedules view: one row with the Run now button showing "Running…" and the green confirmation line '"Nightly restart" is running now.' above the list -->

## Turn a schedule on or off

Use the **On** switch on the schedule's row in the full list. When it's off, the schedule shows **Paused** and only runs when you select **Run now**. See [Pause or resume a schedule](./editing-a-schedule.md#pause-or-resume-a-schedule).

## Check the result

The **Last run** column shows how the last run went and when:

- **Succeeded**, with what happened, for example "Server restarted", "Backup started", "2 commands sent" or how many files a cleanup deleted and the space it freed.
- **Skipped**, with the reason, for example "Skipped: server is offline", "Skipped: 3 players online" or "Skipped: player count unavailable".
- **Failed**, with the reason, for example "Server was offline", "Couldn't reach the server's node", "Backup limit reached", "Too many backups in a short time" or "Task 2 failed".
- **Never run**, if it hasn't run yet.

Skipped runs come from the **Only run while the server is online** and **Only if no players are online** options. A failed task stops the run unless that task has **Continue if this task fails** turned on.

Runs you start with **Run now**, and changes to schedules, also appear on the **Activity** tab, for example "Ran a schedule manually" or "Updated a schedule".

## Get told when a run fails

On servers that offer them, two options in the schedule's **Options** step send an alert when a run fails:

- **Email me when a run fails** emails your account email address. The email gives the schedule, the server, the reason and the time of the run in UTC.
- **Post failures to Discord** posts a short message with the schedule, the server and the reason to a Discord channel through a webhook.

See [Step 4: Options](./creating-a-schedule.md#step-4-options) to set them up.
