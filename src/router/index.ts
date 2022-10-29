import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home.vue'),
    meta: {
      title: '首页'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // 滚动行为
  scrollBehavior (to, from, save) {

  }
})
router.beforeEach(() => {

})

export default router
