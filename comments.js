module.exports = {
    getComments(req, res) {
       req.postId=int(req.params.postId)
       res.send(200,(req.posts[postId].comments))
    }, 
    addComment(req, res) {
      postId=int(req.params.postId)
      commentsId=req.store[postId[comments]].length
      req.store[postId[commentId]]=req.body 
     res.send(201,'comment added')
    },
    updateComment(req, res) {
      
      postId=int(req.params.postId)
      commentId=int(req.params.commentId)
      req.store[postId[commentId]]=req.body 
    },
    removeComment(req, res){
      postId=int(req.params.postId)
      commentId=int(req.params.commentId)
      req.store[postId[comments]].splice(commentId,1)
    }  
  }
  