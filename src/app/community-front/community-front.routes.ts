import { Routes } from "@angular/router";
import { CommunityLayout } from "./layouts/community-layout/community-layout";
import { HomePage } from "./pages/home-page/home-page";
import { PostListPage } from "./pages/post-list-page/post-list-page";
import { PostDetailPage } from "./pages/post-detail-page/post-detail-page";


export const communityFrontRoutes: Routes = [
    {
        path: '',
        component: CommunityLayout,
        children: [
            {
                path: '',
                component: HomePage
            },
            {
                path: 'posts',
                component: PostListPage
            },
            {
                path: 'posts/:idSlug',
                component: PostDetailPage
            },
            {
                path: '**',
                loadComponent: () => import('./pages/not-found-page/not-found-page')
            },
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];

export default communityFrontRoutes;