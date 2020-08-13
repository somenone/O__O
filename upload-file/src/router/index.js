import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: () =>
        import ('../views/Home/index.vue')
},{
    path: '/hello/:id',
    name: 'hello',
    meta:{
        role: ["a","b"],
    },
    component: () =>
        import ('../components/HelloWorld.vue')
}
]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next)=>{
    console.log(to.meta.role);
    if(to.meta.role){
        return next("http://baidu.com")
    }
    next()
})

export default router