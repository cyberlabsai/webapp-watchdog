<template lang="pug">
include ../atoms/card.pug

.card
  +card('twitter', 'José')
  .card__content lalalalala lalalalala lalalalala lalalalala lalalalala lalalalala lalalalala lalalalala lalalalala lalalalala'
</template>

<script>
// import {
//   mapGetters,
//   mapActions
// } from 'vuex'

export default {
  props: {
    //  prop: {
    //    type: String,
    //    required: false,
    //    validator (value) {
    //      return value
    //    },
    //    default () {
    //      return ''
    //    }
    //  }
  },
  data: () => ({}),
  created () {
    //  document.addEventListener('keyup', event => this.method(event))
  },
  mounted () {},
  updated () {},
  beforeDestroy () {
    //  document.removeEventListener('keyup', event => this.method(event))
  },
  destroyed () {},
  components: {},
  computed: {
    //   ...mapGetters([])
  },
  methods: {
    //   ...mapActions([])
  },
  filters: {},
  watch: {}
}
</script>

<style scoped>
.card {
  position: relative;
}

.card__content {
  position: absolute;
  overflow: hidden;
  width: 260px;
  height: 43px;
  bottom: 20px;
  left: 36px;
}
</style>
