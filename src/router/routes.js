
const routes = [
  {
    path: '/',
    component: () => import('layouts/LoginPage.vue'),
  },
  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: '/maintance',
        component: () => import('pages/AssetMaintancePage.vue'),
      },
      {
        path: '/movement',
        component: () => import('pages/AssetMovementPage.vue'),
      },
      {
        path: '/users',
        component: () => import('pages/UsersPage.vue'),
      },
    ]
  },

  {
    path: '/login',
    component: () => import('pages/UsersPage.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
