import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

import { NgnewsModule } from 'angular-news-api';
import { NewsApiKeyConfig } from 'angular-news-api';

import { MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; 
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';



const newsApiConfig: NewsApiKeyConfig = {
  key: '80837b960d8a4829bcba7d13bf826009'
};

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  providers: [],
  imports: [
    BrowserModule, 
    NgnewsModule.forRoot(newsApiConfig), 
    MatFormFieldModule, 
    BrowserAnimationsModule,
    FormsModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    AppRoutingModule,
    MatListModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
