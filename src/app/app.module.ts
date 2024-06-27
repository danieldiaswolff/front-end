import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './services/auth.service';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { provideHttpClient } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import {
  BaseChartDirective,
  provideCharts,
  withDefaultRegisterables,
} from 'ng2-charts';

import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MenuComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaskDirective,
    FormsModule,
    NgxPaginationModule,
    BaseChartDirective,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    provideNgxMask(),
    provideHttpClient(),
    provideCharts(withDefaultRegisterables()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
