<template lang="pug">
q-page
  .container.column.no-wrap.justify-center
    .logo
      img.dog(
        src="../../assets/watch-dog-dog.svg"
      )
      img.letter(
        src="../../assets/watch-dog-letter.svg"
      )

    .giger.row.justify-center.items-end
      .content.row.content-between(
        v-if="getToxicCommentaries.length"
      )
        .content__arrows.row.flex-center
          img(
            src="../../assets/arrow-up.svg"
            @click="doDivScroll('top')"
          )

        .content__items(
          ref="commentaries"
        )
          Card.dont-select(
            v-for="(commentary, index) in getToxicCommentaries",
            :commentary="commentary"
            :key="index"
          )

        .content__arrows.row.flex-center
          img(
            src="../../assets/arrow-down.svg",
            @click="doDivScroll('bottom')"
          )

      .gauge
        Gauge(:angle="getToxicCommentaries.length")

      .radiation
        img(src="../../assets/radiation.svg")

      .radiation.radiation--animation
        img(src="../../assets/radiation.svg")

      RadiatorDetector(
        :occurrenceNumber="getToxicCommentaries.length",
        :total="takeCommentaries",
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
    this.setLoading(true)
    this.setCommentaries().then(() => this.setLoading(false))
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
      'getCommentaries',
      'getToxicCommentaries'
    ]),
    takeCommentaries () {
      if (!this.getCommentaries) {
        return 0
      }
      return this.getCommentaries
    }
  },
  methods: {
    ...mapActions('commentaries', [
      'setCommentaries'
    ]),
    ...mapActions('loading', [
      'setLoading'
    ]),
    doDivScroll (scrollDirection) {
      // this.setLoading(true)
      const container = this.$refs.commentaries
      let scrollPosition = container.scrollTop || 0

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
animation(nameAnimation, durationAnimation, functionAnimation, delayAnimation, repeatAnimation, directionAnimation, stateAnimation)
  animation-name: nameAnimation
  animation-duration: durationAnimation
  animation-timing-function: functionAnimation
  animation-delay: delayAnimation
  animation-iteration-count: repeatAnimation
  animation-direction: directionAnimation
  animation-play-state: stateAnimation

@keyframes simple-pulse
  0%
    transform: scale(1)
    opacity: 1

  50%
    transform: scale(2)
    opacity: 0

  100%
    transform: scale(1)
    opacity: 0

@keyframes change-opacity
  0%
    opacity: 0.5

  50%
    opacity: 0.1

  100%
    opacity: 0.5

.logo
  animation(change-opacity, 9s, cubic-bezier(9,.175), 0, infinite, normal, running)
  position: absolute
  height: 100%
  width: 100%
  top: 0
  left: 0
  display: flex
  flex-direction: row
  flex-wrap: nowrap
  justify-content: space-between
  align-content: center
  align-items: center
  transition-timing-function: cubic-bezier(.77,1.5,.175,1)
  transition-duration: .4s
  transition-property: all

  > img
    width: 20%

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
    min-height: 390px
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

.radiation
  top: 355px
  margin-left: 225px
  position: absolute
  z-index: 10

  &--animation
    animation(simple-pulse, 2s, cubic-bezier(9,.175), 0, infinite, normal, running)

.giger
  /* transform: scale(.7) */
  height: 100%
  width: 100%
  position: relative

.dont-select
  user-select: none
</style>
