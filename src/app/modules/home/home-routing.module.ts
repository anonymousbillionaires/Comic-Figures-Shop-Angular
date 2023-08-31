import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from 'src/app/components/add-product/add-product.component';
import { ProductsComponent } from 'src/app/components/products/products.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home/products',
    pathMatch: 'full'
  },
  {
    path: '', component: HomeComponent, children: [
      {
        path: '',
        redirectTo: '/home/products',
        pathMatch: 'full'
      },
      {
        path: 'products', component: ProductsComponent
      },
      {
        path: 'add-product', component: AddProductComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
