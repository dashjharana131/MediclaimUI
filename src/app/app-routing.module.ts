import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { ClaimapproveComponent } from './claimapprove/claimapprove.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'claim', component: DetailsComponent },
  { path: 'claim/status', component: ClaimapproveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
