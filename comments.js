module.exports = {
    getComments(req, res) {
       req.postId=int(req.params.postId)
       res.send(200,(req.posts[postId].comments))
    }, 
    addComment(req, res) {
      req.postId=int(req.params.postId)
    req.commentId=req.posts[req.postld].comments.length
    req.posts[req.postId].comments[req.commentId]=req.body
     
     res.send(201,'comment added')
    },
    updateComment(req, res) {
      
      postId=int(req.params.postId)
      commentId=int(req.params.commentId)
      req.posts[postId].comments[commentId]=req.body
    },
    removeComment(req, res){
      postId=int(req.params.postId)
      commentId=int(req.params.commentId)
      Request.posts[postId].comments.splice(commentId,1)
    }  
  }
  