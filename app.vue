<template>
  <div>
    <div>
      <pre>{{ data }}</pre>
    </div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch("/api/hello");
</script>
