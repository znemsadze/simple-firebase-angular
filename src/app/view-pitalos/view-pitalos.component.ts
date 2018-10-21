import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ViewPitalosDataSource, ViewPitalosItem } from './view-pitalos-datasource';
import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';
import { pipe, Subscription } from '../../../node_modules/rxjs';
import { first } from '../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-view-pitalos',
  templateUrl: './view-pitalos.component.html',
  styleUrls: ['./view-pitalos.component.css']
})
export class ViewPitalosComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ViewPitalosDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['date', 'text'];

  subscription: Subscription;

  subscription1: Subscription;

  constructor(private db: AngularFireDatabase) {

  }

  pitalos = [];

  ngOnInit() {
    this.initFirebase();
  }

  async initFirebase() {
    this.subscription = this.db.list<ViewPitalosItem>('pitalos').valueChanges().pipe(first()).subscribe(
      value => {
        console.log(value);
        this.pitalos = value;
        this.dataSource = new ViewPitalosDataSource(this.paginator, this.sort);
        this.dataSource.data = value;
      }
    );
    this.subscription1 = this.db.list<ViewPitalosItem>('pitalos').snapshotChanges().pipe(first()).subscribe(
      value => {
        console.log(value);
        // this.pitalos = value;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subscription1.unsubscribe();
  }
}
