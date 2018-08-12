import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/home/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children:[
        {
          path:'/',
          name:'homepage',
          component:() => import('@/view/home/homepage')
        },
        {
          path:'/news',
          name:'newsList',
          component:() => import('@/view/home/news_list')
        },
        {
          path:'/news/detail',
          name:'newsDetail',
          component:() => import('@/view/home/news_detail')
        },
        {
          path:'/official/beijing',
          name:'北京',
          component:() => import('@/view/home/official'),
        },
        {
          path:'/official/hebei',
          name:'河北',
          component:() => import('@/view/home/official_hebei')
        },
        {
          path:'/jobs',
          name:'jobs',
          component:() => import('@/view/home/jobs_list')
        },
        {
          path:'/jobs/detail',
          name:'jobsDetail',
          component:() => import('@/view/home/jobs_detail')
        },
        {
          path:'/message',
          name:'message',
          component:() => import('@/view/home/message')
        }
      ]
    },
    {
      path:'/admin',
      name:"admin",
      redirect:'/admin/homepage',
      component:() => import('@/view/admin/admin'),
      children:[
        {
          path:'/admin/homepage',
          name:'adminHome',
          component:() => import('@/view/admin/admin_homepage')
        },
        {
          path:'/admin/msg',
          name:'留言列表',
          component:() => import('@/view/admin/message')
        },
        {
          path:'/admin/news/list',
          name:'新闻列表',
          component:() => import('@/view/admin/news_list')
        },
        {
          path:'/admin/news/add',
          name:'新闻添加',
          component:() => import('@/view/admin/news_add')
        },
        {
          path:'/admin/news/update',
          name:'新闻修改',
          component:() => import('@/view/admin/news_add')
        },
        {
          path:'/admin/jobs/list',
          name:'招就列表',
          component:() => import('@/view/admin/jobs_list')
        },
        {
          path:'/admin/jobs/add',
          name:'招就添加',
          component:() => import('@/view/admin/jobs_add')
        },
        {
          path:'/admin/jobs/update',
          name:'招就修改',
          component:() => import('@/view/admin/jobs_add')
        },
        {
          path:'/admin/swiper/home',
          name:'首页轮播图列表',
          component:() => import('@/view/admin/swiper_home')
        },
        {
          path:'/admin/swiper/news',
          name:'新闻轮播图列表',
          component:() => import('@/view/admin/swiper_news')
        },
        {
          path:'/admin/swiper/jobs',
          name:'招就轮播图列表',
          component:() => import('@/view/admin/swiper_jobs')
        },
        {
          path:'/admin/swiper/update',
          name:'轮播图修改',
          component:() => import('@/view/admin/swiper_update')
        },
        {
          path:'/admin/say/list',
          name:'大声说列表',
          component:() => import('@/view/admin/say_list')
        },
        {
          path:'/admin/say/add',
          name:'大声说添加',
          component:() => import('@/view/admin/say_add')
        },
        {
          path:'/admin/say/update',
          name:'大声说修改',
          component:() => import('@/view/admin/say_add')
        }
      ]
    },
    {
      path:'/admin/login',
      name:"后台登录",
      component:() => import('@/view/admin/login')
    },
    {
      path:'/home/say',
      name:'say',
      component:() => import('@/view/home/says')
    }
  ]
})
