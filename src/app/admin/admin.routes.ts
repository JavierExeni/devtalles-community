import { Routes } from '@angular/router';
import { AdminLayout } from './layout/admin-layout/admin-layout';
import { AdminPostList } from './pages/admin-post-list/admin-post-list';
import { AdminPostForm } from './pages/admin-post-form/admin-post-form';

export const adminRoutes: Routes = [
  {
    path: '',
    component: AdminLayout,
    children: [
      {
        path: 'list',
        component: AdminPostList,
      },
      {
        path: 'crear',
        component: AdminPostForm,
      },
      {
        path: '**',
        loadComponent: () => import('../community-front/pages/not-found-page/not-found-page'),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export default adminRoutes;
