<template lang="pug">
include ../atoms/radiatorDetector
.radiator-detector.row.flex-center
  +radiatorDetector('{{ occurrenceNumber }}', '{{ takeLabel }}', 'total: {{ total }}', '{{ status }}')
</template>

<script>
// import {
//   mapGetters,
//   mapActions
// } from 'vuex'

export default {
  props: {
    occurrenceNumber: {
      type: Number,
      required: false,
      default () {
        return 0
      }
    },
    total: {
      type: Number,
      required: false,
      default () {
        return 0
      }
    },
    status: {
      type: String,
      required: false,
      default () {
        return ''
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
    takeLabel () {
      return this.occurrenceNumber === 1 ? 'ocorrência' : 'ocorrências'
    }
  },
  methods: {
    //   ...mapActions([])
  },
  filters: {},
  watch: {}
}
</script>

<style lang="sass">
</style>
