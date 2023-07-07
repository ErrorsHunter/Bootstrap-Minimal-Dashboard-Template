import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { HelpComponent } from './components/help/help.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: SidebarComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'help', component: HelpComponent }
      // Add more routes for other components
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
