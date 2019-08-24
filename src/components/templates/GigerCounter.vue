<template lang="pug">
q-page
  .container.column.wrap.justify-center
    .row.justify-center
      .input.q-mt-xl
        Gauge
        q-input(rounded, outlined, v-model='hashtag', label='Hashtag')
        Card
</template>

<script>

import {
  mapGetters,
  mapActions
} from 'vuex'

import {
  Gauge
} from '../atoms'

import {
  Card
} from '../molecules'

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
  data: () => ({
    hashtag: ''
  }),
  created () {
    //  document.addEventListener('keyup', event => this.method(event))
  },
  mounted () {
    this.setCommentaries(['fooo', 'fooo', 'fooo'])
  },
  updated () {},
  beforeDestroy () {
    //  document.removeEventListener('keyup', event => this.method(event))
  },
  destroyed () {},
  components: {
    Gauge,
    Card
  },
  computed: {
    ...mapGetters('commentaries', [
      'getCommentaries'
    ])
  },
  methods: {
    ...mapActions('commentaries', [
      'setCommentaries'
    ]),
    doGetCommentaries () {
      this.$socket.emit('hashtag', this.hashtag)
    }
  },
  socket: {
    events: {
      connect () {
        return this.doGetCommentaries()
      }
    }
  },
  filters: {},
  watch: {}
}
</script>

<style lang="stylus" scoped>
.container
  width: 100%
.input
  width: 400px
</style>
