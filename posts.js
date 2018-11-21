module.exports = {
    getPosts(req, res){
    res.send(200,JSON.stringify(req.posts,null,1))
    },
    addPost(req, res){
         req.body.comments=[
     req.posts.push(req.body)
     res.send(201)
    },
    updatePost(req, res) {
         req.postId=int(req.params.postId)
        req.posts[req.postId]=req.body
        res(201,'updated')
    },
    removePost(req, res) {
        req.posts.splice(int(req.params[postId]),1)
        res.send(204,{"deleted":"deleted"})
  
    }
  }