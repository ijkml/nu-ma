export default defineNuxtConfig({
  modules: ['../src/module'],
  umami: {
    // host: 'https://savory.vercel.app/',
    // id: '84cc2d28-8689-4df0-b575-2202e34a75aa',
    autoTrack: true,
    version: 2,
    useDirective: true,
    debug: true,
  },
  devtools: { enabled: true },
});
