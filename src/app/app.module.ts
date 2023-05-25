import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

// import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
// import { ShoppingEditComponent } from './components/shopping-list/shopping-edit/shopping-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
// import { ServersComponent } from './assignment/servers/servers.component';
// import { CockpitComponent } from './assignment/cockpit/cockpit.component';
// import { ServerListComponent } from './assignment/server-list/server-list.component';
// import { GameControlComponent } from './assignment/dataExchange/game-control/game-control.component';
// import { EvenComponent } from './assignment/dataExchange/even/even.component';
// import { DisplayGameComponent } from './assignment/dataExchange/display-game/display-game.component';
// import { OddComponent } from './assignment/dataExchange/odd/odd.component';
// import { BasicDirective } from './assignment/directive/basic.directive';
// import { RederDirective } from './assignment/directive/reder.directive';
// import { UnlessDirective } from './assignment/directive/unless.directive';
// import { DropdownDirective } from './shared/directive/dropdown.directive';
// import { ShoppingListService } from './components/shopping-list/shopping-list.service';
// import { HomeComponent } from './assignment/home/home.component';
// import { Screen1Component } from './assignment/screen1/screen1.component';
// import { Screen2Component } from './assignment/screen2/screen2.component';
// import { ScreenRoutingComponent } from './assignment/screen-routing/screen-routing.component';
// import { ScreenRouting2Component } from './assignment/screen-routing2/screen-routing2.component';
// import { Route1Component } from './assignment/route1/route1.component';
// import { Route2Component } from './assignment/route2/route2.component';
// import { PageNotFoundComponent } from './assignment/page-not-found/page-not-found.component';
// import { ErrorComponent } from './assignment/error/error.component';
// import { TemplateFormComponent } from './assignment/template-form/template-form.component';
// import { ReactiveFormComponent } from './assignment/reactive-form/reactive-form.component';
// import { ReactiveFormAssignmentComponent } from './assignment/reactive-form-assignment/reactive-form-assignment.component';
// import { RecipeService } from './components/recipes/recipe.service';
import { PipeTestComponent } from './assignment/pipe-test/pipe-test.component';
import { ShortenPipe } from './assignment/pipe-test/shorten.pipe';
import { FilterPipe } from './assignment/pipe-test/filter.pipe';
import {PipePracticePipe} from './assignment/pipe-test/pipe-practice.pipe';
import { HttpRequestsComponent } from './assignment/http-requests/http-requests.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './assignment/http-requests/auth-interceptor.service';
import { AuthComponent } from './components/auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AlertComponent } from './shared/alert/alert.component';
import { PromiseComponent } from './assignment/promise/promise.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    // ServersComponent,
    // CockpitComponent,
    // ServerListComponent,
    // GameControlComponent,
    // EvenComponent,
    // DisplayGameComponent,
    // OddComponent,
    // BasicDirective,
    // RederDirective,
    // UnlessDirective,

    // HomeComponent,
    // Screen1Component,
    // Screen2Component,
    // ScreenRoutingComponent,
    // ScreenRouting2Component,
    // Route1Component,
    // Route2Component,
    // PageNotFoundComponent,
    // ErrorComponent,
    // TemplateFormComponent,
    // ReactiveFormComponent,
    // ReactiveFormAssignmentComponent,
    PipeTestComponent,
    PipePracticePipe,
    ShortenPipe,
    FilterPipe,
    HttpRequestsComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent,
    PromiseComponent,
    
    //
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
