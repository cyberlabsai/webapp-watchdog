import http from '../../requester/commentaries'

const actions = {
  setCommentaries: ({ commit }, payload) => {
    console.log(http)
    commit('saveCommentaries', payload)
  }
}

export default actions
