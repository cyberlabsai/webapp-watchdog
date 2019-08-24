<template>
  <div id="q-app">
    <q-layout>
      <q-page-container>
        <router-view />
      </q-page-container>
      <CyberLoading
        :active="getLoadingStatus"
        :scale="1.3"
        z-index="99"
        left="-80px"
        top="0px"
        height="100%"
        width="calc(100% + 80px)"
        backgroundColor="rgba(255, 255, 255, 0.8)"
        stroke="#000000"
      />
    </q-layout>
  </div>
</template>

<script>

import {
  mapGetters
} from 'vuex'

import {
  CyberLoading
} from './components/atoms'

export default {
  name: 'App',
  components: {
    CyberLoading
  },
  computed: {
    ...mapGetters('loading', [
      'getLoadingStatus'
    ])
  }
}
</script>

<style>
:root {
  --startDeg: 0deg;
  --endDeg: 5deg;
}

html {
  /* position: absolute; */
  transform: scale(.7) translateY(-155px);
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
