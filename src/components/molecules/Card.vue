<template lang="pug">
include ../atoms/card.pug

.card
  +card('{{ message.platform || "twitter" }}', '{{ message.user || "José" }}')
  .card__content {{ message.content || 'Watch Dog'}}
</template>

<script>
// import {
//   mapGetters,
//   mapActions
// } from 'vuex'

export default {
  props: {
    message: {
      type: Object,
      required: false,
      default () {
        return {}
      }
    }
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
