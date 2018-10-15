import Login from './views/Login.vue'
import Register from './views/Register.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import Page7 from './views/nav4/Page7.vue'
import Page77 from './views/nav4/Page77.vue'
import Page8 from './views/nav5/Page8.vue'
import Page9 from './views/nav6/Page9.vue'
import echarts from './views/charts/echarts.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/register',
        component: Register,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '用户管理',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/main', component: Main, name: '主页', hidden: true },
            { path: '/table', component: Table, name: '用户管理' },
            { path: '/user', component: user, name: '角色管理' },
            { path: '/form', component: Form, name: '菜单管理' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '策略管理',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/page4', component: Page4, name: '规则列表' },
            { path: '/page5', component: Page5, name: '新增规则' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '资源管理',
        iconCls: 'fa fa-address-card',
        children: [
            { path: '/page6', component: Page6, name: '资源管理' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '项目灰度发布管理',
        iconCls: 'fa fa-address-book',
        children: [
            { path: '/page7', component: Page7, name: '项目灰度发布' },
            { path: '/page77', component: Page77, name: '项目灰度发布管理' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '发布生命周期管理',
        iconCls: 'fa fa-area-chart',
        leaf: true,//只有一个节点
        children: [
            { path: '/page8', component: Page8, name: '发布生命周期管理' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '日志管理',
        iconCls: 'fa fa-archive',
        leaf: true,//只有一个节点
        children: [
            { path: '/page9', component: Page9, name: '日志管理' }
        ]
    },
    // {
    //     path: '/',
    //     component: Home,
    //     name: 'Charts',
    //     iconCls: 'fa fa-bar-chart',
    //     children: [
    //         { path: '/echarts', component: echarts, name: 'echarts' }
    //     ]
    // },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;