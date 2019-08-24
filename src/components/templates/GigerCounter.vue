<template lang="pug">
q-page
  .container.column.no-wrap.justify-center
    .container__giger-header.row.justify-center.no-wrap
    .giger.row.justify-center.items-end
      .content.row.content-between
        .content__arrows.row.flex-center
          img(
            src="../../assets/arrow-up.svg"
            @click="doDivScroll('top')"
          )

        .content__items(
          ref="commentaries"
        )
          Card
          Card
          Card
          Card
          Card
          Card

        .content__arrows.row.flex-center
          img(
            src="../../assets/arrow-down.svg",
            @click="doDivScroll('bottom')"
          )

      .gauge
        Gauge(:angle="0")

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
    hashtag: '',
    scrollPosition: 0
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
    doDivScroll (scrollDirection) {
      const container = this.$refs.commentaries
      let scrollPosition = container.scrollTop || 0
      console.log(scrollPosition)

      if (scrollDirection === 'bottom') {
        scrollPosition = scrollPosition + 200

        // if (scrollPosition >= (container.firstElementChild.clientHeight * 0.9)) {
        //   scrollPosition = container.firstElementChild.clientHeight
        // }
      } else if (scrollDirection === 'top') {
        scrollPosition = scrollPosition - 200

        if (scrollPosition <= 0) {
          scrollPosition = 0
        }
      }
      this.scrollPosition = scrollPosition
      container.scrollTop = scrollPosition
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

.content
  z-index: 10
  left: calc(50% - 198px)
  position: absolute
  width: 312px
  height: 450px
  bottom: 40px

  &__arrows
    width: 100%
    cursor: pointer

  &__items
    position: relative
    overflow-x: hidden
    overflow-y: scroll
    height: 390px
    scrollbar-width: none
    scroll-behavior: smooth

    &::-webkit-scrollbar
      width: 0
      height: 0

.gauge
  position: absolute
  z-index: 10
  width: 90px;
  height: 35px;
  top: 128px;
  margin-left: -6px;
  transform: scale(1.2)

.giger
  /* transform: scale(.7) */
  height: 100%
  width: 100%
  position: relative
</style>
