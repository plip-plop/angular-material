import { BlankComponent } from './components/blank/blank.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';

const routes: Routes = [
  {
    path: 'blank',
    component: BlankComponent,
  },
  {
    path: 'button',
    component: ButtonComponent,
  },
  {
    path: 'datepicker',
    component: DatepickerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
