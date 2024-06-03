import { Injectable } from '@nestjs/common';
import { Client } from '@planetscale/database';
import { drizzle } from 'drizzle-orm/planetscale-serverless';
import { DrizzlePlanetScaleConfig } from './drizzle.interface';

@Injectable()
export class DrizzlePlanetScaleService {
  public async getDrizzle(options: DrizzlePlanetScaleConfig) {
    console.log('Connecting to the database');
    console.log(options);
    const client = new Client({
      ...options?.planetscale.config,
    });
    return drizzle(client, options?.config);
  }
}
