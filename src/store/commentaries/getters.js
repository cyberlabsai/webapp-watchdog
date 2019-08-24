export const getters = {
  getCommentaries: state => state.commentaries.length,
  getToxicCommentaries: state => state.commentaries.filter(elm => elm.toxic !== '0')
}

export default getters
