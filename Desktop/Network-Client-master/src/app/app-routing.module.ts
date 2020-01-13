import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/pending-requests/home',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'home',
  //   redirectTo: '/pending-requests/home',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'authentication',
  //   loadChildren: './authentication/authentication.module#AuthenticationModule',
  // },
  {path: 'home', loadChildren: './home/home.module#HomeModule'},
  {path: 'profile', loadChildren: './profile/profile.module#ProfileModule'},
  {path: 'chat', loadChildren: './chat-home/chat-home.module#ChatHomeModule'},
  {path: 'blog', loadChildren: './blog/blog.module#BlogModule'},
  {path: 'authentification', loadChildren: './authentification/authentification.module#AuthentificationModule'},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
