import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import('@/views/home.vue'),
    meta: {
      title: "首页",
    }
  },
  {
    path: "/about/:id",
    component: () => import('@/views/about.vue'),
    children: [
      {
        path: 'son',
        component: () => import('@/views/son.vue'),
      }
    ]
  },
  {
    path: "/iscpn",
    name: "isComponents组件",
    meta: {
      nickname: "Jack"
    },
    component: () => import('@/views/iscpn.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // 滚动行为
  scrollBehavior(to, from, save) {

  }
})
router.beforeEach(() => {

})

export default router;
