const express = require('express')
const logger  =require('morgan')
const bodyParser= require('body-parser')
const routes= require('./routes/index')
//const postsRoutes=routes.posts
 //const commentsRoutes=routes.comments
let store = {}
let posts=[]
let comments=[]
const app=express()
app.use(logger('dev')) 
    app.use((req,res,next)=>{
      req.store=store
       req.posts=posts
       console.log(req.url +"\n\n"+req.params +"\n"+req.body)
      next()
   })
   app.use(bodyParser.json())
   
     app.get('/posts',routes.posts.getPosts)
     app.post('/posts',routes.posts.addPost)
     app.put('/posts/:postId',routes.posts.updatePost)
     app.delete('/posts/:postId',routes.posts.removePost)
     app.get('/posts:/:postId/comments',routes.comments.getComments)
     app.post('/posts:/:postId/comments',routes.comments.addComment)
     app.put('/posts:/:postId/comments/:commentId',routes.comments.updateComment)
     app.delete('/posts:/:postId/comments/:commentId',routes.comments.removeComment)
     
    app.listen(3000)
   