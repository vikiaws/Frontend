import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NewjobComponent } from './newjob/newjob.component';
import { ContactusComponent } from './contactus/contactus.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { UpdateComponent } from './update/update.component';
import { UpdateDialogComponent } from './update-dialog/update-dialog.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { AdduserComponent } from './adduser/adduser.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { BeelineDailogComponent } from './beeline-dailog/beeline-dailog.component';
import { UpdatebeelineDialogComponent } from './updatebeeline-dialog/updatebeeline-dialog.component';
import { DeletebeelineDialogComponent } from './deletebeeline-dialog/deletebeeline-dialog.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
import {PaginatorModule} from 'primeng/paginator';
import { LoginComponent } from './login/login.component';
import {ChartModule} from 'primeng/chart';
import { RegistrationComponent } from './registration/registration.component';
import { AdduserpopupComponent } from './adduserpopup/adduserpopup.component';
import { DeleteuserpopupComponent } from './deleteuserpopup/deleteuserpopup.component';
import { ContactuspopupComponent } from './contactuspopup/contactuspopup.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { UsereditdialogComponent } from './usereditdialog/usereditdialog.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    HomeComponent,
    SidenavComponent,
    NewjobComponent,
    ContactusComponent,
    DialogComponent,
    UpdateComponent,
    UpdateDialogComponent,
    DeleteDialogComponent,
    AdduserComponent,
    BeelineDailogComponent,
    UpdatebeelineDialogComponent,
    DeletebeelineDialogComponent,
    LoginComponent,
    RegistrationComponent,
    AdduserpopupComponent,
    DeleteuserpopupComponent,
    ContactuspopupComponent,
    ResetpasswordComponent,
    UsereditdialogComponent    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    CdkAccordionModule,
    MatPaginatorModule,
    MatTableModule,
    TableModule,
    ButtonModule,
    InputTextModule, 
    CardModule,
    AutoCompleteModule,
    PaginatorModule,
    DialogModule,
    MultiSelectModule,
    ChartModule

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
