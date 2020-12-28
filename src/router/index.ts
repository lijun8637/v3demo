import {createRouter,createWebHashHistory,createWebHistory,createRouterMatcher,createMemoryHistory} from 'vue-router'


export default createRouter({
    history : createWebHistory(),
    routes:[
      {
        path:'/',
        name: 'login',
        component:()=>import('../views/login.vue')
      },{
        path:'/todoList',
        name: 'list',
        component:()=>import('../views/list.vue')
      }
    ],
})