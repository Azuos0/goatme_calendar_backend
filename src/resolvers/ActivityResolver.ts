import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { Activity, CalendarActivity, CalendarEvent, NewActivity } from '../models/Activity'
import { ActivityService } from '../services/ActivityService';



@Resolver(Activity)
export class ActivityResolver {

  constructor(private activityService: ActivityService) {
    this.activityService = new ActivityService();
  }

  @Query(returns => [CalendarEvent], { name: 'activities' })
  async find(
    @Arg('dateInterval', type => [String]) dateInterval: string[],
  ) {
    return await this.activityService.find(dateInterval);
  }

  @Mutation(returns => Activity)
  async addActivity(@Arg('activity') activity: NewActivity) {
    return await this.activityService.addActivity(activity as Activity);
  }
}