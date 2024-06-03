import { ConfigurableModuleBuilder } from '@nestjs/common';
import { DrizzlePlanetScaleConfig } from './drizzle.interface';

export const DrizzleToken = 'Drizzle Token';

export const {
  ConfigurableModuleClass,
  MODULE_OPTIONS_TOKEN,
  OPTIONS_TYPE,
  ASYNC_OPTIONS_TYPE,
} = new ConfigurableModuleBuilder<DrizzlePlanetScaleConfig>()
  .setExtras(
    {
      tag: DrizzleToken,
    },
    (definition, extras) => ({
      ...definition,
      tag: extras.tag,
    }),
  )
  .build();
