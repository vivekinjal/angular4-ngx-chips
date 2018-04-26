import { Component } from '@angular/core';
import { TagInputComponent,TagInputDropdown } from 'ngx-chips';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first'
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  public checkUsers: boolean;
  itemsAsObjects = [{value: 0, display: 'Angular'}, {value: 1, display: 'React'}];

  constructor() {
    
    // function usersData(observer) {
    //   // synchronously deliver 1, 2, and 3, then complete
    //   observer.next({'id':1,'value': 'Vivek Injal'});
    //   observer.next({'id':2,'value': 'Bhaskar sharma'});
    //   observer.next({'id':1,'value': 'Amit Rawat'});
    //   observer.complete();
    
    //   // unsubscribe function doesn't need to do anything in this
    //   // because values are delivered synchronously
    //   return {unsubscribe() {}};
    // }
    
    // // Create a new Observable that will deliver the above sequence
    // const userObservable1 = new Observable(usersData);
    
    // // execute the Observable and print the result of each notification
    // userObservable1.subscribe({
    //   next(obj) { console.log(obj); },
    //   complete() { console.log('Finished sequence'); }
    // });
  }

  userObservableSource = (keyword: any): Observable<any[]> => {
    
    if (keyword && keyword.length>=3) {
      //let usersData = {'id':1,'value': 'Vivek Injal'};
      console.log(keyword);
      this.checkUsers = true;
      return Observable.of(['Vivek Injal','Bhaskar Sharma']);

    }else{
      console.log('Less than 3 chars');
      this.checkUsers = false;
      return Observable.of([]);
    }
   


  }

  public checkEmpty() {
    if (this.checkUsers === false) {
        return {
            'checkEmpty': true
        };
    }

    return null;
  }

  public validators = [this.checkEmpty];
  public errorMessages = {
    'checkEmpty': 'No record found'
  };

}
