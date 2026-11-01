---
title: Editing a schedule
keywords: ['edit schedule', 'edit scheduled task', 'edit task', 'change schedule time', 'pause schedule', 'delete schedule', 'cron schedule', 'convert cron', 'edit scheduled backups', 'edit scheduled restarts']
---

You change a schedule's name, tasks, timing and options in the **Edit schedule** dialog. Tasks are edited there too, in the **Tasks** step.

## Open the editor

1. Open the [Fragnet dashboard](VAR::PANEL_URL), go to **My servers** and select your server.
2. On the **Overview** tab, in the **Schedules** card, select **View all**.
3. Select the schedule's name, or open its ⋯ menu and select **Edit**.

You can also select a schedule's name straight from the **Schedules** card.

The editor has the same five steps as the **New schedule** wizard: **Start**, **Tasks**, **When**, **Options** and **Review**. When you're editing, you can jump to any step from the step bar at the top (on wider screens), and a **Save** button is available on every step once everything checks out.

Nothing changes until you select **Save**. If you close the dialog first, your changes are discarded.

<!-- screenshot: schedule-edit-tasks.png | Overview > Schedules > select a schedule: Edit schedule dialog on the Tasks step, showing the step bar with all steps reachable, two task cards, and the Save and Next buttons at the bottom -->

## Change the name

Open the **Start** step and edit **Name**. Templates aren't shown when you edit a schedule.

## Edit tasks

Open the **Tasks** step. You can:

- change a task's type or fields, such as the command, the power action or the cleanup patterns,
- change a task's **Wait** … **seconds after the previous task** or **Continue if this task fails**,
- select **Add task** to add a task at the end (up to 10),
- select the **×** on a card to remove that task.

Tasks can't be moved. To change the order, change the type and fields of the existing cards. For what each task type does, see [Schedule tasks](./creating-a-task.md).

## Change when it runs

Open the **When** step and change **Schedule date**, **Schedule time**, **Repeat this schedule** or **Repeat every**. See [Step 3: When](./creating-a-schedule.md#step-3-when) for what each field does.

For a repeating schedule whose start date has already passed, the editor shows the next upcoming run as the start. That way, saving doesn't run the schedule straight away.

## Change options

Open the **Options** step to turn **Enabled**, **Only run while the server is online** and, where offered, **Only if no players are online** and the failure alerts on or off. See [Step 4: Options](./creating-a-schedule.md#step-4-options).

## Pause or resume a schedule

To stop a schedule from running automatically without deleting it, turn off its **On** switch in the schedules list, or turn off **Enabled** in the **Options** step. The schedule shows **Paused**. You can still run it with **Run now**.

When you turn a repeating schedule back on, it carries on from its next regular time. Runs it missed while paused aren't caught up.

## Delete a schedule

1. In the schedules list, open the schedule's ⋯ menu and select **Delete**.
2. In **Delete schedule?**, select **Delete**.

The schedule and its tasks are deleted. This can't be undone.

## Older cron schedules

Schedules made before the dashboard used the cron format, with times in UTC. They keep running unchanged until you edit them. When you open one, the editor shows: "This schedule still uses the old cron format. Saving converts it to a start time and a repeat interval, so check both in the When step."

When you save, the dashboard sets the start to the schedule's next run (shown in your time zone) and picks the closest repeat:

| Old cron timing | Becomes |
| --------------- | ------- |
| Every N minutes | Every N **Minutes** (at least 5) |
| Every hour, or every N hours | Every 1 or N **Hours** |
| Once a week on one day | Every 1 **Weeks** |
| Once a day | Every 1 **Days** |
| Anything else (several set hours, several weekdays, a day of the month, a month) | Every 1 **Days** |

Cron patterns in the last row can't be expressed as a single repeat. Check the **When** step before you save, and split the schedule into several schedules if you need to. For example, make one weekly schedule for each weekday it should run on.

Only saving from the editor converts a schedule. Turning its **On** switch on or off doesn't.

## If saving fails

If an error appears when you select **Save**, fix anything highlighted and select **Save** again. The dashboard picks up where it stopped, so it doesn't create duplicate schedules or tasks.
