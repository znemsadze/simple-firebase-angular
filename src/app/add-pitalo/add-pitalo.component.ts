import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';

@Component({
  selector: 'app-add-pitalo',
  templateUrl: './add-pitalo.component.html',
  styleUrls: ['./add-pitalo.component.css']
})
export class AddPitaloComponent implements OnInit {
  pitalo: any = {};


  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
  }

  onSubmit() {
    this.pitalo.date = new Date(this.pitalo.date).valueOf();
    this.db.list('pitalos').push(this.pitalo).then(
      _ => { this.pitalo = {}; console.log('sucess'); }
    );
    console.log(this.pitalo);
  }


}
