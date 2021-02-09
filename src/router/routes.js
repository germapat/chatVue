
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'profile', path: '', component: () => import('pages/Profile.vue') },
      { name: 'chat', path: '/chat', component: () => import('pages/Index.vue') },
      { name: 'agent', path: '/agent', component: () => import('pages/Agent/Agent.vue') }

    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
