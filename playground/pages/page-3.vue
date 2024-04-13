<script setup lang="ts">
import { computed, useHead, useRoute } from '#imports';

const route = useRoute();

const title = computed(() => {
  return route.path.slice(1, 2).toUpperCase() + route.path.slice(2).replace('-', ' ');
});

useHead({ title });
</script>

<template>
  <Heading :title="title" />
</template>
