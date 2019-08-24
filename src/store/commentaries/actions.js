import http from '../../requester/commentaries'

const actions = {
  setCommentaries: ({ commit }, payload) => {
    return http.fetch.fetchCommentaries().then((response) => {
      commit('saveCommentaries', response)
    })
  }
}

export default actions
