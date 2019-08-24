<template lang="pug">
q-page
  .container.column.no-wrap.justify-center
    Gauge(:angle="0")
    .container__giger-header.row.justify-center.no-wrap
    .giger.row.justify-center.items-end
      .card.column.justify-center
        .card__arrows.row.flex-center
          img(
            src="../../assets/arrow-up.svg"
          )
        .card__holder
          .card__items
            Card
            Card
            Card
        .card__arrows.row.flex-center
          img(
            src="../../assets/arrow-down.svg"
          )
      RadiatorDetector(
        :occurrenceNumber="takeCommentaries.length",
        :total="takeCommentaries.length",
        status="online"
      )
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
  Card,
  RadiatorDetector
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
    this.setCommentaries(['fooo', 'fooo', 'fooo', 'foo'])
  },
  updated () {},
  beforeDestroy () {
    //  document.removeEventListener('keyup', event => this.method(event))
  },
  destroyed () {},
  components: {
    Gauge,
    Card,
    RadiatorDetector
  },
  computed: {
    ...mapGetters('commentaries', [
      'getCommentaries'
    ]),
    takeCommentaries () {
      if (!this.getCommentaries) {
        return []
      }
      return this.getCommentaries
    }
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
.q-input-target, .q-input-shadow
  color red
.container
  width: 100%
  height: 100%
.input
  z-index: 10
  position: absolute
  width: 330px
  height: 30px !important
  top: 140px
  left: 440px
.card
  z-index: 10
  margin-left: -28px
  position: absolute
  width: 312px
  &__arrows
    margin-left: -30px
    width: 100%
  &__holder
    position: relative
    .holder
      &__items
        position: relative
        height: 200px
.giger
  height: 100%
  width: 100%
  position: relative
</style>
