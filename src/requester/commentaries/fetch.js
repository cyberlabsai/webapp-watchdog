import http from 'src/requester'

export const fetchCommentaries = () => {
  return http.get('/termometer')
    .then((response) => {
      console.log(response.data)
      return response.data
    })
}
