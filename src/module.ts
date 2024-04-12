import {
  addImports,
  addPlugin,
  createResolver,
  defineNuxtModule,
} from '@nuxt/kit';
import type { ModuleOptions } from './types';

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxima',
    configKey: 'umami',
  },

  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    if (!nuxt.options.appConfig.umamiLayer)
      nuxt.options.appConfig.umConfig = options;

    addPlugin(resolver.resolve('./runtime/plugin'));
    const fns = ['umTrackEvent', 'umTrackView'];

    fns.forEach(name =>
      addImports({ name, as: name, from: resolver.resolve('runtime/tracker') }),
    );
  },
});

export type { ModuleOptions };
