import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'feed',
        loadChildren: () => import('../feed/feed.module').then(m => m.FeedPageModule)
      },
      {
        path: '',
        redirectTo: '/feed',
        pathMatch: 'full'
      },
      {
        path: 'discover',
        loadChildren: () => import('../discover/discover.module').then(m => m.DiscoverPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/feed',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
