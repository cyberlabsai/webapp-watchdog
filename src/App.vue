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

html {
  /* position: absolute; */
  transform: scale(.8) translateY(-100px);
  overflow: hidden;
  /* display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: center;
  align-items: center; */
}

.card__content {
  width: 300px;
}
</style>
