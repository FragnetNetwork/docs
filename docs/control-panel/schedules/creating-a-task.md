---
title: Creating a task
keywords: ['schedules', 'fragnet scheduled tasks', 'schedule tasks', 'scheduled tasks', 'scheduled backups', 'scheduled restarts', 'scheduled wipes']
---

:::info
Each schedule has a limit of 8 tasks.
:::

Once you have created a schedule, you can add tasks to it. To do this, click on the schedule you just created and then click on the the **New Task** button.

## Task Actions

Each task can be one of the following actions:

- **Send command**: Runs a console command on your server.
- **Send power action**: Sends a power action to your server. This can be used to `start`, `stop`, `restart` or `terminate`(force-stop) your server.
- **Create backup**: Creates a backup of your server and does not require that you stop your server.

## Time Offset

The time offset allows you to delay the task by a certain amount of time. This can be useful if you want to run a sequence of tasks, but want to delay some of them.

:::info
If this is the first task in your schedule, the time offset will be ignored.
:::

## Continue on failure

If you enable this option, the schedule will continue to run even if the task fails. This can be useful if at random times the task fails, but you still want the schedule to continue.
