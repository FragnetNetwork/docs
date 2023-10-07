---
title: Creating a schedule
keywords: ['schedules', 'fragnet scheduled tasks', 'schedule tasks', 'scheduled tasks', 'scheduled backups', 'scheduled restarts', 'scheduled wipes']
---

Start by heading over to your server's **Schedules** tab. Here, you can create a new schedule by clicking the **Create Schedule** button.

You now have 2 ways to create a schedule, an **Easy Mode** and an **Advanced Mode**.

### Easy Mode

The easy mode allows you to create a schedule by selecting a pre-defined intervals. You can choose from the following options:

- **Every minute**: Runs the task every minute.
- **Every 5 minutes**: Runs the task every 5 minutes.
- **Every 15 minutes**: Runs the task every 15 minutes.
- **Every 30 minutes**: Runs the task every 30 minutes.
- **Every hour**: Runs the task every hour.
- **Every day**: Runs the task every day.
- **Every week**: Runs the task every week.
- **Every month**: Runs the task every month.
- **Every year**: Runs the task every year.

If you would like to set more specific intervals, you can select "No Preset" and configure the minutes, hours, days, months and days of the week manually.


### Advanced Mode

In the advanced mode you will find 5 different fileds, "Minute", "Hour", "Day of Month", "Month", and "Day of Week". These fields based on the [cron](https://crontab.guru/) format, and are used to specify when the schedule should run.

Here are some examples to get you started:

| Description | Minute | Hour | Day of Month | Month | Day of Week |
| ----------- | ------ | ---- | ------------ | ----- | ----------- |
| Run every minute | `*` | `*` | `*` | `*` | `*` |
| Run every 5 minutes | `*/5` | `*` | `*` | `*` | `*` |
| Run every hour at 5 minutes past the hour | `5` | `*` | `*` | `*` | `*` |
| Run every day at 5 minutes past midnight | `5` | `0` | `*` | `*` | `*` |
| Run at specific hours (every 6 hours) | `0` | `0,6,12,18` | `*` | `*` | `*` |
| Run once a day | `0` | `0` | `*` | `*` | `*` |
| Run once a week | `0` | `0` | `*` | `*` | `0` |
| Run once every Monday | `0` | `0` | `*` | `*` | `MON` |
| Run once a month | `0` | `0` | `1` | `*` | `*` |

:::info
You can use the [crontab.guru](https://crontab.guru/) website to generate cron expressions.
:::