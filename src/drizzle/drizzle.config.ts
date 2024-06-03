import { DrizzlePlanetScaleConfig } from './drizzle.interface';
import * as schema from './schemas';

export class DBConfigService {
  create = (): DrizzlePlanetScaleConfig => {
    return {
      planetscale: {
        config: {
          host: 'mysql',
          username: 'root',
          password: 'rootpassword',
        },
      },
      config: { schema: { ...schema } },
    };
  };
}
