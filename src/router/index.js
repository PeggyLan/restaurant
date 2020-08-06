import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "Peggy's House"
    }
  },
  {
    path: '/story',
    name: 'story',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "list" */ '../views/story.vue'),
    meta: {
      title: '品牌故事'
    }
  },
  {
    path: '/news',
    name: 'news',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "settings" */ '../views/news.vue'),
    meta: {
      title: '最新消息'
    }
  },
  {
    path: '/menu',
    name: 'menu',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "settings" */ '../views/menu.vue'),
    meta: {
      title: '美味餐點'
    }
  },
  {
    path: '/where',
    name: 'where',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "settings" */ '../views/where.vue'),
    meta: {
      title: '在哪裡'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "settings" */ '../views/contact.vue'),
    meta: {
      title: '聯絡我們'
    }
  },
  {
    path: '/join',
    name: 'join',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "settings" */ '../views/join.vue'),
    meta: {
      title: '加入我們'
    }
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "notfound" */ '../views/NotFound.vue'),
    meta: {
      title: '404'
    }
  },
  {
    path: '/dm',
    name: 'dm',
    component: () => import(/* webpackChunkName: "dm" */ '../views/dm.vue'),
    meta: {
      title: '最新消息'
    }
  },
  {
    path: '/member',
    name: 'member',
    component: () => import(/* webpackChunkName: "member" */ '../views/member.vue'),
    meta: {
      title: '會員專區'
    }
  },
  {
    path: '/back',
    name: 'back',
    component: () => import(/* webpackChunkName: "back" */ '../views/back.vue'),
    meta: {
      title: '後台管理'
    },
    children: [
      {
        path: '/back_message',
        name: 'back_message',
        component: () => import(/* webpackChunkName: "back_message" */ '../views/back_message.vue'),
        meta: {
          title: '後台管理/訪客留言'
        }
      },
      {
        path: '/back_member',
        name: 'back_member',
        component: () => import(/* webpackChunkName: "back_member" */ '../views/back_member.vue'),
        meta: {
          title: '後台管理/會員'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.afterEach((to, from) => {
  document.title = to.meta.title
})

export default router
