import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpModule } from '@angular/http';


import { RootComponent } from './components/root/root.component';
import { ConnectingToDatabaseService } from './services/connecting-to-database.service';



@NgModule({
  imports: [ 
    BrowserModule, 
    HttpModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  declarations: [ 
    RootComponent
  ],
  bootstrap: [ RootComponent ]
  // providers: [ ConnectingToDatabaseService ]
})
export class AppModule { }
