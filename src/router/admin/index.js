import person from './person'

export default {
  name: 'admin',
  path: '',
  component: () => import('@/page/admin/home'),
  children: [
    ...person,
    {
      name: 'edit',
      path: '/edit/:id',
      props: true,
      component: () => import('@/page/admin/person/edit')
    }
  ]
}
