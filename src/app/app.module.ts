/* Import angular core module */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

/* Import app components */
import { LoginComponent } from './common/login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DetailsComponent } from './details/details.component';

/* Import service */
import { DataserviceService } from './services/dataservice.service';

/* Third party component */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { ClaimapproveComponent } from './claimapprove/claimapprove.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { TabViewModule } from 'primeng/tabview';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ApproverComponent } from './approver/approver.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    DetailsComponent,
    ClaimapproveComponent,
    ApproverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CalendarModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    DialogModule,
    TableModule,
    ToastModule,
    ConfirmDialogModule,
    TabViewModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
