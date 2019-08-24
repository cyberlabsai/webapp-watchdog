<template lang="pug">
img.gauge(
  :class="takeClassGauce",
  :style="takeAngle",
  src="../../assets/gauge.svg"
)
</template>

<script>
export default {
  props: {
    angle: {
      type: Number,
      default: () => 0
    }
  },
  mounted () {
    return this.doChangeAnimation(this.angle)
  },
  computed: {
    takeClassGauce () {
      if (this.angle < 165) {
        return 'gauge--standby'
      } else if (this.angle >= 165) {
        return 'gauge--freak'
      }

      return 'gauge--standby'
    },
    takeAngle () {
      return {
        transform: `rotate(${this.angle}deg)`
      }
    }
  },
  methods: {
    doChangeAnimation (angle) {
      const root = document.querySelector(':root')
      root.style.setProperty('--startDeg', `${angle}deg`)
      root.style.setProperty('--endDeg', `${angle + 5}deg`)
    }
  },
  watch: {
    angle (change) {
      return this.doChangeAnimation(change)
    }
  }
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

keyframesRotation(name, startDeg, endDeg)
  @keyframes name
    0%
      transform: rotate(startDeg)

    50%
      transform: rotate(endDeg)

    100%
      transform: rotate(startDeg)

keyframesRotation(standby, var(--startDeg), var(--endDeg))
keyframesRotation(freak, 165deg, 176deg)

.gauge
  transition-timing-function: cubic-bezier(.77,1.5,.175,1)
  transition-duration: .4s
  transition-property: all
  transform-origin: 68px 18px

  &--standby
    animation(standby, 2s, cubic-bezier(9,.175), 0, infinite, normal, running)

  &--freak
    animation(freak, 0.1s, cubic-bezier(9,.175), 0, infinite, normal, running)
</style>
