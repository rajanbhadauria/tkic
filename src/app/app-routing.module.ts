import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { SchoolToppersComponent } from './school-toppers/school-toppers.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact-us', component: ContactusComponent},
  {path: 'results', component: ResultsComponent},
  {path:'school-toppers', component: SchoolToppersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
