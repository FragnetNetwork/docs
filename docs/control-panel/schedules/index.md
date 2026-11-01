---
title: Schedules
keywords: ['schedules', 'scheduled tasks', 'schedule tasks', 'scheduled backups', 'scheduled restarts', 'automatic restart', 'scheduled commands', 'fragnet dashboard schedules', 'server automation', 'run now']
---

Schedules run tasks on your server automatically. A task can send a console command, start, restart or stop the server, make a backup, or delete old files. You choose when a schedule first runs and how often it repeats, and its tasks run in order each time.

## Where to find schedules

1. Open the [Fragnet dashboard](VAR::PANEL_URL), go to **My servers** and select your server.
2. On the **Overview** tab, find the **Schedules** card. It lists your next three schedules, each with a **Run now** button.
3. Select **View all** to open the full list, or **New schedule** to create one.

You can also go straight to the list by adding `?view=schedules` to your server's page address. Select **Overview** at the top of the list to go back.

<!-- screenshot: schedules-overview-card.png | Server page, Overview tab: the Schedules card with two or three schedules, showing the count, "View all", "New schedule" and a "Run now" button on each row -->

:::info
You need the Owner, Admin or Service manager role on the account to see and change schedules. Schedules aren't available on every type of server (voice servers don't have them, for example).
:::

## The schedules list

The full list shows every schedule on the server. Schedules that run soonest are at the top and paused ones are at the bottom.

| Column | What it shows |
| ------ | ------------- |
| **Schedule** | The name, plus a short summary of what it does and when, such as "Restart the server · every day at 04:00". A **Paused** tag shows when the schedule is turned off. Select the name to edit the schedule. |
| **Next run** | How long until the next run, with the exact date and time below. Shows **Paused** if the schedule is off. |
| **Last run** | How the last run went ("Succeeded", "Failed" or "Skipped", and when), or **Never run**. A second line gives details, for example "Server restarted" or "Skipped: server is offline". |
| **On** | A switch that turns automatic runs on or off. |

At the end of each row are a **Run now** button and a ⋯ menu with **Edit**, **Run now** and **Delete**.

<!-- screenshot: schedules-list.png | Overview > Schedules view (?view=schedules): list with at least one active and one paused schedule, the column headers Schedule / Next run / Last run / On visible, and the ⋯ menu of one row open showing Edit, Run now, Delete -->

## Time zone

Schedule times use your browser's time zone. The editor's time field names it, for example **Schedule time (Europe/London)**, and the **Next run** and **Last run** times use the same zone.

If you open the dashboard on a device set to a different time zone, the times are shown in that zone instead. The moment the schedule runs doesn't change.

:::info Older schedules
Schedules made before the dashboard used a cron format and UTC times. They keep running as they are. When you edit and save one, it's converted to a start time and a repeat interval. See [Older cron schedules](./editing-a-schedule.md#older-cron-schedules).
:::

## Limits

- Up to **10 tasks** per schedule.
- The shortest repeat is **5 minutes**. The longest unit is weeks.
- Each task can wait **0 to 900 seconds** (15 minutes) after the previous one.
- Schedule names can be up to 191 characters.

## Scheduled backups

The **Scheduled backups** switch on the **Backups** tab is a shortcut: it creates a schedule named **Daily backup** that you'll then see in this list. See [Backups](../backups/index.md#scheduled-backups).

## In this section

- [Creating a schedule](./creating-a-schedule.md): the **New schedule** wizard step by step, with examples.
- [Schedule tasks](./creating-a-task.md): every task type and its options.
- [Editing a schedule](./editing-a-schedule.md): change tasks, timing and options, pause or delete a schedule, and convert older schedules.
- [Running a schedule](./running-a-schedule.md): run a schedule now, turn it on or off, and read the results.
