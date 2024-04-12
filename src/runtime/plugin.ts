import { umConfig } from './internal/utils';
import { directive } from './directive';
import { umTrackView } from './tracker';
import { defineNuxtPlugin } from '#imports';

export default defineNuxtPlugin({
  name: 'umami-tracker',
  async setup(nuxtApp) {
    const { useDirective } = umConfig.value;

    if (useDirective)
      nuxtApp.vueApp.directive('umami', directive);
  },
  hooks: {
    'page:finish': function () {
      const { autoTrack } = umConfig.value;
      if (!autoTrack)
        return;

      setTimeout(umTrackView, 300);

      // TODO: fix
      // `useHead()` updates the DOM's head using this hook
      // currently, there is no hook we can watch, so we need
      // to wait for the update to finish, to capture title
    },
  },
});
