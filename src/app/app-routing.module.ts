import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorsComponent } from './vendors/vendors.component';
import { HomeComponent } from './home/home.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { VideoComponent } from './video/video.component';
const routes: Routes = [

{ path:'Home' , component:HomeComponent },
{ path:'Vendors' , component:VendorsComponent },
{ path:'Showcase', component:ShowcaseComponent},
{ path:'Profile', component:VideoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
