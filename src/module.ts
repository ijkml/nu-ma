import {
  addImports,
  addPlugin,
  createResolver,
  defineNuxtModule,
} from '@nuxt/kit';
import type { ModuleOptions } from './types';

export type { ModuleOptions };

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nu-ma',
    configKey: 'umami',
  },

  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    // check if it is layer
    // og-umami key, skip options
    // const isLayer = nuxt.options.appConfig.umamiLayer as (boolean | undefined);
    // if (!isLayer)

    nuxt.options.appConfig.umami = options;

    addPlugin(resolver.resolve('./runtime/plugin'));
    const fns = ['umTrackEvent', 'umTrackView'];

    fns.forEach(name =>
      addImports({ name, as: name, from: resolver.resolve('runtime/tracker') }),
    );
  },
});
