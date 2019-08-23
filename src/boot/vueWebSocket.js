import VueWebsocket from 'vue-websocket'
const URL = 'www.google.com'

export default ({ app, Vue }) => {
  Vue.use(
    VueWebsocket,
    URL,
    {
      autoConnect: true,
      reconnection: true
    }
  )
}
