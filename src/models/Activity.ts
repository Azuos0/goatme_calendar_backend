import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity } from 'typeorm';
import { ObjectType, Field, ID, Int, InputType } from 'type-graphql';

@Entity('activities')
@ObjectType()
export class Activity extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  readonly id: number;

  @Column()
  @Field(() => String)
  name: string;

  @Column({ nullable: true })
  @Field(() => String)
  description: string;

  @Column()
  @Field()
  start_time: string;

  @Column()
  @Field()
  end_time: string;

  @Column()
  @Field()
  start_date: Date;

  @Column()
  @Field()
  end_date: Date;

  @Column()
  @Field(() => Int)
  weekday: number

  @CreateDateColumn()
  @Field()
  created_at: Date
}

@InputType()
export class NewActivity {
  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  description: string;

  @Field()
  start_time: string;

  @Field()
  end_time: string;

  @Field()
  start_date: Date;

  @Field()
  end_date: Date;

  @Field(() => Int)
  weekday: number
}

@ObjectType()
export class CalendarActivity extends Activity {
  @Field(type => [String])
  calendarDates: string[]
}

@ObjectType()
export class CalendarEvent {
  @Field()
  id_ref: number;

  @Field()
  start: string;

  @Field()
  end: string;

  @Field()
  title: string;
}