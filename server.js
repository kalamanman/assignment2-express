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
   app.use((req,res,next)=>{
       if(req.body&& req.params[postId]){
         temp={}
         temp.url=(req.body.url).trim()
         temp.title=req.body.Title.trim()
          temp.text=req.body.Text.trim()
          req.body=JSON.parse(temp)
          next()
       }
   })
   app.use(bodyParser.json())
   
     app.get('/posts',routes.posts.getPosts)
     app.post('/posts',routes.posts.addPost)
     app.put('/posts/:postId',routes.posts.updatePost)
     app.delete('/posts/:postId',routes.posts.removePost)
     app.get('/posts:/:postId/comments',routes.comments.getComments)
     app.post('/posts:/:postId/comments',routes.comments.addComment)
     app.put('/posts:/:postId/comments/:commentId',routes.comments.updateComment)
     app.use(()=>{
      if(req.body&& req.params[commentId]){
        temp={}
       temp.Text=(req.body.Text).trim()
        req.body=Json.parse(temp)

      }
     })
     app.delete('/posts:/:postId/comments/:commentId',routes.comments.removeComment)
     
    app.listen(3000)
   