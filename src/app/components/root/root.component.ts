import { Component, OnInit } from '@angular/core';

import { ConnectingToDatabaseService } from '../../services/connecting-to-database.service';

@Component({
  selector: 'fg-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
  providers: [ ConnectingToDatabaseService ]
})
export class RootComponent implements OnInit {

  public books: Array<any> = [];

  constructor(private _dbService: ConnectingToDatabaseService) { }

  public getData() {
    this._dbService.getData()
      .subscribe(
        (response: any) => {
          this.books = response.json();
        },
        (error: Error) => {
          throw error;
        }
      )
  }

  public toTitleCase(str: string): string {
    return str.replace(/\w\S*/g, (txt: string): string => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  ngOnInit() {
    this.getData();
  }

}