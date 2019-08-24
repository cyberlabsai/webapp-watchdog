import http from 'src/requester'

export const fetchCommentaries = () => {
  return http.get('/foo')
    .then((response) => {
      console.log(response)
    })
}
