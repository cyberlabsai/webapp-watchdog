<template>
  <q-page>
    <div class="container column wrap justify-center">
      <div class="row justify-center">
        <div class="input q-mt-xl">
          <q-input rounded outlined v-model="hashtag" label="Hashtag" width="200px"/>
        </div>
      </div>
    </div>
  </q-page>
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
  data: () => ({
    hashtag: ''
  }),
  created () {
    //  document.addEventListener('keyup', event => this.method(event))
  },
  mounted () {},
  updated () {},
  beforeDestroy () {
    //  document.removeEventListener('keyup', event => this.method(event))
  },
  destroyed () {},
  components: {
  },
  computed: {
    //   ...mapGetters([])
  },
  methods: {
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

<style scoped>
.container {
  width: 100%;
}
.input {
  width: 400px;
}
</style>
