import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'




import Login from '@/components/Login'


import Veninfo from '@/components/info/Veninfo'


import Perinfo from '@/components/info/Perinfo'
import Baoinfo from '@/components/info/Baoinfo'
import Weiinfo from '@/components/info/Weiinfo'
import Shiinfo from '@/components/info/Shiinfo'
import Repinfo from '@/components/info/Repinfo'
import Xianinfo from '@/components/info/Xianinfo'
import Useinfo from '@/components/vehicle/Useinfo'
import Waitedapp from '@/components/vehicle/Waitedapp'
import Aprovedapp from '@/components/vehicle/Aprovedapp'
import Waitedarr from '@/components/vehicle/Waitedarr'
import Arranged from '@/components/vehicle/Arranged'
import Recordsearch from '@/components/search/Recordsearch'
import Checkvehsearch from '@/components/search/Checkvehsearch'
import Checkdriversearch from '@/components/search/Checkdriversearch'
Vue.use(Router)

let router = new Router({
// mode: 'history',
  routes: [
    {
      path:'/login',
      name:'login',
      component:Login,


    },
    {
      path: '/',
      name: '信息管理',
      component: Home,

      leaf: false,
      menuShow: true,
      iconCls: 'iconfont icon-home', // 图标样式class
      children: [
        {path: '/veninfo', component: Veninfo, name: '车辆信息',userrole:1, menuShow: true},
        {path: '/perinfo', component: Perinfo, name: '人员信息', menuShow: true},
        {path: '/baoinfo', component: Baoinfo, name: '保养信息', menuShow: true},
        {path: '/weiinfo', component: Weiinfo, name: '违章信息', menuShow: true},
        {path: '/shiinfo', component: Shiinfo, name: '事故信息', menuShow: true},
        {path: '/repinfo', component: Repinfo, name: '维修信息', menuShow: true},
        {path: '/xianinfo', component: Xianinfo, name: '限行信息', menuShow: true}
      ]
    },
    {
      path: '/',
      component: Home,
      name: '用车管理',

      menuShow: true,
      leaf: false,
      iconCls: 'iconfont icon-users', // 图标样式class
      children: [
        {path: '/useinfo', component:Useinfo, name: '用车申请',userrole:1, menuShow: true},
        {path: '/waitedapp', component:Waitedapp, name: '待审批申请', userrole:1, menuShow: true},
        {path: '/aprovedapp', component:Aprovedapp, name: '已审批申请', userrole:1, menuShow: true},

        {path: '/waitedarr', component:Waitedarr, name: '待安排用车', userrole:1, menuShow: true},
        {path: '/arranged', component:Arranged, name: '已安排用车',  userrole:1, menuShow: true},

      ]
    },
    {
      path: '/',
      component: Home,
      name: '查询统计',

      menuShow: true,
      leaf: false,
      iconCls: 'iconfont icon-users', // 图标样式class
      children: [
        {path: '/recordsearch', component:Recordsearch , name: '用车记录查询', menuShow: true},
        {path: '/checkvehsearch', component:Checkvehsearch , name: '待年检车辆查询', menuShow: true},
        {path: '/checkdriversearch', component:Checkdriversearch , name: '待年检车辆查询', menuShow: true},
      ]
    },


  ]
})



export default router
