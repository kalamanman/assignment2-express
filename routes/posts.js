module.exports = {
    getPosts(req, res){
    res.send(200,req.store)
    },
    addPost(req, res){
         postId=req.posts.length
         req.posts.push(req.body)
        req.store[postId]=req.body
     res.send(201,postId)
    },
    updatePost(req, res) {
         postId=int(req.params[postId])
        req.store[postId]=
        res(201,'updated')
    },
    removePost(req, res) {
        req.store[postId]=null
        res.send(204,{"deleted":"deleted"})
  
    }
}
