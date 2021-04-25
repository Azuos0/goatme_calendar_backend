import { buildSchema } from 'type-graphql';
import { ActivityResolver } from './ActivityResolver';

export const schemafn = async () => await buildSchema({
  resolvers: [ActivityResolver]
})