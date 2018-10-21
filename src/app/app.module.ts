import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule, MatButtonModule, MatSidenavModule,
  MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
} from '@angular/material';
import { AddPitaloComponent } from './add-pitalo/add-pitalo.component';
import { ViewPitalosComponent } from './view-pitalos/view-pitalos.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '../../node_modules/@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    AddPitaloComponent,
    ViewPitalosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  FormsModule,
  MatNativeDateModule,
  AngularFireModule.initializeApp(environment.firebase),
  AngularFireDatabaseModule,
    RouterModule.forRoot([
      { path: 'add-pitalo', component: AddPitaloComponent },
      { path: 'view-pitalos', component: ViewPitalosComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
