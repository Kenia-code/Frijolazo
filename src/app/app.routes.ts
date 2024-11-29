import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { ProductsComponent } from './components/products/products.component';
import { CustomersComponent } from './components/customers/customers.component';
import { ContactsComponent } from './components/contacts/contacts.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    component: HomeComponent,
  },
  {
    path: 'historia',
    component: InfoComponent,
  },
  {
    path: 'productos',
    component: ProductsComponent,
  },
  {
    path: 'clientes',
    component: CustomersComponent,
  },
  {
    path: 'contacto',
    component: ContactsComponent,
  },
];
