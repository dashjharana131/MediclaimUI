/* Import angular core component */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Import custom component */
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { ClaimapproveComponent } from './claimapprove/claimapprove.component';
import { LoginComponent } from './common/login/login.component';
import { ApproverComponent } from './approver/approver.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'claim', component: DetailsComponent },
  { path: 'claim/status', component: ClaimapproveComponent },
  { path: 'claim/login', component: LoginComponent },
  { path: 'claim/approver', component: ApproverComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
