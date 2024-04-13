<script setup lang="ts">
import { useHead } from '#imports';

const title = 'Nuxt Umami PG';

useHead({ title });
</script>

<template>
  <Heading :title="title" />
</template>
