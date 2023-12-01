import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { MatStepperModule } from '@angular/material/stepper';

import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserService } from './services/user.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatSortModule,
    MatPaginatorModule,
    ScrollingModule,
    CdkStepperModule,
    MatStepperModule,
    MatInputModule,
  ],
  declarations: [AppComponent, UserListComponent],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
