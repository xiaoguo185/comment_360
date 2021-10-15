import Vue from 'vue'
import Router from 'vue-router'
import Comment from '@/views/Comment'
// import Comment from '@/views/comment1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Comment',
      component: Comment
    }
  ]
})
