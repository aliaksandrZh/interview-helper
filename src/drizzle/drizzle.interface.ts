import { Config } from '@planetscale/database';
import { DrizzleConfig } from 'drizzle-orm';
import * as schema from './schemas';
import { PlanetScaleDatabase } from 'drizzle-orm/planetscale-serverless';

export interface DrizzlePlanetScaleConfig {
  planetscale: {
    config: Config;
  };
  config?: DrizzleConfig<any> | undefined;
}
export type Database = PlanetScaleDatabase<typeof schema>;
