<template lang="pug">
.cyber-loading.row.flex-center(
  v-if="enable",
  :class=`{
    'cyber-loading--enable': visible,
    'cyber-loading--disable': !visible,
  }`
  :style="takeStyles"
)
  svg(
    width="300",
    height="300",
    viewBox="0 0 150 150",
    :style="takeScale"
  )
    circle.outer(
      cx="75",
      cy="75",
      r="40",
      :style="takeStroke"
    )
    circle.center(
      cx="75",
      cy="75",
      r="30",
      :style="takeStroke"
    )
    circle.inner(
      cx="75",
      cy="75",
      r="20",
      :style="takeStroke"
    )

  h2.message(
    v-if="message",
    v-html="message",
    :style="takeMessageColor"
  )
</template>

<script>
// import {
//   mapGetters,
//   mapActions
// } from 'vuex'

export default {
  props: {
    active: {
      type: Boolean,
      required: false,
      default () {
        return false
      }
    },
    message: {
      type: String,
      required: false,
      default () {
        return ''
      }
    },
    width: {
      type: [String, null],
      required: false,
      default () {
        return null
      }
    },
    height: {
      type: [String, null],
      required: false,
      default () {
        return null
      }
    },
    scale: {
      type: Number,
      required: false,
      default () {
        return 1
      }
    },
    zIndex: {
      type: [String, null],
      required: false,
      default () {
        return null
      }
    },
    backgroundColor: {
      type: String,
      required: false,
      default () {
        return '#000000'
      }
    },
    textColor: {
      type: String,
      required: false,
      default () {
        return '#000000'
      }
    },
    stroke: {
      type: String,
      required: false,
      default () {
        return '#000000'
      }
    },
    top: {
      type: [String, null],
      required: false,
      default () {
        return null
      }
    },
    left: {
      type: [String, null],
      required: false,
      default () {
        return null
      }
    }
  },
  data: () => ({
    enable: false,
    visible: false,
    newTop: 0
  }),
  created () {},
  mounted () {
    this.newTop = this.top
    return this.doToggleActive(this.active)
  },
  updated () {},
  destroyed () {},
  components: {},
  computed: {
  //   ...mapGetters([])
    takeScale () {
      return {
        transform: `scale(${this.scale})`
      }
    },
    takeStyles () {
      return {
        width: this.width,
        height: this.height,
        zIndex: this.zIndex,
        backgroundColor: this.backgroundColor,
        top: this.newTop,
        left: this.left
      }
    },
    takeMessageColor () {
      return {
        color: this.textColor
      }
    },
    takeStroke () {
      return {
        stroke: this.stroke
      }
    }
  },
  methods: {
  //   ...mapActions([])
    doToggleActive (status) {
      if (status) {
        document.querySelector('html').style.overflow = 'hidden'
        window.scrollTo(window.pageXOffset, window.pageYOffset)
        this.newTop = `${window.pageYOffset || document.documentElement.scrollTop}px`
        this.enable = true
        setTimeout(() => {
          this.visible = true
        }, 300)
      } else {
        document.querySelector('html').style.overflow = 'auto'
        this.visible = false
        setTimeout(() => {
          this.enable = false
        }, 300)
      }
    }
  },
  filters: {},
  watch: {
    active (change) {
      return this.doToggleActive(change)
    }
  }
}
</script>

<style lang="stylus">

.cyber-loading
  align-items: center
  transition: .3s ease-in-out
  position: absolute

  &--enable
    transition-delay: .2s
    opacity: 1

  &--disable
    opacity: 0

  > .message
    color: #888
    background-color: transparent !important
    font-size: 14px
    font-weight: 900
    text-transform: uppercase
    text-align: center

  > svg
    > circle
      stroke: white
      fill: none
      transform-origin: center
      animation-iteration-count: infinite
      animation-timing-function: ease-in-out

    > .outer
      stroke-dasharray: 220
      transform: rotate(-25deg)
      stroke-width: 4
      animation-name: outerRotation
      animation-duration: 2s

    > .center
      stroke-dasharray: 160
      transform: rotate(210deg)
      stroke-width: 3
      animation-name: centerRotation
      animation-duration: 1.5s

    > .inner
      stroke-dasharray: 110
      transform: rotate(15deg)
      stroke-width: 6
      animation-name: innerRotation
      animation-duration: 1s

@keyframes outerRotation
  0%
    transform: rotate(335deg)
  100%
    transform: rotate(695deg)

@keyframes centerRotation
  0%
    transform: rotate(210deg)
  100%
    transform: rotate(570deg)

@keyframes innerRotation
  0%
    transform: rotate(15deg)
  100%
    transform: rotate(375deg)

</style>
