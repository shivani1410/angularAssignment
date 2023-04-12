import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
// import { ErrorComponent } from './assignment/error/error.component';
// import { HomeComponent } from './assignment/home/home.component';
// import { PageNotFoundComponent } from './assignment/page-not-found/page-not-found.component';
// import { Route1Component } from './assignment/route1/route1.component';
// import { Route2Component } from './assignment/route2/route2.component';
// import { ScreenRoutingComponent } from './assignment/screen-routing/screen-routing.component';
// import { ScreenRouting2Component } from './assignment/screen-routing2/screen-routing2.component';
// import { Screen1Component } from './assignment/screen1/screen1.component';
// import { Screen2Component } from './assignment/screen2/screen2.component';
// import { AuthGuardService } from './assignment/service/auth-guard.service';
// import { CanDeactivateService } from './assignment/service/can-deactivate.service';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';

// const routes: Routes = [
// {path:"", component:HomeComponent},
// {path:"screen1", canActivateChild:[AuthGuardService],component:Screen1Component,children:[
//   {path:":id", component:Route1Component},
//   {path:":id/edit",component:Route2Component}
// ]},
// {path:"screen2/:id/:name", component:Screen2Component},
// {path:"screenRoute/:id/edit",component:ScreenRoutingComponent},
// {path:"route/:id/new", component:ScreenRouting2Component,canDeactivate:[CanDeactivateService]},
// // {path:"not-found",component:PageNotFoundComponent},
// {path:"not-found",component:ErrorComponent,data:{message:'Page Not Found'}},
// {path:"**", redirectTo:"/not-found"}
// ];

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  ////////// ----------- Lazy Loading-------------- video 331---------
  {path:'recipes',loadChildren:()=>import('./components/recipes/recipe.module').then(m=>m.RecipeModule)},
  {path:'shopping-list' , loadChildren:()=>import('./components/shopping-list/shopping.module').then(m=>m.ShoppingModule)}
 
];
@NgModule({
  ////// PReloading All Modules the initial module on first load giving the fast intital load and during the idle  time when user is 
  //// browising the other page , this will load the remaining modules giving fast loading of remaining maodules
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
