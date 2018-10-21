import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPitaloComponent } from './add-pitalo.component';

describe('AddPitaloComponent', () => {
  let component: AddPitaloComponent;
  let fixture: ComponentFixture<AddPitaloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPitaloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPitaloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
