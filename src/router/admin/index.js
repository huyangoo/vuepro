import Premises from './premises'

export default {
  name: 'admin',
  path: '/',
  redirect: '/welcome',
  component: () => import('@/page/admin/home'),
  children: [
    {
      path: 'welcome',
      component: () => import('@/page/admin/welcome')
    },
    ...Premises
  ]
}
