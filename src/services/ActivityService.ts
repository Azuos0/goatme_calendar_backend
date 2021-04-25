import { Activity, CalendarActivity, CalendarEvent } from "../models/Activity";
import { Brackets, getRepository, Repository } from 'typeorm';
import { getDatesInsideInterval, getSameWeekDayDateFromMonth } from "../utils/dateHelper";

export class ActivityService {

  private respository: Repository<Activity>

  constructor() {
    this.respository = getRepository(Activity);
  }

  async find(interval: string[]): Promise<CalendarEvent[]> {
    let activities = await this.respository
      .createQueryBuilder('activity')
      .where(new Brackets(qb => {
        qb.where('activity.start_date >= :firstDay', { firstDay: interval[0] })
          .andWhere('activity.start_date <= :lastDay', { lastDay: interval[1] })
      }))
      .orWhere(new Brackets(qb => {
        qb.where('activity.end_date >= :firstDate', { firstDate: interval[0] })
          .andWhere('activity.end_date <= :lastDate', { lastDate: interval[1] })
      }))
      .orWhere(new Brackets(qb => {
        qb.where('activity.start_date <= :test1', { test1: interval[0] })
          .andWhere('activity.end_date >= :test2', { test2: interval[1] })
      }))
      .getMany();

    const activitiesWithIntervalDates = this.getActivitiesDatesInsideInterval(activities, interval[0], interval[1]);
    return this.addRecurringActivitiesForCalendar(activitiesWithIntervalDates);
  }

  async addActivity(activity: Omit<Activity, "id">): Promise<Activity> {
    return await this.respository.save(activity);
  }

  private getActivitiesDatesInsideInterval(activities: Activity[], startDateString: string, endDateString: string) {
    return activities.map(activity => {
      const startDateArray = startDateString.split('-')
      const endDateArray = endDateString.split('-')
      let monthDays = getSameWeekDayDateFromMonth(
        Number(startDateArray[1]),
        Number(startDateArray[0]),
        activity.weekday);

      //Month inside start and end dates are different
      if (startDateArray[1] !== endDateArray[1]) {
        monthDays = [...monthDays, ...getSameWeekDayDateFromMonth(
          Number(endDateArray[1]),
          Number(endDateArray[0]),
          activity.weekday)]
      }

      const calendarDates = getDatesInsideInterval(activity.start_date, activity.end_date, monthDays);

      return { ...activity, calendarDates } as CalendarActivity;
    });
  }

  private addRecurringActivitiesForCalendar(activities: CalendarActivity[]): CalendarEvent[] {
    let events: CalendarEvent[] = []

    activities.forEach(activity => {
      const calendarEvent = activity.calendarDates.map(date => {
        return {
          id_ref: activity.id,
          start: `${date} ${activity.start_time}`,
          end: `${date} ${activity.end_time}`,
          title: activity.name
        };
      });

      events = [...events, ...calendarEvent];
    })
    return events;
  }
}