import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GallaryComponent } from "./gallary/gallary.component";
import { ReviewComponent } from './review/review.component';
const routes: Routes = [
  { path: "", component: GallaryComponent },
  { path: 'review', component: ReviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
