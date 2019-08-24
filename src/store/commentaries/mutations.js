export const mutations = {
  saveCommentaries: (state, commentaries) => {
    state.commentaries = [...commentaries]
  }
}

export default mutations
