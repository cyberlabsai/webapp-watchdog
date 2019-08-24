<template>
  <div id="q-app">
    <q-layout>
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
:root {
  --startDeg: 0deg;
  --endDeg: 5deg;
}

.card__content {
  width: 300px;
}
</style>
